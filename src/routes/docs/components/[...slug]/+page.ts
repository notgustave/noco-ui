import { error } from '@sveltejs/kit';
import type { SvelteComponent } from 'svelte';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug.replace(/\/$/, '');
  const imports = import.meta.glob<{ default: SvelteComponent }>(
    '/src/lib/components/**/*.doc.svx'
  );

  for (const path in imports) {
    if (path === `/src/lib/components/${slug}.doc.svx`) {
      const doc = await imports[path]();
      return { component: doc.default };
    }
  }

  error(404);
};
