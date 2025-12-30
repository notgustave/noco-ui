<script lang="ts">
  import { Header } from '$internal/components';
  import { title } from '$internal/state';
  import favicon from '$lib/assets/favicon.svg';
  import { Provider } from '$lib/components';
  import './layout.css';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>{title.get()}</title>
</svelte:head>

<Provider>
  <Header />
  <div class="flex-1">
    {@render children()}
  </div>

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
</Provider>
