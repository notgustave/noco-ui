<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = HTMLAttributes<HTMLDivElement>;

  let { children }: Props = $props();
</script>

<div
  class="not-prose my-8 flex min-h-56 flex-col items-center justify-center gap-6 rounded-lg border border-border/70 p-6"
>
  {@render children?.()}
</div>
