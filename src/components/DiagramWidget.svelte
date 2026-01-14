<script lang="ts">
  import {
    Chrome,
    Database,
    Lock,
    Server,
    Smartphone,
    Search,
    Video,
    ShoppingCart,
    Twitter,
    Cpu,
    Globe,
    HardDrive,
    MessageSquare,
    Zap,
    Map,
  } from 'lucide-svelte';

  export let type: 'google' | 'netflix' | 'uber' | 'amazon' | 'openai' | 'x' =
    'google';

  const presets = {
    google: {
      nodes: [
        {
          id: '1',
          type: 'service',
          label: 'Crawler',
          x: 0,
          y: 50,
          icon: Globe,
        },
        {
          id: '2',
          type: 'service',
          label: 'Indexer',
          x: 250,
          y: 50,
          icon: Database,
        },
        {
          id: '3',
          type: 'database',
          label: 'Search Index',
          x: 500,
          y: 50,
          icon: HardDrive,
        },
        {
          id: '4',
          type: 'web',
          label: 'Frontend',
          x: 250,
          y: 200,
          icon: Search,
        },
      ],
      edges: [
        { source: '1', target: '2' },
        { source: '2', target: '3' },
        { source: '4', target: '3' },
      ],
    },
    netflix: {
      nodes: [
        {
          id: '1',
          type: 'mobile',
          label: 'Client App',
          x: 0,
          y: 100,
          icon: Smartphone,
        },
        {
          id: '2',
          type: 'service',
          label: 'API Gateway',
          x: 250,
          y: 100,
          icon: Server,
        },
        {
          id: '3',
          type: 'service',
          label: 'Transcoder',
          x: 500,
          y: 0,
          icon: Video,
        },
        {
          id: '4',
          type: 'database',
          label: 'Content DB',
          x: 500,
          y: 200,
          icon: Database,
        },
      ],
      edges: [
        { source: '1', target: '2' },
        { source: '2', target: '3' },
        { source: '2', target: '4' },
      ],
    },
    uber: {
      nodes: [
        {
          id: '1',
          type: 'mobile',
          label: 'Rider App',
          x: 0,
          y: 50,
          icon: Smartphone,
        },
        {
          id: '2',
          type: 'mobile',
          label: 'Driver App',
          x: 0,
          y: 150,
          icon: Smartphone,
        },
        {
          id: '3',
          type: 'service',
          label: 'Dispatch',
          x: 250,
          y: 100,
          icon: Zap,
        },
        {
          id: '4',
          type: 'service',
          label: 'Maps Service',
          x: 500,
          y: 100,
          icon: Map,
        },
      ],
      edges: [
        { source: '1', target: '3' },
        { source: '2', target: '3' },
        { source: '3', target: '4' },
      ],
    },
    amazon: {
      nodes: [
        {
          id: '1',
          type: 'web',
          label: 'Storefront',
          x: 0,
          y: 100,
          icon: ShoppingCart,
        },
        {
          id: '2',
          type: 'service',
          label: 'Order Svc',
          x: 250,
          y: 50,
          icon: Server,
        },
        {
          id: '3',
          type: 'service',
          label: 'Inventory',
          x: 250,
          y: 150,
          icon: Database,
        },
        {
          id: '4',
          type: 'database',
          label: 'Main DB',
          x: 500,
          y: 100,
          icon: HardDrive,
        },
      ],
      edges: [
        { source: '1', target: '2' },
        { source: '1', target: '3' },
        { source: '2', target: '4' },
        { source: '3', target: '4' },
      ],
    },
    openai: {
      nodes: [
        {
          id: '1',
          type: 'service',
          label: 'Training',
          x: 0,
          y: 100,
          icon: Cpu,
        },
        {
          id: '2',
          type: 'database',
          label: 'Weights',
          x: 250,
          y: 100,
          icon: Database,
        },
        {
          id: '3',
          type: 'service',
          label: 'Inference API',
          x: 500,
          y: 100,
          icon: Zap,
        },
        {
          id: '4',
          type: 'web',
          label: 'ChatGPT',
          x: 750,
          y: 100,
          icon: MessageSquare,
        },
      ],
      edges: [
        { source: '1', target: '2' },
        { source: '2', target: '3' },
        { source: '4', target: '3' }, // Arrow points to API usually
      ],
    },
    x: {
      nodes: [
        {
          id: '1',
          type: 'mobile',
          label: 'Mobile App',
          x: 0,
          y: 100,
          icon: Smartphone,
        },
        {
          id: '2',
          type: 'service',
          label: 'Timeline',
          x: 250,
          y: 50,
          icon: Twitter,
        },
        {
          id: '3',
          type: 'service',
          label: 'Tweet Svc',
          x: 250,
          y: 150,
          icon: MessageSquare,
        },
        {
          id: '4',
          type: 'database',
          label: 'Graph DB',
          x: 500,
          y: 100,
          icon: Database,
        },
      ],
      edges: [
        { source: '1', target: '2' },
        { source: '1', target: '3' },
        { source: '2', target: '4' },
        { source: '3', target: '4' },
      ],
    },
  };

  $: data = presets[type];

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
</script>

<div class="relative w-full h-full bg-transparent">
  <div
    class="relative w-full h-full origin-top-left transform scale-[0.45] sm:scale-[0.55] lg:scale-[0.6]"
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
          <span class="text-sm font-semibold text-slate-800 truncate"
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
