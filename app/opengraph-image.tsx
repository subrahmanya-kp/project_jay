import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pranava Skin, Hair & Aesthetics Clinic — Dermatologist in Bangalore";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF8F5",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Background geometric accent */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(61,79,107,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(242,232,217,0.8)",
          }}
        />

        {/* Clinic mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            background: "#3D4F6B",
            color: "#FAF8F5",
            fontSize: 24,
          }}
        >
          ◇
        </div>

        {/* Main copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#5A6E8C",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Dermatologist in Bangalore
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 600,
              color: "#1C1C1E",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Pranava Skin,
            <br />
            <span style={{ color: "#3D4F6B", fontStyle: "italic" }}>
              Hair &amp; Aesthetics
            </span>
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#6B6B6B",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 400,
              maxWidth: 560,
              lineHeight: 1.5,
            }}
          >
            Medical-grade dermatology and aesthetic care.
            Board-certified dermatologist.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 14,
            color: "#9B9B9B",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span>pranavaskin.com</span>
          <span style={{ color: "#E2DDD8" }}>·</span>
          <span>Bangalore, Karnataka</span>
        </div>
      </div>
    ),
    size
  );
}
