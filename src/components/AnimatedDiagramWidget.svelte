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
    Calendar,
    User,
    Bell,
    Clock,
  } from 'lucide-svelte';
  import { onMount } from 'svelte';

  export let type:
    | 'google'
    | 'netflix'
    | 'uber'
    | 'amazon'
    | 'openai'
    | 'x'
    | 'consultation' = 'google';

  const presets = {
    consultation: {
      nodes: [
        {
          id: '1',
          type: 'web',
          label: 'Your Request',
          x: 0,
          y: 100,
          icon: User,
        },
        {
          id: '2',
          type: 'service',
          label: 'Scheduler',
          x: 250,
          y: 100,
          icon: Clock,
        },
        {
          id: '3',
          type: 'service',
          label: 'Calendar',
          x: 500,
          y: 50,
          icon: Calendar,
        },
        {
          id: '4',
          type: 'service',
          label: 'Notification',
          x: 500,
          y: 150,
          icon: Bell,
        },
      ],
      edges: [
        { source: '1', target: '2' },
        { source: '2', target: '3' },
        { source: '2', target: '4' },
      ],
    },
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
        { source: '4', target: '3' },
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

  // Animation state
  let currentEdgeIndex = -1;
  let drawProgress = 0;
  let cursorX = 0;
  let cursorY = 0;
  let showCursor = false;
  let isAnimating = false;

  // Helper to calculate path
  function getPath(sourceId, targetId) {
    const s = data.nodes.find((n) => n.id === sourceId);
    const t = data.nodes.find((n) => n.id === targetId);
    if (!s || !t) return '';

    const sx = s.x + 180;
    const sy = s.y + 42;
    const tx = t.x;
    const ty = t.y + 42;

    const c1x = sx + (tx - sx) / 2;
    const c1y = sy;
    const c2x = sx + (tx - sx) / 2;
    const c2y = ty - (ty - sy) / 4;

    return `M ${sx} ${sy} C ${c1x} ${c1y} ${c2x} ${c2y} ${tx} ${ty}`;
  }

  // Get point along path at progress (0 to 1)
  function getPointAtProgress(sourceId, targetId, progress) {
    const s = data.nodes.find((n) => n.id === sourceId);
    const t = data.nodes.find((n) => n.id === targetId);
    if (!s || !t) return { x: 0, y: 0 };

    const sx = s.x + 180;
    const sy = s.y + 42;
    const tx = t.x;
    const ty = t.y + 42;

    const c1x = sx + (tx - sx) / 2;
    const c1y = sy;
    const c2x = sx + (tx - sx) / 2;
    const c2y = ty - (ty - sy) / 4;

    // Cubic Bezier formula
    const t1 = 1 - progress;
    const x =
      t1 * t1 * t1 * sx +
      3 * t1 * t1 * progress * c1x +
      3 * t1 * progress * progress * c2x +
      progress * progress * progress * tx;
    const y =
      t1 * t1 * t1 * sy +
      3 * t1 * t1 * progress * c1y +
      3 * t1 * progress * progress * c2y +
      progress * progress * progress * ty;

    return { x, y };
  }

  function animateConnections() {
    if (isAnimating) return;
    isAnimating = true;
    currentEdgeIndex = -1;
    drawProgress = 0;
    showCursor = false;

    const totalEdges = data.edges.length;
    let edgeIndex = 0;

    function animateEdge() {
      if (edgeIndex >= totalEdges) {
        // Reset after a pause
        setTimeout(() => {
          isAnimating = false;
          currentEdgeIndex = -1;
          showCursor = false;
          // Restart animation
          setTimeout(animateConnections, 1000);
        }, 2000);
        return;
      }

      currentEdgeIndex = edgeIndex;
      const edge = data.edges[edgeIndex];
      const s = data.nodes.find((n) => n.id === edge.source);

      // Start cursor at source connection point
      const startPoint = getPointAtProgress(edge.source, edge.target, 0);
      cursorX = startPoint.x;
      cursorY = startPoint.y;
      showCursor = true;
      drawProgress = 0;

      // Animate drawing the line
      const duration = 1000; // 1 second per edge
      const startTime = Date.now();

      function draw() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        drawProgress = progress;

        const point = getPointAtProgress(edge.source, edge.target, progress);
        cursorX = point.x;
        cursorY = point.y;

        if (progress < 1) {
          requestAnimationFrame(draw);
        } else {
          // Move to next edge after a small pause
          setTimeout(() => {
            edgeIndex++;
            animateEdge();
          }, 300);
        }
      }

      requestAnimationFrame(draw);
    }

    // Start first edge animation after a delay
    setTimeout(() => animateEdge(), 500);
  }

  onMount(() => {
    animateConnections();
  });
</script>

<div class="relative w-full h-full bg-transparent p-8">
  <div
    class="relative w-full h-full origin-left transform scale-[0.65] sm:scale-[0.72] lg:scale-[0.8]"
  >
    <svg
      class="absolute inset-0 w-[1000px] h-[500px] pointer-events-none"
      style="z-index: 0;"
    >
      <defs>
        <marker
          id="arrowhead-animated"
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

      <!-- Draw completed edges -->
      {#each data.edges as edge, index}
        {#if index < currentEdgeIndex}
          <path
            d={getPath(edge.source, edge.target)}
            fill="none"
            stroke="#94a3b8"
            stroke-width="2"
            marker-end="url(#arrowhead-animated)"
          />
        {/if}
      {/each}

      <!-- Draw current edge being animated -->
      {#if currentEdgeIndex >= 0 && currentEdgeIndex < data.edges.length}
        {@const edge = data.edges[currentEdgeIndex]}
        {@const fullPath = getPath(edge.source, edge.target)}
        <path
          d={fullPath}
          fill="none"
          stroke="#94a3b8"
          stroke-width="2"
          stroke-dasharray="1000"
          stroke-dashoffset={1000 * (1 - drawProgress)}
          marker-end={drawProgress > 0.95 ? 'url(#arrowhead-animated)' : ''}
          style="transition: none;"
        />
      {/if}
    </svg>

    <!-- Animated Cursor -->
    {#if showCursor}
      <div
        class="absolute pointer-events-none"
        style="left: {cursorX}px; top: {cursorY}px; z-index: 50; transform: translate(-12px, -12px);"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          stroke="rgb(71, 85, 105)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
          <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
          <path
            d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
          />
        </svg>
      </div>
    {/if}

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
