import { error } from '@sveltejs/kit';
import fs from 'fs/promises';
import { addCopyButton } from 'shiki-transformer-copy-button';
import type { LayoutServerLoad } from './$types.js';
import { highlighter } from '../../../../../highlighter.js';

export const load: LayoutServerLoad = async ({ params }) => {
  const slug = params.slug.replace(/\/$/, '');
  const folderPath = `./src/internal/examples/${slug}`;
  const files: { name: string; content: string }[] = [];

  try {
    const filePaths = await fs.readdir(folderPath);

    for (const filePath of filePaths) {
      const file = await fs.readFile(`${folderPath}/${filePath}`, 'utf-8');
      const content = file.replace('$lib', 'noco-ui').trimEnd();

      files.push({
        name: filePath,
        content: highlighter.codeToHtml(content, {
          lang: 'svelte',
          themes: {
            light: 'github-light',
            dark: 'github-dark'
          },
          transformers: [addCopyButton()]
        })
      });
    }
  } catch (err) {
    console.error(err);
    error(404);
  }

  return { files };
};
