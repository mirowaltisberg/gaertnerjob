import { ImageResponse } from "next/og";

export const alt = "gaertnerjob.ch — Gartenbaujobs Schweiz";
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
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 86px",
          background: "#f3f4d7",
          borderTop: "18px solid #d9a000",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          <div style={{ width: 96, height: 100, display: "flex", position: "relative" }}>
            <span style={{ position: "absolute", width: 8, height: 62, left: 45, bottom: 14, background: "#315f22", borderRadius: 7 }} />
            <span style={{ position: "absolute", width: 48, height: 31, left: 0, top: 17, background: "#d9a000", borderRadius: "90% 8% 90% 8%", transform: "rotate(24deg)" }} />
            <span style={{ position: "absolute", width: 48, height: 31, right: 0, top: 5, background: "#769866", borderRadius: "8% 90% 8% 90%", transform: "rotate(-24deg)" }} />
            <span style={{ position: "absolute", width: 96, height: 8, left: 0, bottom: 6, background: "#6a4026", borderRadius: 7 }} />
          </div>
          <div style={{ color: "#315f22", fontSize: 24, fontWeight: 800, letterSpacing: 3 }}>
            PFLANZE · RAUM · JAHRESZEIT
          </div>
        </div>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 0,
          }}
        >
          <span style={{ fontSize: 84, fontWeight: 900, color: "#19240e", letterSpacing: -4 }}>
            gaertner
          </span>
          <span style={{ fontSize: 84, fontWeight: 900, color: "#315f22", letterSpacing: -4 }}>
            job
          </span>
          <span style={{ fontSize: 58, fontWeight: 700, color: "#6a4026", letterSpacing: -2 }}>
            .ch
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#4d5f3d",
            marginTop: 20,
            letterSpacing: 0.5,
          }}
        >
          Gartenbaustellen. Parzelle für Parzelle.
        </div>
      </div>
    ),
    { ...size }
  );
}
