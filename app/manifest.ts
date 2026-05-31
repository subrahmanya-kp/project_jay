import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pranava Skin, Hair & Aesthetics Clinic",
    short_name: "Pranava Skin",
    description: "Expert dermatology and aesthetic care in Bangalore",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5",
    theme_color: "#3D4F6B",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
