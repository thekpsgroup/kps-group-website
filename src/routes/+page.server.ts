import type { Config } from "@sveltejs/adapter-vercel";

export const config: Config = {
  isr: {
    expiration: 3600, // 1 hour cache
    allowQuery: ["utm_source", "utm_medium", "utm_campaign"],
  },
};
