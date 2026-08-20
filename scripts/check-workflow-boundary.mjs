#!/usr/bin/env node

import fs from "node:fs";
import process from "node:process";
import yaml from "js-yaml";

const [expectedVariable, expectedTrade, expectedMinimumText] = process.argv.slice(2);
const workflowPath = ".github/workflows/scrape.yml";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(expectedVariable, "expected approval variable argument is required");
assert(expectedTrade, "expected trade argument is required");
const expectedMinimum = Number(expectedMinimumText);
assert(Number.isInteger(expectedMinimum) && expectedMinimum > 0, "expected minimum must be positive");

const source = fs.readFileSync(workflowPath, "utf8");
const workflow = yaml.load(source);
assert(workflow && typeof workflow === "object", "workflow must be valid YAML");

const scrape = workflow.jobs?.scrape;
const publish = workflow.jobs?.publish;
assert(scrape && publish, "scrape and publish jobs are required");
const scrapeJson = JSON.stringify(scrape);
const publishJson = JSON.stringify(publish);
assert(workflow.permissions?.contents === "read", "workflow contents permission must be read-only");
assert(scrape.strategy?.["max-parallel"] === 2, "scraper max-parallel must be exactly 2");
assert(
  JSON.stringify(scrape.strategy?.matrix?.chunk) === JSON.stringify([0, 1, 2, 3, 4]),
  "scraper must cover exactly five balanced chunks",
);

const approvalExpression = "\${{ github.event_name == 'workflow_dispatch' && inputs.confirm_publish == 'PUBLISH' && vars." + expectedVariable + " == 'true' }}";
assert(
  publish.if === approvalExpression,
  "publisher must require manual dispatch, exact confirmation and the trade approval variable",
);
const dispatchInput = workflow.on?.workflow_dispatch?.inputs?.confirm_publish;
assert(dispatchInput?.required === false, "confirm_publish must be optional so its empty default stays fail-closed");
assert(dispatchInput?.default === "", "confirm_publish must default to an empty fail-closed value");
assert(dispatchInput?.type === "string", "confirm_publish must be an exact free-text confirmation");
assert(publish.if.includes("github.event_name == 'workflow_dispatch'") && !publish.if.includes("schedule"), "scheduled events must be unable to satisfy the publisher guard");
assert(publish.needs === "scrape", "publisher must require the complete scrape matrix");
assert(
  publishJson.includes(`--min-jobs ${expectedMinimum}`),
  "workflow publisher minimum must match the calibrated trade floor",
);

assert(!/SUPABASE|secrets\./i.test(scrapeJson), "scrape workers must never receive secrets");
assert(
  publishJson.includes("\${{ secrets.SUPABASE_SERVICE_ROLE_KEY }}"),
  "publisher service-role secret binding is missing",
);
assert(
  publishJson.includes("\${{ secrets.SUPABASE_URL }}"),
  "publisher Supabase URL binding is missing",
);

const workflowVariables = [...source.matchAll(/vars\.([A-Z0-9_]+)/g)].map((match) => match[1]);
assert(
  workflowVariables.length === 1 && workflowVariables[0] === expectedVariable,
  "workflow must reference only its trade-specific publishing approval variable",
);

const concurrencyGroup = workflow.concurrency?.group;
assert(
  typeof concurrencyGroup === "string" && concurrencyGroup.includes(expectedTrade),
  "concurrency group must be trade-specific",
);

const readme = fs.readFileSync("README.md", "utf8");
assert(readme.includes(expectedVariable), "README must document the approval variable");
assert(
  readme.includes("intentionally disabled by default"),
  "README must document disabled-by-default publishing",
);

console.log(
  `Workflow boundary passed: valid YAML, max-parallel=2, min-jobs=${expectedMinimum}, manual PUBLISH + ${expectedVariable} fail-closed.`,
);
