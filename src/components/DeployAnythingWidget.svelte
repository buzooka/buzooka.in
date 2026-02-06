<script lang="ts">
  import { onMount } from 'svelte';
  import { cn } from '$lib/utils';
  import { fly } from 'svelte/transition';

  // Icon configurations
  const inputs = [
    { name: 'OpenClaw', src: '/openclaw-new.png' },
    { name: 'NextJS', src: '/nextjs.svg' },
    { name: 'Postgres', src: '/postgres.svg' },
    { name: 'NodeJS', src: '/nodejs.png' },
    { name: 'Github', src: '/github.svg' },
  ];

  const outputs = [
    { name: 'AWS', src: '/aws.svg' },
    { name: 'GCP', src: '/gcp.svg' },
    { name: 'Azure', src: '/azure.svg' },
    { name: 'DigitalOcean', src: '/do.svg' },
    { name: 'Netlify', src: '/netlify.svg' },
  ];

  let containerWidth = 0;
  let containerHeight = 0;

  // We'll use a fixed coordinate system for the SVG and scale it
  const width = 800;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2;

  // Calculate positions
  const inputX = 80;
  const outputX = 720;
  const spacing = 70;
  const startY = (height - (inputs.length - 1) * spacing) / 2;

  let currentInputIndex = 0;
  let currentOutputIndex = 0;

  onMount(() => {
    const interval = setInterval(() => {
      currentInputIndex = (currentInputIndex + 1) % inputs.length;
      currentOutputIndex = (currentOutputIndex + 1) % outputs.length;
    }, 2000);

    return () => clearInterval(interval);
  });
</script>

<div class="w-full relative overflow-hidden">
  <!-- Removed background gradient div -->

  <div class="relative w-full aspect-[2/1] max-w-4xl mx-auto">
    <svg
      viewBox="0 0 {width} {height}"
      class="w-full h-full pointer-events-none absolute inset-0"
    >
      <defs>
        <linearGradient
          id="line-gradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="800"
          y2="0"
        >
          <stop offset="0%" stop-color="#ec4899" stop-opacity="1" />
          <stop offset="100%" stop-color="#06b6d4" stop-opacity="1" />
        </linearGradient>
        <marker
          id="arrow-head"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#ec4899" />
        </marker>
      </defs>

      <!-- Connection Lines -->
      {#each inputs as _, i}
        <!-- Left to Center -->
        <path
          d="M {inputX + 25} {startY + i * spacing} C {(inputX + centerX) /
            2} {startY + i * spacing}, {(inputX + centerX) /
            2} {centerY}, {centerX - 60} {centerY}"
          fill="none"
          stroke="url(#line-gradient)"
          stroke-width="1"
          class="animate-dash"
          style="animation-delay: -{i * 0.5}s"
        />
      {/each}

      {#each outputs as _, i}
        <!-- Center to Right -->
        <path
          d="M {centerX + 60} {centerY} C {(outputX + centerX) /
            2} {centerY}, {(outputX + centerX) / 2} {startY +
            i * spacing}, {outputX - 25} {startY + i * spacing}"
          fill="none"
          stroke="url(#line-gradient)"
          stroke-width="1"
          class="animate-dash"
          style="animation-delay: -{i * 0.7}s"
        />
      {/each}
    </svg>

    <!-- HTML Elements for Icons -->
    <div class="absolute inset-0 w-full h-full">
      <!-- Inputs (Left) -->
      {#each inputs as input, i}
        <div
          class="group absolute w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center z-10 hover:scale-110 transition-transform"
          style="left: {(inputX / width) * 100}%; top: {((startY +
            i * spacing) /
            height) *
            100}%; transform: translate(-50%, -50%);"
        >
          {#if input.text}
            <span class="text-2xl leading-none">{input.text}</span>
          {:else}
            <img
              src={input.src}
              alt={input.name}
              class="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />
          {/if}
          <div
            class="absolute -top-8 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
          >
            {input.name}
          </div>
        </div>
      {/each}

      <!-- Center (Buzooka) -->
      <div
        class="absolute w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-slate-800 rounded-full shadow-xl border-4 border-cyan-500/10 flex items-center justify-center z-20 animate-float"
        style="left: 50%; top: 50%; transform: translate(-50%, -50%);"
      >
        <img
          src="/buzooka-ai-icon.svg"
          alt="Buzooka"
          class="w-12 h-12 sm:w-14 sm:h-14 animate-pulse-slow"
        />
      </div>

      <!-- Outputs (Right) -->
      {#each outputs as output, i}
        <div
          class="group absolute w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center z-10 hover:scale-110 transition-transform"
          style="left: {(outputX / width) * 100}%; top: {((startY +
            i * spacing) /
            height) *
            100}%; transform: translate(-50%, -50%);"
        >
          <img
            src={output.src}
            alt={output.name}
            class="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          />
          <div
            class="absolute -top-8 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
          >
            {output.name}
          </div>
        </div>
      {/each}
    </div>

    <!-- Floating Particles removed -->
  </div>
</div>

<style>
  .animate-dash {
    stroke-dasharray: 10;
    animation: dash 4s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: -20;
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translate(-50%, -50%);
    }
    50% {
      transform: translate(-50%, -55%);
    }
  }

  .animate-pulse-slow {
    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
