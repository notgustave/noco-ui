<script lang="ts">
  import { title as t } from '$internal/state';

  let { children, title, description } = $props();

  $effect(() => {
    if (title) {
      t.set(title);
    }
  });
</script>

<div
  class="mx-auto prose max-w-3xl py-12 prose-gray dark:prose-invert prose-headings:font-semibold prose-h1:mb-6 prose-pre:border prose-pre:border-border/50 prose-pre:bg-accent/50!"
>
  <h1>{title}</h1>

  {#if description}
    <p>{description}</p>
  {/if}

  {@render children?.()}
</div>
