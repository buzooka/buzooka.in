<script lang="ts">
  import { cn } from '$lib/utils';
  export let data: {
    nodes: Array<{
      id: string;
      type: string;
      label: string;
      x: number;
      y: number;
      icon: any;
    }>;
    edges: Array<{
      source: string;
      target: string;
    }>;
  };

  // Helper to calculate path
  function getPath(sourceId, targetId) {
    const s = data.nodes.find((n) => n.id === sourceId);
    const t = data.nodes.find((n) => n.id === targetId);
    if (!s || !t) return '';

    // Simple bezier from right of source to left of target
    const sx = s.x + 180; // Node width is 180 (scaled)
    const sy = s.y + 42; // Node height center
    const tx = t.x;
    const ty = t.y + 42;

    const c1x = sx + (tx - sx) / 2;
    const c1y = sy;
    const c2x = sx + (tx - sx) / 2;
    const c2y = ty - (ty - sy) / 4;

    return `M ${sx} ${sy} C ${c1x} ${c1y} ${c2x} ${c2y} ${tx} ${ty}`;
  }

  let className = '';
  export { className as class };
</script>

<div class={cn('relative w-full h-full bg-transparent p-8', className)}>
  <div
    class="relative w-full h-full origin-left transform scale-[0.65] sm:scale-[0.72] lg:scale-[0.8]"
  >
    <svg
      class="absolute inset-0 w-[1000px] h-[500px] pointer-events-none"
      style="z-index: 0;"
    >
      <defs>
        <marker
          id="arrowhead"
          viewBox="0 0 10 7"
          markerWidth="7.5"
          markerHeight="5.25"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
        </marker>
      </defs>
      {#each data.edges as edge}
        <path
          d={getPath(edge.source, edge.target)}
          fill="none"
          stroke="#94a3b8"
          stroke-width="2"
          marker-end="url(#arrowhead)"
        />
      {/each}
    </svg>

    {#each data.nodes as node}
      <div
        class="absolute w-[180px] rounded-lg border border-slate-200 bg-white shadow-md flex flex-col"
        style="left: {node.x}px; top: {node.y}px; z-index: 10;"
      >
        <!-- Handles -->
        <div
          class="absolute -left-1.5 top-1/2 -mt-1.5 h-3 w-3 rounded-full border-2 border-slate-400 bg-white"
        ></div>
        <div
          class="absolute -right-1.5 top-1/2 -mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-slate-400"
        ></div>

        <div
          class="flex items-center gap-2 border-b border-slate-200 p-3 bg-slate-50/50 rounded-t-lg"
        >
          <div class="text-slate-500">
            <svelte:component this={node.icon} size={16} />
          </div>
          <span class="text-sm font-semibold text-slate-900 truncate"
            >{node.label}</span
          >
        </div>

        <div class="p-3 flex gap-2">
          <!-- Mock integration icons -->
          <div
            class="h-4 w-4 rounded-full bg-slate-100 flex items-center justify-center"
          >
            <div class="h-2 w-2 rounded-full bg-slate-300"></div>
          </div>
          <div
            class="h-4 w-4 rounded-full bg-slate-100 flex items-center justify-center"
          >
            <div class="h-2 w-2 rounded-full bg-slate-300"></div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
