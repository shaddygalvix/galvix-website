import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.galvix.com',
  integrations: [tailwind(), react(), sitemap()],
  redirects: {
    "/resources/[slug]": "/article/[slug]",
    "/topic/[slug]": "/resources/",
    "/type/[slug]": "/resources/",
    "/free-nexus-study": "/request-demo"
  }
});