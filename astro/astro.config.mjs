// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: "https://luisdavidgd.github.io",
  integrations: [alpinejs()],

  vite: {
    plugins: []
  }
});