import { sentenceCase } from 'change-case';
import type { PageLoad } from './$types';

type Item = {
  name: string;
  slug: string;
};

export const load: PageLoad = async () => {
  const imports = import.meta.glob<string>('/src/internal/examples/**/index.svelte');
  const items: Item[] = [];

  for (const path in imports) {
    const parts = path.split('/');
    const name = parts[parts.length - 2];
    const slug = path.replace('/src/internal/examples/', '').replace('/index.svelte', '');

    items.push({ name: sentenceCase(name), slug });
  }

  return { items };
};
