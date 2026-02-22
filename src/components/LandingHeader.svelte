<script lang="ts">
  import { cn } from '$lib/utils';
  import { CheckCircle } from 'lucide-svelte';
  import { onMount } from 'svelte';

  export let activePage: string = '';
  export let showDots: boolean = true;

  let hasSchedule = false;
  let hasFaq = false;
  onMount(() => {
    hasSchedule = !!document.getElementById('schedule');
    hasFaq = !!document.getElementById('faq');
  });
</script>

<header
  class="px-4 lg:px-6 h-14 flex items-center pt-[32px] pb-[29px] sticky top-0 z-50 bg-background/60 backdrop-blur-md"
  style={"--dot-size: 1px;--dot-space: 22px; background: linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space), linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space), var(--dot-color);"}
>
  <div class="flex">
    <a
      href="/"
      class="items-left justify-start relative top-[0px] sm:left-[12px] lg:left-[24px]"
    >
      <img
        alt="Buzooka"
        src="/buzooka-logo-new.svg"
        width="165"
        height="44"
        class="dark:hidden"
        style="height: 44px;"
      />
      <img
        alt="Buzooka"
        src="/buzooka-logo-new-dark.svg"
        width="165"
        height="44"
        class="hidden dark:block"
        style="height: 44px;"
      />
    </a>
  </div>
  <nav class="ml-auto flex gap-4 sm:gap-6 flex-1 justify-end items-center">
    <a
      href="/#features"
      class="text-sm font-medium hover:underline underline-offset-4 py-3 hidden sm:block"
    >
      What
    </a>
    <a
      href="/pricing"
      class={cn(
        "text-sm font-medium hover:underline underline-offset-4 py-3 hidden sm:block",
        activePage === 'pricing' && "underline"
      )}
    >
      Pricing
    </a>
    <a
      href={hasSchedule ? "#schedule" : "/consultation"}
      class={cn(
        "text-sm font-medium hover:underline underline-offset-4 py-3 hidden sm:block",
        activePage === 'consultation' && "underline"
      )}
    >
      Book a Call
    </a>
    <a
      href={hasFaq ? "#faq" : "/faq"}
      class={cn(
        "text-sm font-medium hover:underline underline-offset-4 py-3 hidden sm:block",
        activePage === 'faq' && "underline"
      )}
    >
      FAQ
    </a>
    <a
      href="https://status.buzooka.in"
      target="_blank"
      class="group text-sm font-medium hover:underline underline-offset-4 py-3 hidden sm:flex items-center gap-1.5"
    >
      Status
      <div class="relative flex h-2.5 w-2.5 items-center justify-center">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
        ></span>
        <CheckCircle
          class="relative h-3 w-3 text-green-600 fill-green-500/20"
        />
      </div>
    </a>
    <a
      href="https://dash.buzooka.in/login?utm_source=header"
      target="_blank"
      class="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
    >
      Log In
    </a>
  </nav>
</header>
