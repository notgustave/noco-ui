# Noco UI

This library requires that you have a [SvelteKit](https://svelte.dev/docs/kit/introduction) project with [Tailwind CSS](https://tailwindcss.com/) set up.
If you haven't done so yet, please refer to the official documentation to begin.

To install the library, run:

```bash
pnpm add -D noco-ui
```

Update `src/routes/layout.css` file:

```css
@import 'tailwindcss';
@import 'noco-ui/styles';
```

Update `src/routes/+layout.svelte` file:

```svelte
<script lang="ts">
	import { Provider } from 'noco-ui';
	import './layout.css';

	let { children } = $props();
</script>

<Provider>
	{@render children()}
</Provider>
```

That's it! You're now ready to build with Noco UI.
