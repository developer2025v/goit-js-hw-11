import { defineConfig } from "vite";

export default defineConfig({
  base: "/goit-js-hw-11/",
  root: "src",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    sourcemap: true,
  },
});
