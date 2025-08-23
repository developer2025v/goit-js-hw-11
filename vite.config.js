import { defineConfig } from "vite";

export default defineConfig({
  base: "/goit-js-hw-11/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
  },
});
