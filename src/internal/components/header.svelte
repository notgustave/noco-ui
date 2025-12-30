<script lang="ts">
  import {
    Container,
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
  } from '$lib/components';
  import ExternalLinkIcon from '@lucide/svelte/icons/square-arrow-out-up-right';
</script>

<div class="fixed inset-x-0 top-0 z-10 border-b border-accent bg-background">
  <Container class="flex h-16 max-w-6xl items-center">
    <a href="/" class="mr-auto">
      <span class="text-xl font-semibold">Noco UI</span>
    </a>
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/docs/getting-started">Getting started</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/docs/components">Components</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/">Examples</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com/notgustave/noco-ui" target="_blank">
            Source code
            <ExternalLinkIcon />
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </Container>
</div>

<div class="mb-16"></div>
