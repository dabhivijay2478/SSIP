import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/gettoken": {
        target: "http://localhost:3000/getAccessToken",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gettoken/, ""),
      },
    },
  },
  plugins: [react()],
});
