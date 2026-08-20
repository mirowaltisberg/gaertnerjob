import type { RemoteFilter } from "@/lib/job-types";

export const DIRECT_HIRE_TARGET = 12;
export const CONTROLLED_DIRECT_HIRE_ROLES = [
  "Gärtner/in EFZ Garten- und Landschaftsbau", "Landschaftsgärtner/in",
  "Gärtner/in EFZ Pflanzenproduktion", "Gartenbau-Vorarbeiter/in",
  "Baumpfleger/in", "Gartenbau-Projektleiter/in", "Grünpfleger/in", "Gärtner/in Unterhalt",
  "Gärtner/in Kundendienst", "Friedhofsgärtner/in", "Landschaftsbau-Maschinist/in", "Gartenbau-Baustellenleiter/in",
] as const;
export interface DirectHireOpportunity { kind:"direct-hire-opportunity"; id:string; role:(typeof CONTROLLED_DIRECT_HIRE_ROLES)[number]; locationPreference:string; typePreference:string; workloadPreference:string; workModelPreference:string; description:string; ctaHref:string; }
export interface DirectHirePreferences { q?:string; loc?:string; type?:string; workload?:string; remote?:RemoteFilter; }
interface BuildDirectHireOptions { realVisibleCount:number; offset:number; preferences:DirectHirePreferences; }
const DESCRIPTION="Unser Team sucht fortlaufend einen passenden Arbeitgeber für dieses Berufsprofil. Die Anstellung erfolgt direkt bei diesem Arbeitgeber. Arbeitgeber, Lohn, Starttermin und Verfügbarkeit werden erst nach einer konkreten Abklärung genannt.";
function cleanText(value:string|undefined,fallback:string,maxLength:number):string { const cleaned=(value??"").normalize("NFKC").replace(/[\u0000-\u001f\u007f<>"'`\\]/g," ").replace(/\s+/g," ").trim().slice(0,maxLength).trim(); return cleaned||fallback; }
function normalizeType(value:string|undefined):string { const normalized=cleanText(value,"",30).toLowerCase(); if(normalized.includes("vollzeit"))return "Vollzeit"; if(normalized.includes("teilzeit"))return "Teilzeit"; if(normalized.includes("fest"))return "Festanstellung"; if(normalized.includes("tempor"))return "Temporär"; if(normalized.includes("lehr"))return "Lehrstelle"; return "Anstellungsart offen"; }
function normalizeLocation(value:string|undefined):string { const location=cleanText(value,"",60); if(!location||/(?:script|javascript|data:)/i.test(location)||/[\u202a-\u202e\u2066-\u2069]/u.test(location)||!/^[\p{L}\p{M}\p{N} .,/()\-]+$/u.test(location))return "Schweiz"; return location; }
function normalizeWorkload(value:string|undefined):string { const normalized=cleanText(value,"",24).replace(/\s/g,""); const match=normalized.match(/^(\d{1,3})(?:[-–](\d{1,3}))?%?$/); if(!match)return "Pensum offen"; const from=Number(match[1]); const to=Number(match[2]??match[1]); if(from<1||from>100||to<from||to>100)return "Pensum offen"; return from===to?`${from} %`:`${from}–${to} %`; }
function normalizeWorkModel(value:RemoteFilter|undefined):string { if(value==="true")return "Remote bevorzugt"; if(value==="false")return "Vor Ort bevorzugt"; return "Arbeitsmodell offen"; }
function stableHash(value:string):string { let hash=2166136261; for(let index=0;index<value.length;index+=1){hash^=value.charCodeAt(index);hash=Math.imul(hash,16777619);} return (hash>>>0).toString(36); }
export function buildDirectHireOpportunities({realVisibleCount,offset,preferences}:BuildDirectHireOptions):DirectHireOpportunity[]{
  if(offset!==0)return[]; const safeRealCount=Number.isFinite(realVisibleCount)?Math.max(0,Math.floor(realVisibleCount)):0; const count=Math.max(0,DIRECT_HIRE_TARGET-safeRealCount); if(count===0)return[];
  const locationPreference=normalizeLocation(preferences.loc); const typePreference=normalizeType(preferences.type); const workloadPreference=normalizeWorkload(preferences.workload); const workModelPreference=normalizeWorkModel(preferences.remote); const querySeed=cleanText(preferences.q,"gartenbau",80).toLowerCase(); const roleStart=Number.parseInt(stableHash(querySeed),36)%CONTROLLED_DIRECT_HIRE_ROLES.length;
  return Array.from({length:count},(_,index)=>{ const role=CONTROLLED_DIRECT_HIRE_ROLES[(roleStart+index)%CONTROLLED_DIRECT_HIRE_ROLES.length]; const fingerprint=["gaertner",role,locationPreference,typePreference,workloadPreference,workModelPreference,String(index)].join("|"); const params=new URLSearchParams({anliegen:"direktanstellung",profil:role,ort:locationPreference,pensum:workloadPreference}); return {kind:"direct-hire-opportunity",id:`direct-hire-gaertner-${stableHash(fingerprint)}`,role,locationPreference,typePreference,workloadPreference,workModelPreference,description:DESCRIPTION,ctaHref:`/kontakt?${params.toString()}`}; });
}
