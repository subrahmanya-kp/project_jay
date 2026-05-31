import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#3D4F6B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FAF8F5",
          fontSize: 16,
          fontFamily: "Georgia, serif",
        }}
      >
        P
      </div>
    ),
    size
  );
}
