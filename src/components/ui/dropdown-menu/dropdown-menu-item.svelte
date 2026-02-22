<script lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils';

  type $$Props = DropdownMenuPrimitive.ItemProps;

  let { class: className, ...rest }: $$Props = $props();
</script>

<DropdownMenuPrimitive.Item
  class={cn(
    'relative flex cursor-pointer select-none items-center rounded-lg px-3 py-2.5 text-sm font-medium outline-none transition-all duration-200 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent hover:text-accent-foreground hover:translate-x-0.5 active:scale-[0.98]',
    className,
  )}
  {...rest}
>
  <slot />
</DropdownMenuPrimitive.Item>
