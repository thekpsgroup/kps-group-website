import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // Vercel adapter for serverless deployment
    adapter: adapter({
      // Default configuration for luxury brand site
      runtime: "nodejs20.x",
      regions: ["iad1"],
      images: {
        sizes: [640, 828, 1200, 1920, 3840],
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 300,
        domains: ["modernbrands.co", "vercel.app"],
      },
    }),
  },
};

export default config;
