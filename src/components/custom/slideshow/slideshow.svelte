<script lang="ts">
    interface Props {
        children?: import("svelte").Snippet<[any]>;
    }

    let { children }: Props = $props();
    let slots = $derived(children || []);

    console.log("$$slots", $$slots);
    debugger;
</script>

<div class="relative w-full max-w-3xl mx-auto">
    <!-- {#each $$slots?.default as child}
        <div class="bg-red mr-4">{child}</div>
    {/each} -->
    <slot />
</div>
