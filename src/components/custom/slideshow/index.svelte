<script>
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();</script>

<div class="relative w-full max-w-3xl mx-auto">
    <!-- {#each $$slots.default.children as child}
        <div class="bg-red mr-4">{child}</div>
    {/each} -->
    {@render children?.()}
</div>
