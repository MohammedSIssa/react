import { defineConfig } from "vite";
// import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: '/social-media-app/',
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js",
  },

  // server: {
  //   port: 3000,
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8000",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
});
