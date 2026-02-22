<script lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import { flyAndScale } from '$lib/utils';
  import { cn } from '$lib/utils';

  type $$Props = DropdownMenuPrimitive.ContentProps;

  let { class: className, ...rest }: $$Props = $props();
</script>

<DropdownMenuPrimitive.Content
  preventScroll={false}
  transition={flyAndScale}
  transitionConfig={{ duration: 200, y: 8, start: 0.95 }}
  class={cn(
    'z-50 min-w-[12rem] overflow-hidden rounded-xl border border-border bg-popover/80 backdrop-blur-xl p-1.5 text-popover-foreground shadow-2xl ring-1 ring-black/5 outline-none',
    className,
  )}
  {...rest}
>
  <div class="max-h-72 overflow-y-auto hide-scrollbar">
    <slot />
  </div>
</DropdownMenuPrimitive.Content>

<style>
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
