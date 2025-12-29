<script lang="ts">
  import { cn } from '$lib/utils';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = HTMLAttributes<HTMLDivElement>;

  let { children, class: className, ...rest }: Props = $props();
</script>

<div class={cn('mx-auto max-w-7xl px-6 lg:px-8', className)} {...rest}>
  {@render children?.()}
</div>
