import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/Final_Project/" : "/",
  server: {
    port: 3000, // Change the port number to 3000
  },
});
