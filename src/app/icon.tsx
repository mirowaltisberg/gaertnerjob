import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "5px",
        }}
      >
        <div style={{ width: 34, height: 38, display: "flex", position: "relative" }}>
          <span style={{ position: "absolute", width: 3, height: 24, left: 16, bottom: 5, background: "#315f22", borderRadius: 3 }} />
          <span style={{ position: "absolute", width: 17, height: 11, left: 1, top: 5, background: "#d9a000", borderRadius: "90% 8% 90% 8%", transform: "rotate(24deg)" }} />
          <span style={{ position: "absolute", width: 17, height: 11, right: 0, top: 1, background: "#769866", borderRadius: "8% 90% 8% 90%", transform: "rotate(-24deg)" }} />
          <span style={{ position: "absolute", width: 34, height: 3, left: 0, bottom: 3, background: "#6a4026", borderRadius: 3 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
