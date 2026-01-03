<script lang="ts">
  import { title } from '$internal/state';
  import { Button, Container, GridPattern } from '$lib/components';

  title.reset();
</script>

<GridPattern class="absolute top-0 left-1/2 -z-10 -mt-36 size-250 -translate-x-1/2 opacity-50" />

<Container>
  <div class="flex flex-col items-center justify-center py-48 text-center">
    <h1 class="mb-3.5 text-4xl leading-11 font-semibold lg:mb-4 lg:text-5xl lg:leading-13">
      Clean component library for Svelte
    </h1>
    <p
      class="mb-6 max-w-md text-xl leading-8 text-muted-foreground lg:mb-8 lg:max-w-xl lg:text-xl lg:leading-8"
    >
      Now you can focus on building great things and turning ideas into reality without ever
      worrying about the UI.
    </p>
    <div class="flex gap-3">
      <Button href="/docs/getting-started" size="lg">Get started</Button>
      <Button href="/docs/components" size="lg" variant="outline">Browse components</Button>
    </div>
  </div>
</Container>
