import { createHighlighterCore } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';

export const highlighter = await createHighlighterCore({
  themes: [import('@shikijs/themes/slack-ochin'), import('@shikijs/themes/slack-dark')],
  langs: [
    import('@shikijs/langs/bash'),
    import('@shikijs/langs/javascript'),
    import('@shikijs/langs/svelte'),
    import('@shikijs/langs/typescript')
  ],
  engine: createOnigurumaEngine(import('shiki/wasm'))
});
