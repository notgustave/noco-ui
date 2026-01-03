<script lang="ts">
  import { resolve } from '$app/paths';
  import { Button, Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components';
  import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
  import EyeIcon from '@lucide/svelte/icons/eye';
  import CodeXmlIcon from '@lucide/svelte/icons/code-xml';
  import { twJoin } from 'tailwind-merge';
  import type { PageData } from './$types.js';
  import { title } from '$internal/state.js';

  let { data }: { data: PageData } = $props();

  let displayTabs = $state(false);
  let tabIndex = $state(0);

  $effect(() => {
    title.set(`${data.name} • Examples`);
  });
</script>

{#if tabIndex === 0}
  <data.component />
{:else}
  <div class="mx-auto w-full max-w-3xl overflow-hidden py-8">
    <Tabs value={data.files.length > 0 ? data.files[0].name : undefined}>
      <TabsList class="mb-2">
        {#each data.files as file (file.name)}
          <TabsTrigger value={file.name}>{file.name}</TabsTrigger>
        {/each}
      </TabsList>
      {#each data.files as file (file.name)}
        <TabsContent value={file.name}>
          <div
            class="relative prose prose-headings:font-semibold prose-pre:border prose-pre:border-border/50 prose-pre:bg-accent/50!"
          >
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html file.content}
          </div>
        </TabsContent>
      {/each}
    </Tabs>
  </div>
{/if}

<div
  class={twJoin(
    'fixed top-1/2 z-10 -translate-y-1/2 rounded-r-md border border-border bg-background p-1',
    'transition-all',
    displayTabs && 'left-0',
    !displayTabs && '-left-10'
  )}
  onpointerenter={() => (displayTabs = true)}
  onpointerleave={() => (displayTabs = false)}
>
  <div class="flex flex-col gap-0.5">
    <Button size="icon" variant="ghost" href={resolve('/docs/examples')}>
      <ArrowLeftIcon />
    </Button>
    <Button size="icon" variant="ghost" onclick={() => (tabIndex = 0)}>
      <EyeIcon />
    </Button>
    <Button size="icon" variant="ghost" onclick={() => (tabIndex = 1)}>
      <CodeXmlIcon />
    </Button>
  </div>
</div>
