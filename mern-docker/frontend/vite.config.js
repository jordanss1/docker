import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
});
