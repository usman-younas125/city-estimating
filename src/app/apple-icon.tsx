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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f2744",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: 84,
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
            marginTop: 14,
            width: 72,
            height: 10,
            borderRadius: 5,
            background: "#0891b2",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
