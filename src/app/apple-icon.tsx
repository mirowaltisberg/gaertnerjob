import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f3f4d7",
          borderRadius: "30px",
        }}
      >
        <div style={{ width: 120, height: 136, display: "flex", position: "relative" }}>
          <span style={{ position: "absolute", width: 10, height: 84, left: 56, bottom: 19, background: "#315f22", borderRadius: 8 }} />
          <span style={{ position: "absolute", width: 60, height: 38, left: 2, top: 18, background: "#d9a000", borderRadius: "90% 8% 90% 8%", transform: "rotate(24deg)" }} />
          <span style={{ position: "absolute", width: 60, height: 38, right: 0, top: 4, background: "#769866", borderRadius: "8% 90% 8% 90%", transform: "rotate(-24deg)" }} />
          <span style={{ position: "absolute", width: 120, height: 10, left: 0, bottom: 8, background: "#6a4026", borderRadius: 8 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
