import { sentenceCase } from 'change-case';
import type { PageLoad } from './$types.js';

type Item = {
  name: string;
  slug: string;
};

export const load: PageLoad = async () => {
  const paths: Record<string, () => Promise<unknown>> = import.meta.glob(
    '/src/lib/components/**/*.doc.svx'
  );
  const items: Item[] = [];

  for (const path in paths) {
    const parts = path.split('/');
    const name = parts[parts.length - 1].replace('.doc.svx', '');
    const slug = path.replace('/src/lib/components/', '').replace('.doc.svx', '');

    items.push({ name: sentenceCase(name), slug });
  }

  return { items: items.sort((a, b) => a.name.localeCompare(b.name)) };
};
