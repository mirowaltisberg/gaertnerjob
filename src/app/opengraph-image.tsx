import { ImageResponse } from "next/og";

export const alt = "gärtnerjob.ch — Gärtnerjobs Schweiz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Leaf */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="120"
          height="120"
          style={{ marginBottom: 32 }}
        >
          <path
            d="M24 6c-7 0-12 6-12 14 0 2 .5 4 1.5 5.5C15 24 17 22 20 20c-1 4-1 8 0 12 0 0 4-3 6-8 2 5 6 8 6 8 1-4 1-8 0-12 3 2 5 4 6.5 2.5C39.5 24 40 22 40 20c0-8-5-14-12-14h-4z"
            fill="#22c55e"
          />
        </svg>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 0,
          }}
        >
          <span style={{ fontSize: 72, fontWeight: 900, color: "#f8fafc", letterSpacing: -1 }}>
            Gärtner
          </span>
          <span style={{ fontSize: 72, fontWeight: 900, color: "#22c55e", letterSpacing: -1 }}>
            job
          </span>
          <span style={{ fontSize: 52, fontWeight: 400, color: "#94a3b8", letterSpacing: -1 }}>
            .ch
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            marginTop: 20,
            letterSpacing: 0.5,
          }}
        >
          Die Jobbörse für Garten-Fachkräfte in der Schweiz
        </div>
      </div>
    ),
    { ...size }
  );
}
