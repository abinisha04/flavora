
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://YOUR-VERCEL-DOMAIN.vercel.app/sitemap.xml",
  };
}
