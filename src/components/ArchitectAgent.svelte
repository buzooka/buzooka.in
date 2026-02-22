<script lang="ts">
  import { cn } from '$lib/utils';
  import { fade, slide } from 'svelte/transition';
  import { Loader2 } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';
  import { presets } from '$lib/config/presets';
  import AnimatedDiagramWidget from '../components/AnimatedDiagramWidget.svelte';
  import MicButton from '../components/MicButton.svelte';
  import { onMount } from 'svelte';

  let isNavigating = $state(false);
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
          `https://dash.buzooka.in/login?utm_source=chat&action=chat&prompt=${encodeURIComponent(prompt)}`,
          '_blank',
        );
        isNavigating = false;
      }, 600);
    }
  };
</script>

<section
  class="relative h-auto mt-20 sm:mt-0 w-full py-12 md:pt-0 md:pb-32"
>
  <div class="container px-4 md:px-6 relative z-30">
    <div
      class="m-auto w-[460px] h-[250px] md:w-[600px] md:h-[350px] relative z-10"
    >
      <AnimatedDiagramWidget
        data={presets.google}
      />
    </div>
    <div class="flex flex-col items-center space-y-4 text-center">
      <div class="space-y-6 mb-4">
        <h2
          class="text-2xl font-sans sm:text-4xl md:text-5xl lg:text-5xl/none block w-full max-w-[700px] mx-auto pt-0"
        >
          <span class="italic font-thin text-foreground leading-normal"
            >Create <mark class="px-3 inline-block bg-yellow-300/80">system blueprints</mark>
            with our Architect Agent</span
          >
        </h2>

        <h3
          class="mx-auto italic font-thin max-w-[700px] text-muted-foreground md:text-lg pt-4"
        >
          <span class="font-medium">Code</span>,
          <span class="font-medium">Cloud</span>, and
          <span class="font-medium">CI/CD</span> simplified.
        </h3>
      </div>
      <div
        class="w-full max-w-2xl mx-auto relative group text-left transition-transform duration-500 focus-within:scale-[1.02]"
      >
        <div
          class="absolute -inset-0.5 bg-gradient-to-tr from-cyan-500 to-pink-500 rounded-md blur opacity-20 group-hover:opacity-40 transition duration-500"
        ></div>
        <div
          class="absolute -inset-0.5 bg-gradient-to-bl from-cyan-300 to-pink-300 rounded-md blur opacity-0 group-focus-within:opacity-100 transition duration-500"
        ></div>

        <!-- Ripple Effects in Canvas -->
        <div
          class="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center"
        >
          <div
            class="absolute w-[120%] aspect-square border border-cyan-500/20 rounded-full opacity-0 group-focus-within:animate-ripple"
          ></div>
          <div
            class="absolute w-[120%] aspect-square border border-pink-500/20 rounded-full opacity-0 group-focus-within:animate-ripple [animation-delay:1s]"
          ></div>
        </div>

        <!-- Animated Border Beam -->
        <div
          class="absolute -inset-[3px] rounded-[18px] overflow-hidden pointer-events-none z-0 opacity-0 group-focus-within:animate-beam-lifecycle"
        >
          <div
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0,transparent_75%,#06b6d4_85%,#ec4899_95%,transparent_100%)] animate-border-spin"
          ></div>
        </div>

        <div
          class={cn(
            'relative bg-card rounded-lg transition-all duration-600 ease-in-out overflow-hidden mx-auto',
            !isNavigating ? 'shadow-xl' : 'shadow-none',
          )}
          style={isNavigating ? 'width: 0; opacity: 0;' : 'width: 100%;'}
        >
          {#if isNavigating}
            <div
              class="absolute inset-0 flex items-center justify-center pointer-events-none"
              in:fade={{ duration: 200, delay: 100 }}
            >
              <Loader2 class="w-6 h-6 animate-spin text-slate-400" />
            </div>
          {/if}

          {#if !isNavigating}
            <form
              class="relative bg-transparent flex flex-col"
              transition:slide={{ duration: 600 }}
              onsubmit={handleGenerateBlueprint}
            >
              <textarea
                name="prompt"
                bind:this={promptInput}
                bind:value={promptText}
                placeholder={placeholderText}
                class="w-full min-h-[80px] focus:min-h-[160px] p-4 text-base bg-transparent border-0 focus:ring-0 resize-none placeholder:text-muted-foreground text-foreground outline-none transition-all duration-300 ease-in-out"
                out:fade={{ duration: 200 }}
              ></textarea>

              <div
                class="flex justify-between items-center px-4 pb-4"
                out:fade={{ duration: 200 }}
              >
                <div class="flex gap-2">
                  <MicButton
                    on:text={(e) => {
                      const transcript = e.detail;
                      if (!transcript) return;
                      promptText =
                        promptText + (promptText ? ' ' : '') + transcript;
                    }}
                  />
                </div>
                <span
                  class="inline-block rounded-[10px] bg-gradient-to-tr from-cyan-500 to-pink-500 p-0.5 transition-colors ease-in hover:focus:bg-gradient-to-bl hover:focus:from-cyan-400 hover:focus:to-pink-400 dark:from-cyan-900 dark:to-pink-900 dark:hover:focus:from-cyan-700 dark:hover:focus:to-pink-700"
                >
                  <Button
                    type="submit"
                    size="icon"
                    class="px-3 h-10 w-auto rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out flex items-center justify-center create-btn"
                  >
                    Create with Buzooka
                    <img
                      alt="Create"
                      src="/buzooka-ai-icon-light.svg"
                      width="24"
                      height="24"
                      class="ml-1 create-btn-icon dark:invert"
                    />
                  </Button>
                </span>
              </div>
            </form>
          {/if}
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
