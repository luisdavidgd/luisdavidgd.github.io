// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: "https://luisdavidgd.github.io",
  integrations: [svelte(), alpinejs()],

  vite: {
    plugins: []
  }
});