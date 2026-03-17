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
          background: "#22c55e",
          borderRadius: "10px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="33"
          height="33"
        >
          <path
            d="M24 6c-7 0-12 6-12 14 0 2 .5 4 1.5 5.5C15 24 17 22 20 20c-1 4-1 8 0 12 0 0 4-3 6-8 2 5 6 8 6 8 1-4 1-8 0-12 3 2 5 4 6.5 2.5C39.5 24 40 22 40 20c0-8-5-14-12-14h-4z"
            fill="white"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
