import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { htmlPrerender } from "vite-plugin-html-prerender";

// All routes that need to be pre-rendered for SEO
const routes = [
  "/",
  "/privacy-policy",
  "/terms-of-service",
  "/sitemap",
  "/services/residential-ev-charging",
  "/services/commercial-ev-charging",
  "/services/tesla-powerwall",
  "/services/electrical-panel-upgrades",
  "/services/general-electrical",
  "/services/generator-installation",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      htmlPrerender({
        staticDir: path.join(__dirname, "dist"),
        routes,
        selector: "#root",
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true,
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
