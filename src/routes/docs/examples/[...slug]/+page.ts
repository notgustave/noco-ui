import { error } from '@sveltejs/kit';
import { sentenceCase } from 'change-case';
import { SvelteComponent } from 'svelte';
import type { PageLoad } from './$types.js';

export const load: PageLoad = async ({ parent, params }) => {
  const data = await parent();
  const slug = params.slug.replace(/\/$/, '');
  const filePath = `/src/internal/examples/${slug}/index.svelte`;
  const examples = import.meta.glob<{ default: SvelteComponent }>(
    '/src/internal/examples/**/index.svelte'
  );

  for (const path in examples) {
    if (path === filePath) {
      const parts = path.split('/');
      const doc = await examples[path]();
      return {
        name: sentenceCase(parts[parts.length - 2]),
        component: doc.default,
        ...data
      };
    }
  }

  error(404);
};
