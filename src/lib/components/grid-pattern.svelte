<script lang="ts">
  let props = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" {...props}>
  <defs>
    <pattern id="grid-soft" width="56" height="56" patternUnits="userSpaceOnUse">
      <path d="M56 0H0V56" fill="none" class="stroke-muted-foreground/20" stroke-width="1" />
    </pattern>

    <radialGradient id="circle-fade">
      <stop offset="60%" stop-color="white" />
      <stop offset="100%" stop-color="black" />
    </radialGradient>

    <mask id="fade-mask">
      <rect width="100%" height="100%" fill="url(#circle-fade)" />
    </mask>
  </defs>

  <rect width="100%" height="100%" fill="url(#grid-soft)" mask="url(#fade-mask)" />
</svg>
