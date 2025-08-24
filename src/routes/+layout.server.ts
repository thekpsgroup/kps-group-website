import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = () => {
  return {
    deployment: {
      environment: process.env.VERCEL_ENV || "development",
      region: process.env.VERCEL_REGION || "local",
    },
  };
};
