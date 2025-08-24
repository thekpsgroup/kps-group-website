import type { Config } from "@sveltejs/adapter-vercel";

export const config: Config = {
  isr: {
    expiration: 7200, // 2 hour cache for services page
    allowQuery: ["utm_source", "utm_medium", "utm_campaign"],
  },
};
