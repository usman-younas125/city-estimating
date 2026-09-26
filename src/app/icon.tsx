import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          background: "#0f2744",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: 15,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          CE
        </div>
        <div
          style={{
            marginTop: 3,
            width: 14,
            height: 2,
            borderRadius: 1,
            background: "#0891b2",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
