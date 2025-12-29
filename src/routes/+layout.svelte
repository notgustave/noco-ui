<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { Provider } from '$lib/components';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Provider>
	{@render children()}
</Provider>
