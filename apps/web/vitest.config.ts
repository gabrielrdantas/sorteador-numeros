/// <reference types="vitest" />

import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    react(),
    // Lê os paths do tsconfig (ex: "@/components/*")
    tsconfigPaths(),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
    include: [
      "src/**/*.{test,spec}.{ts,tsx}",
    ],
    css: true, // permite importar CSS/tailwind nos componentes testados
  },
})
