<script lang="ts">
  import { onMount } from 'svelte';
  import { blur } from 'svelte/transition';
  import {
    Linkedin,
    Github,
    Facebook,
    Youtube,
    Instagram,
  } from 'lucide-svelte';

  const strategyItems = [
    'Strategy',
    'Possibilities',
    'Improvements',
    'Culture',
    'Interests',
  ];
  let currentStrategyIndex = $state(0);

  onMount(() => {
    const interval = setInterval(() => {
      currentStrategyIndex = (currentStrategyIndex + 1) % strategyItems.length;
    }, 3000);

    return () => clearInterval(interval);
  });
</script>

<section
  class="w-full py-12 md:py-24 lg:py-32"
  id="social"
>
  <div class="container px-4 md:px-6">
    <h2
      class="text-4xl italic font-thin text-slate-600 sm:text-5xl md:text-6xl text-left mb-12 h-20 flex items-center justify-start gap-4"
    >
      Talk
      <div
        class="relative w-[400px] h-full flex items-center justify-start"
      >
        {#key currentStrategyIndex}
          <span
            transition:blur={{ duration: 300 }}
            class="absolute inset-y-0 left-0 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600 truncate"
          >
            {strategyItems[currentStrategyIndex]}!
          </span>
        {/key}
      </div>
    </h2>
    <div class="flex justify-start gap-6 ml-2">
      <a
        href="https://x.com/buzooka"
        target="_blank"
        class="p-4 bg-slate-100 rounded-full hover:bg-black hover:text-white transition-colors"
        aria-label="X (formerly Twitter)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
          />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/company/buzooka-in/"
        target="_blank"
        class="p-4 bg-slate-100 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="https://github.com/buzooka"
        target="_blank"
        class="p-4 bg-slate-100 rounded-full hover:bg-slate-200 hover:text-slate-900 transition-colors"
        aria-label="GitHub"
      >
        <Github size={24} />
      </a>
      <a
        href="https://facebook.com/buzooka.in"
        target="_blank"
        class="p-4 bg-slate-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
        aria-label="Facebook"
      >
        <Facebook size={24} />
      </a>
      <a
        href="https://www.youtube.com/@buzooka_in"
        target="_blank"
        class="p-4 bg-slate-100 rounded-full hover:bg-red-600 hover:text-white transition-colors"
        aria-label="YouTube"
      >
        <Youtube size={24} />
      </a>
      <a
        href="https://www.instagram.com/buzooka_in/"
        target="_blank"
        class="p-4 bg-slate-100 rounded-full hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:text-white transition-colors"
        aria-label="Instagram"
      >
        <Instagram size={24} />
      </a>
    </div>
  </div>
</section>
