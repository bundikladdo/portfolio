// Set SITE_URL for a custom domain. Vercel supplies the production domain on its deployments.
const configuredUrl = process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);

export const siteUrl = configuredUrl ? new URL(configuredUrl).origin : undefined;
export const isIndexable = Boolean(siteUrl) && process.env.VERCEL_ENV !== "preview";
