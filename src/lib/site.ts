// Canonical production URL for this site, used to build absolute URLs in
// sitemap.xml, robots.txt, canonical tags, and JSON-LD structured data.
export const SITE_URL = (process.env.SITE_URL || "https://thevertical.ai").replace(/\/$/, "");
