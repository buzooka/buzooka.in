<script lang="ts">
  import { cn } from '$lib/utils';
  import { blur, fade, slide } from 'svelte/transition';
  import DeployAnythingWidget from '../components/DeployAnythingWidget.svelte';
  import {
    ChevronDown,
    Loader2,
  } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import { templates } from '../config/templates';
  import { onMount } from 'svelte';

  let selectedAnything = $state('Anything');
  let selectedAnywhere = $state('Anywhere');

  let promptText = $state('');
  let promptInput: HTMLTextAreaElement;
  let placeholderText = $state('Describe the product you want to architect');

  const placeholders = [
    'Describe the product you want to build',
    'A CRM dashboard for a pet grooming business',
    'A social network for vintage car enthusiasts',
    'An inventory management system for a small bakery',
    'A mobile app for tracking daily water intake',
    'Architect a Google Search clone',
  ];

  let isNavigating = $state(false);

  onMount(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % placeholders.length;
      placeholderText = placeholders[index];
    }, 3000);

    return () => clearInterval(interval);
  });

  const handleGenerateBlueprint = (e: SubmitEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;
    const formData = new FormData(target);
    const prompt = formData.get('prompt') as string;

    if (prompt) {
      isNavigating = true;
      setTimeout(() => {
        window.open(
          `https://dash.buzooka.in/login?action=chat&prompt=${encodeURIComponent(prompt)}`,
          '_blank',
        );
        isNavigating = false;
      }, 600);
    }
  };
</script>

<section
  class="w-full py-12 md:py-24 md:pb-0 from-white to-cyan-50/30 dark:from-slate-900 dark:to-slate-800/30 relative"
>
  <div class="container px-4 md:px-6 relative">
    <div class="flex flex-col items-center justify-center mb-4">
      <div class="flex items-center gap-1.5">
        <div class="flex items-center gap-1">
          {#each Array(4) as _}
            <span class="text-[24px]">⭐</span>
          {/each}
        </div>
      </div>
    </div>
    <h1
      class="text-[9px] sm:text-[11px] uppercase font-mono font-semibold text-foreground text-center mb-10 sm:mb-10"
    >
      <span
        class="border border-border inline-flex items-center rounded-xl py-0.5 pt-1.5 px-3 bg-card shadow-sm"
        >Build scalable, production-ready MVPs faster</span
      >
    </h1>
    <div class="w-full max-w-5xl mx-auto">
      <DeployAnythingWidget />
    </div>
    <div
      class="flex flex-col items-center justify-center text-center mt-8 mb-10 sm:mb-16"
    >
      <h2
        class="text-2xl font-sans sm:text-4xl md:text-5xl lg:text-5xl/none flex flex-wrap items-center justify-center gap-x-2 gap-y-4 mx-auto pt-0"
      >
        <span
          class="italic font-thin text-4xl/2 sm:text-5xl/2 text-muted-foreground leading-normal pr-2"
          >Deploy
        </span>
        <span class="inline-flex flex-col items-left">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild let:builder>
              <span
                use:builder.action
                {...builder}
                class="inline-flex items-center px-0 py-0.5 border-b-[1px] border-slate-400/60 cursor-pointer hover:border-slate-400 hover:bg-slate-50/50 data-[state=open]:border-slate-400 data-[state=open]:bg-slate-50/50 transition-all group/anything"
              >
                <span
                  transition:blur={{
                    duration: 200,
                  }}
                  class="leading-tight font-mono text-3xl sm:text-5xl text-transparent bg-clip-text bg-pink-500 py-1"
                >
                  {selectedAnything !== 'Anything'
                    ? templates.find((t) => t.value === selectedAnything)
                        ?.label
                    : 'Anything'}
                </span>
                <ChevronDown
                  class="w-0 h-5 sm:h-7 text-slate-400 opacity-0 scale-0 group-hover/anything:w-5 group-hover/anything:sm:w-7 group-hover/anything:ml-1.5 group-hover/anything:opacity-100 group-hover/anything:scale-100 group-data-[state=open]/anything:w-5 group-data-[state=open]/anything:sm:w-7 group-data-[state=open]/anything:ml-1.5 group-data-[state=open]/anything:opacity-100 group-data-[state=open]/anything:scale-100 transition-all duration-300 ease-out"
                />
              </span>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content class="w-72">
              {#each templates as template}
                <DropdownMenu.Item
                  onclick={() => (selectedAnything = template.value)}
                  class="flex flex-col items-start gap-0.5"
                >
                  <span class="text-slate-900">{template.label}</span>
                  <span
                    class="text-[9px] text-slate-400 uppercase font-mono tracking-tight"
                    >{template.type}</span
                  >
                </DropdownMenu.Item>
              {/each}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          {#if selectedAnything !== 'Anything'}
            <span
              class="absolute mt-[70px] text-left text-[9px] sm:text-[10px] text-slate-800 uppercase font-mono mt-1 opacity-70 group-hover/anything:opacity-100 transition-opacity"
            >
              {templates.find((t) => t.value === selectedAnything)?.type ||
                ''}
            </span>
          {/if}
        </span>
        <span
          class="italic font-thin text-4xl/2 sm:text-5xl/2 text-muted-foreground leading-normal px-1"
          >{selectedAnything !== 'Anything' ||
          selectedAnywhere !== 'Anywhere'
            ? 'to'
            : ''}</span
        >
        <span class="inline-flex flex-col items-left">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild let:builder>
              <span
                use:builder.action
                {...builder}
                class="inline-flex items-center px-0 py-0.5 border-b-[1px] border-slate-400/60 cursor-pointer hover:border-slate-400 hover:bg-slate-50/50 data-[state=open]:border-slate-400 data-[state=open]:bg-slate-50/50 transition-all group/anywhere"
              >
                <span
                  transition:blur={{
                    duration: 200,
                  }}
                  class="leading-tight font-mono text-3xl sm:text-5xl text-transparent bg-clip-text bg-cyan-600 py-1"
                >
                  {selectedAnywhere}
                </span>
                <ChevronDown
                  class="w-0 h-5 sm:h-7 text-slate-400 opacity-0 scale-0 group-hover/anywhere:w-5 group-hover/anywhere:sm:w-7 group-hover/anywhere:ml-1.5 group-hover/anywhere:opacity-100 group-hover/anywhere:scale-100 group-data-[state=open]/anywhere:w-5 group-data-[state=open]/anywhere:sm:w-7 group-data-[state=open]/anywhere:ml-1.5 group-data-[state=open]/anywhere:opacity-100 group-data-[state=open]/anywhere:scale-100 transition-all duration-300 ease-out"
                />
              </span>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content class="w-64">
              <DropdownMenu.Item
                onclick={() => (selectedAnywhere = 'Digital Ocean')}
                class="flex flex-col items-start gap-0.5"
              >
                <span class="text-slate-900">Digital Ocean</span>
                <span
                  class="text-[9px] text-slate-400 uppercase font-mono tracking-tight"
                  >Cloud Provider</span
                >
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          {#if selectedAnywhere !== 'Anywhere'}
            <span
              class="absolute mt-[70px] text-left text-[9px] sm:text-[10px] text-slate-800 uppercase font-mono mt-1 opacity-70 group-hover/anywhere:opacity-100 transition-opacity"
            >
              {selectedAnywhere === 'Anywhere' ? '' : 'Cloud Provider'}
            </span>
          {/if}
        </span>
      </h2>

      <div
        class="flex flex-col-reverse sm:flex-row gap-3 mt-12 sm:mt-16 items-center justify-center w-full max-w-[280px] sm:max-w-none mx-auto px-4 sm:px-0"
        transition:fade={{ duration: 300, delay: 200 }}
      >
        <span class="w-full sm:w-auto p-0.5">
          <Button
            variant="outline"
            size="lg"
            class="w-full sm:w-auto px-8 bg-background/80 backdrop-blur-sm border-border hover:bg-muted text-foreground font-medium shadow-sm h-11"
            onclick={() => {
              document
                .getElementById('schedule')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book a Call
          </Button>
        </span>
        <span
          class="group/special inline-block rounded-[8px] p-0.5 transition-colors ease-in cursor-pointer bg-gradient-to-tr from-cyan-500 to-pink-500 dark:from-cyan-900 dark:to-pink-900 hover:bg-gradient-to-bl hover:from-cyan-400 hover:to-pink-400 dark:hover:from-cyan-700 dark:hover:to-pink-700 w-full sm:w-auto"
        >
          <Button
            size="lg"
            class="w-full sm:w-auto cursor-pointer justify-center transition-colors ease-in hover:bg-muted-foreground create-btn px-8 h-11"
            onclick={() =>
              window.open(
                `https://dash.buzooka.in/login?utm_source=hero&action=create${selectedAnything !== 'Anything' ? `&node=${encodeURIComponent(selectedAnything)}` : ''}`,
                '_blank',
              )}
          >
            Start Building
            <img
              alt="Launch"
              src="/buzooka-ai-icon-light.svg"
              width="24"
              height="24"
              class="ml-1 create-btn-icon"
            />
          </Button>
        </span>
      </div>

      <!-- Micro-copy below CTA -->
      <div
        class="text-[10px] sm:text-xs text-slate-500 text-center mt-6 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 uppercase font-mono tracking-tight"
      >
        <span class="flex items-center gap-1.5">
          <svg
            class="w-3.5 h-3.5 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          Connect nodes
        </span>

        <span class="flex items-center gap-1.5">
          <svg
            class="w-3.5 h-3.5 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          Bring your own cloud
        </span>
        <span class="flex items-center gap-1.5">
          <svg
            class="w-3.5 h-3.5 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          Delivery Focused
        </span>

        <span class="flex items-center gap-1.5">
          <svg
            class="w-3.5 h-3.5 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          You own the code
        </span>
      </div>

      <!-- Powered by / Integrations Section -->
      <div class="mt-14 sm:mt-16">
        <p
          class="text-xs uppercase tracking-wider text-slate-500 text-center mb-6 font-mono"
        >
          Powered by
        </p>
        <div
          class="flex flex-wrap items-center justify-center gap-8 md:gap-12 duration-300"
        >
          <img
            src="/react.svg"
            alt="React"
            class="h-6 md:h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-50"
            loading="lazy"
          />
          <img
            src="/nextjs.svg"
            alt="Next.js"
            class="h-6 md:h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-50 dark:invert"
            loading="lazy"
          />
          <img
            src="/node_js.svg"
            alt="Node.js"
            class="h-6 md:h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-50"
            loading="lazy"
          />
          <img
            src="/postgres.svg"
            alt="PostgreSQL"
            class="h-6 md:h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-50"
            loading="lazy"
          />
          <img
            src="/docker.svg"
            alt="Docker"
            class="h-6 md:h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-50"
            loading="lazy"
          />
          <img
            src="/aws.svg"
            alt="AWS"
            class="h-5 md:h-7 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-50"
            loading="lazy"
          />
          <img
            src="/github.svg"
            alt="GitHub"
            class="h-6 md:h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-50 dark:invert"
            loading="lazy"
          />
          <img
            src="/python.svg"
            alt="Python"
            class="h-6 md:h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-50"
            loading="lazy"
          />
          <img
            src="/ts-logo.svg"
            alt="TypeScript"
            class="h-5 md:h-7 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-50"
            loading="lazy"
          />
          <img
            src="/svelte-logo.svg"
            alt="Svelte"
            class="h-6 md:h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-50"
            loading="lazy"
          />
          <img
            src="/vue.svg"
            alt="Vue"
            class="h-6 md:h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-50"
            loading="lazy"
          />
          <img
            src="/gcp.svg"
            alt="Google Cloud"
            class="h-6 md:h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-50"
            loading="lazy"
          />
          <img
            src="/azure.svg"
            alt="Azure"
            class="h-6 md:h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-50"
            loading="lazy"
          />
          <img
            src="/flutter-logo.svg"
            alt="Flutter"
            class="h-5 md:h-7 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-50"
            loading="lazy"
          />
          <img
            src="/netlify.svg"
            alt="Netlify"
            class="h-6 md:h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-50"
            loading="lazy"
          />
          <img
            src="/openclaw-new.png"
            alt="OpenClaw"
            class="h-6 md:h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-50"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <!-- Testimonial Card - Stuck to the left edge -->
    <div class="hidden fixed bottom-4 left-4 max-w-sm z-20">
      <div
        class="bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-slate-300/60 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] origin-left"
      >
        <div class="flex items-start gap-3">
          <svg
            class="w-8 h-8 text-cyan-500 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
            />
          </svg>
          <div>
            <p
              class="text-slate-700 font-medium text-sm mb-3 leading-relaxed"
            >
              "Buzooka cut our time to market time by 60%. It had quality
              boilerplates, and easy deployments."
            </p>
            <div class="flex items-center gap-2">
              <div
                class="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-pink-400 flex items-center justify-center text-white font-semibold text-xs"
              >
                VS
              </div>
              <div>
                <p class="text-slate-900 font-semibold text-xs">
                  Vishnu Sankaran
                </p>
                <p class="text-slate-500 text-xs">
                  Founder, bio.local.tech
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  :global(.create-btn:hover) .create-btn-icon,
  :global(.create-btn:focus) .create-btn-icon,
  :global(.create-btn:focus-visible) .create-btn-icon {
    transform: rotate(72deg) scale(1.1);
  }
  .create-btn-icon {
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  :global(.animate-ripple) {
    animation: ripple 2s infinite ease-out;
  }

  @keyframes ripple {
    0% {
      transform: scale(0.6);
      opacity: 0;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      transform: scale(1.8);
      opacity: 0;
    }
  }

  :global(.animate-border-spin) {
    animation: border-spin 4s linear infinite;
  }

  @keyframes border-spin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  :global(.animate-beam-lifecycle) {
    animation: beam-fade 12s linear forwards;
  }

  @keyframes beam-fade {
    0%,
    33.3% {
      opacity: 1;
    }
    66.6% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
</style>
