import path from "path";
import { defineConfig } from "vite";

// giftedeternitystreaming is deployed as a static GitHub Pages site: the
// repository is uploaded wholesale and the app entry is the self-contained
// index.html in the repository root. The previous config rooted Vite at
// "client/" and bundled server/_core/index.ts — neither directory exists in
// this repository, so `npm run build` always failed. This config builds the
// static site that is actually present.
export default defineConfig({
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});