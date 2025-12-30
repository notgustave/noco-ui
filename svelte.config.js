import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { addCopyButton } from 'shiki-transformer-copy-button';
import { highlighter } from './highlighter.js';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const html = escapeSvelte(
        highlighter.codeToHtml(code, {
          lang,
          theme: 'github-light',
          transformers: [addCopyButton()]
        })
      );
      return `{@html \`<div class="relative">${html}</div>\` }`;
    }
  },
  layout: path.join(dirname, 'src', 'internal', 'components', 'svx-layout.svelte')
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter(),
    alias: {
      $internal: './src/internal'
    }
  },
  extensions: ['.svelte', '.svx']
};

export default config;
