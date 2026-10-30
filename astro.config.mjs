import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://sol-momma.github.io",
  base: process.env.SITE_BASE ?? "/lumbarseg",
  integrations: [mdx()],
  output: "static",
});
