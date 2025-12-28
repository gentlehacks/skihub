// app/manifest.js
export default function manifest() {
  return {
    name: "SkiHub - Tech Learning Platform",
    short_name: "SkiHub",
    description: "Free curated tech learning paths for Nigerian learners",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2D5BFF",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-maskable-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
