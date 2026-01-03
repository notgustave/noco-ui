<script lang="ts">
  import { FieldDescription } from '$lib/components';
  import Form from './form.svelte';
</script>

<div
  class="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10 dark:bg-background"
>
  <div class="flex w-full max-w-md flex-col gap-7">
    <a href="/" class="text-center text-xl font-semibold">
      <span>My App</span>
    </a>

    <Form />

    <FieldDescription class="px-6 text-center">
      By clicking continue, you agree to our <a href="/">Terms of Service</a>
      and <a href="/">Privacy Policy</a>.
    </FieldDescription>
  </div>
</div>
