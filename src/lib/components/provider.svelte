<script lang="ts">
  let { children } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&family=JetBrains+Mono:wght@100..800&display=swap"
    rel="stylesheet"
  />

  <script>
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      // @ts-ignore
      window.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      // @ts-ignore
      window.theme = 'light';
    }
  </script>
</svelte:head>

{@render children()}
