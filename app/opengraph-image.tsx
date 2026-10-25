import { ImageResponse } from "next/og";
export const alt =
  "Lingesh Sashi Kumar — Building useful software. Exploring what’s next.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0b0c0e",
        color: "#ecebe6",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 80,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 26, color: "#ff5a4a", display: "flex" }}>
        LINGESH SASHI KUMAR / RUTGERS
      </div>
      <div
        style={{
          fontSize: 80,
          letterSpacing: -4,
          lineHeight: 1.05,
          marginTop: 60,
          display: "flex",
        }}
      >
        Building useful software.
      </div>
      <div
        style={{
          fontSize: 80,
          letterSpacing: -4,
          lineHeight: 1.05,
          color: "#a3a8ac",
          display: "flex",
        }}
      >
        Exploring what’s next.
      </div>
      <div style={{ fontSize: 24, marginTop: 60, display: "flex" }}>
        SOFTWARE · AI · CLOUD · SECURITY
      </div>
    </div>,
    size,
  );
}
