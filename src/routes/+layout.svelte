<script lang="ts">
  import { page } from '$app/state';
  import { Header } from '$internal/components';
  import { title } from '$internal/state';
  import favicon from '$lib/assets/favicon.svg';
  import { Provider } from '$lib/components';
  import './layout.css';

  let { children } = $props();
  let displayHeaderFooter = $derived(
    page.route.id?.startsWith('/docs/examples/') ? page.route.id === '/docs/examples' : true
  );
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>{title.get()}</title>
</svelte:head>

<Provider>
  {#if displayHeaderFooter}
    <Header />
  {/if}

  <div class="flex-1">
    {@render children()}
  </div>

  {#if displayHeaderFooter}
    <p class="px-6 pt-10 pb-8 text-center text-base text-muted-foreground">
      An open source project by
      <a
        href="https://github.com/notgustave"
        class="font-semibold underline underline-offset-2 hover:text-primary"
        target="_blank"
      >
        notgustave
      </a>
    </p>
  {/if}
</Provider>
