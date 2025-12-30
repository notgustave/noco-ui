import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';
import type { SvelteComponent } from 'svelte';

export const load: PageLoad = async ({ params }) => {
  const imports = import.meta.glob<{ default: SvelteComponent }>(
    '/src/lib/components/**/*.doc.svx'
  );

  for (const path in imports) {
    if (path === `/src/lib/components/${params.slug}.doc.svx`) {
      const doc = await imports[path]();
      return { component: doc.default };
    }
  }

  error(404);
};
