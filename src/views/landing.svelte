<script lang="ts">
  import { cn } from '$lib/utils';
  import { blur, crossfade, slide, fade } from 'svelte/transition';
  import DiagramWidget from '../components/DiagramWidget.svelte';
  import AnimatedDiagramWidget from '../components/AnimatedDiagramWidget.svelte';
  import { presets } from '$lib/config/presets';
  import { faqData } from '$lib/config/faq';
  import {
    CheckCircle,
    ArrowUp,
    Paperclip,
    Calendar,
    Linkedin,
    Github,
    Globe,
    Loader2,
    Facebook,
    Youtube,
    Instagram,
  } from 'lucide-svelte';
  import MicButton from '../components/MicButton.svelte';
  import { onMount } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
  } from '$lib/components/ui/card';

  let promptText = '';
  let promptInput: HTMLTextAreaElement;
  let placeholderText = 'Describe the product you want to architect';

  const placeholders = [
    'Describe the product you want to build',
    'A CRM dashboard for a pet grooming business',
    'A social network for vintage car enthusiasts',
    'An inventory management system for a small bakery',
    'A mobile app for tracking daily water intake',
    'Architect a Google Search clone',
  ];

  const features = [
    {
      title: 'Instant Codebase Generation',
      description:
        'Choose a template (React, Svelte, Node, Python, etc.) and generate a perfectly structured, production-ready codebase in minutes. Includes Mobile, Web, and Service layers.',
    },
    {
      title: 'One-Click Cloud Hosting',
      description:
        'Automatically set up scalable cloud infrastructure on providers like AWS, GCP, or Netlify. Eliminate guesswork over servers, scaling, and database connections.',
    },
    {
      title: 'On-Demand Deployment (CI/CD)',
      description:
        'Get a fully configured Continuous Integration/Continuous Deployment pipeline. Push & Launch: when you commit a new feature, the pipeline automatically tests and deploys it live.',
    },
  ];

  const pricingPlans = [
    {
      title: 'Gunner',
      subtitle: 'Founder , Early-Stage Growth, Scaling',
      features: ['Everything in Scout', 'Priority Support', 'AI Agents'],
      cta: 'Coming soon',
      disabled: true,
    },
    {
      title: 'Scout',
      subtitle: 'Solo, Prototyping, Initial Launch',
      price: 9,
      originalPrice: 49,
      discountText: '~80% OFF PRELAUNCH',
      annualPrice: 348,
      features: [
        'AI Architect',
        'Unlimited Projects',
        'Unlimited Nodes',
        'Unlimited Connections',
        'Repo Generation',
        'AI Friendly Repos',
        'Cloud Provisioning',
        'Node Deployments',
        'Free One-Time Consultation',
      ],
      cta: 'Join Squad',
      disabled: false,
    },
    {
      title: 'Squadron',
      subtitle: 'Startups, Enterprise',
      features: [
        'Everything in Gunner',
        'Custom Domain',
        'Custom Integrations',
        'Dedicated Account Manager',
      ],
      cta: 'Coming soon',
      disabled: true,
    },
  ];

  // Array for the 'Who is this for?' section, updated to the solopreneur focus
  const audienceList = [
    {
      title: 'The Solo Builder',
      content:
        "You're trading your limited time for frustrating DevOps setup. Buzooka is the powerful tool that lets you launch faster and cheaper than ever before.",
    },
    {
      title: 'The Side-Project Hustler',
      content:
        'Validate your idea quickly and reliably. Get a professional, scalable stack ready for prime time without spending weekends on boilerplate.',
    },
    {
      title: 'Technical Founder',
      content:
        'Ship faster. Enable your team to focus exclusively on product-market fit rather than wrestling with infrastructure and repetitive boilerplate.',
    },
    {
      title: 'The Non-Technical Founder',
      content:
        'Launch your high-quality product without needing a co-founder or a costly architect. Focus on your product vision, not complex configurations.',
    },
    {
      title: 'Business Development Teams',
      content:
        'Accelerate your growth with automated product development. Focus on scaling your business while we handle the architectural heavy lifting.',
    },
    {
      title: 'Enterprise Teams',
      content:
        'Eliminate engineering bottlenecks on internal tooling. Deploy production-grade dashboards and utilities with architectural consistency and speed.',
    },
  ];

  let id = 1;

  const strategyItems = [
    'Strategy',
    'Possibilities',
    'Improvements',
    'Culture',
    'Interests',
  ];
  let currentStrategyIndex = 0;

  onMount(() => {
    setInterval(() => {
      if (id > 0 && id < 6) {
        id = id + 1;
      } else {
        id = 1;
      }
    }, 3000);

    setInterval(() => {
      currentStrategyIndex = (currentStrategyIndex + 1) % strategyItems.length;
    }, 3000);

    let index = 0;
    setInterval(() => {
      index = (index + 1) % placeholders.length;
      placeholderText = placeholders[index];
    }, 3000);
  });

  const [send, receive] = crossfade({});

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const body = new FormData(e.target);
    const bodyObject = Object.fromEntries(body);
    try {
      const res = waitlistSchema.parse(bodyObject);
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    fetch('https://formspree.io/f/maneyjyk', {
      method: 'POST',
      body,
      headers: {
        Accept: 'application/json',
      },
    });

    window.location.pathname = '/waitlist';
  };

  let isNavigating = false;

  const handleGenerateBlueprint = (e: SubmitEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;
    const formData = new FormData(target);
    const prompt = formData.get('prompt') as string;

    if (prompt) {
      isNavigating = true;
      setTimeout(() => {
        window.open(
          `https://dash.buzooka.in/login?prompt=${encodeURIComponent(prompt)}`,
          '_blank',
        );
        isNavigating = false;
      }, 600);
    }
  };
</script>

<header
  class="px-4 lg:px-6 h-14 flex items-center pt-[32px] pb-[29px] sticky top-0 z-50"
  style="--dot-bg: white;--dot-color: #888;--dot-size: 1px;--dot-space: 22px; background:
linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
var(--dot-color);"
>
  <div class="flex flex-1">
    <a
      href="/"
      class="items-left justify-start relative top-[0px] sm:left-[12px] lg:left-[24px]"
    >
      <img
        alt="Buzooka"
        src="/buzooka-logo.svg"
        height="44px"
        style="height: 44px;"
      />
    </a>
  </div>
  <nav class="ml-auto flex gap-4 sm:gap-6 flex-1 justify-end items-center">
    <a
      href="#features"
      class="text-sm font-medium hover:underline underline-offset-4 py-3 hidden sm:block"
      >What</a
    >
    <a
      href="#pricing"
      class="text-sm font-medium hover:underline underline-offset-4 py-3 hidden sm:block"
      >Pricing</a
    >
    <a
      href="#schedule"
      class="text-sm font-medium hover:underline underline-offset-4 py-3 hidden sm:block"
      >Book a Call</a
    >
    <a
      href="#faq"
      class="text-sm font-medium hover:underline underline-offset-4 py-3 hidden sm:block"
      >FAQ</a
    >
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
      href="https://dash.buzooka.in/login"
      target="_blank"
      class="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
    >
      Log In
    </a>
  </nav>
</header>
<div
  class="flex flex-col min-h-screen overflow-x-clip"
  style="--dot-bg: white;--dot-color: #888;--dot-size: 1px;--dot-space: 22px; background:
linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
var(--dot-color);"
>
  <main class="flex-1">
    <section
      class="relative h-auto mt-20 sm:mt-24 w-full py-12 md:py-24 lg:py-40"
    >
      <div class="container px-4 md:px-6 relative z-30">
        <div class="flex flex-col items-center space-y-4 text-center">
          <div class="space-y-6 mb-4">
            <h1 class="text-sm uppercase font-mono font-medium text-slate-600">
              <span class="font-bold">A Startup Studio</span> - Tools for Product
              Development
            </h1>
            <h2
              class="text-2xl font-sans sm:text-4xl md:text-5xl lg:text-5xl/none block w-full sm:w-[700px] mx-auto pt-0"
            >
              <span class="italic font-thin text-slate-600"
                >Launch your <mark class="px-3">MVP</mark> ,</span
              ><br />
              <div
                class="relative h-20 text-center flex items-center justify-center"
              >
                {#if id === 1}
                  <span
                    transition:blur={{
                      duration: 200,
                    }}
                    class="leading-normal absolute font-mono text-4xl/2 sm:text-5xl/2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                  >
                    the RIGHT way
                  </span>
                {/if}
                {#if id === 2}
                  <span
                    transition:blur={{
                      duration: 200,
                    }}
                    class="leading-normal absolute font-mono text-4xl/2 sm:text-5xl/2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                  >
                    with REAL architecture
                  </span>
                {/if}
                {#if id === 3}
                  <span
                    transition:blur={{
                      duration: 200,
                    }}
                    class="leading-normal absolute font-mono text-4xl/2 sm:text-5xl/2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                  >
                    with AI enabled repos
                  </span>
                {/if}
                {#if id === 4}
                  <span
                    transition:blur={{
                      duration: 200,
                    }}
                    class="leading-normal absolute font-mono text-4xl/2 sm:text-5xl/2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                  >
                    Own the CODE
                  </span>
                {/if}
                {#if id === 5}
                  <span
                    transition:blur={{
                      duration: 200,
                    }}
                    class="leading-normal absolute font-mono text-4xl/2 sm:text-5xl/2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                  >
                    Bring Your Own Cloud
                  </span>
                {/if}
                {#if id === 6}
                  <span
                    transition:blur={{
                      duration: 200,
                    }}
                    class="leading-normal absolute font-mono text-4xl/2 sm:text-5xl/2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                  >
                    Make an impact!
                  </span>
                {/if}
              </div>
            </h2>

            <h3
              class="mx-auto italic font-thin max-w-[700px] text-slate-600 md:text-lg dark:text-gray-400 pt-4"
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
              class="absolute -inset-0.5 bg-gradient-to-tr from-cyan-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"
            ></div>
            <div
              class="absolute -inset-0.5 bg-gradient-to-bl from-cyan-300 to-pink-300 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"
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
                'relative bg-white rounded-2xl transition-all duration-600 ease-in-out overflow-hidden mx-auto',
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
                  on:submit={handleGenerateBlueprint}
                >
                  <textarea
                    name="prompt"
                    bind:this={promptInput}
                    bind:value={promptText}
                    placeholder={placeholderText}
                    class="w-full min-h-[80px] focus:min-h-[160px] p-4 text-md bg-transparent border-0 focus:ring-0 resize-none placeholder:text-slate-400 text-slate-900 outline-none transition-all duration-300 ease-in-out"
                    out:fade={{ duration: 200 }}
                  ></textarea>

                  <div
                    class="flex justify-between items-center px-4 pb-4"
                    out:fade={{ duration: 200 }}
                  >
                    <div class="flex gap-2">
                      <!-- <button
                        type="button"
                        class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                        aria-label="Attach file"
                      >
                        <Paperclip size={20} />
                      </button> -->
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
                        class="px-3 h-10 w-auto rounded-lg bg-slate-900 transition-all duration-300 ease-in-out flex items-center justify-center create-btn"
                      >
                        Generate Blueprint
                        <img
                          alt="Create"
                          src="/buzooka-ai-icon-light.svg"
                          width="24"
                          class="ml-1 create-btn-icon"
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

      <div
        class="absolute top-32 lg:-left-20 xl:left-0 w-[500px] h-[300px] opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 rotate-[5deg] hidden lg:block z-10 scale-[0.7] xl:scale-[0.9]"
      >
        <DiagramWidget data={presets.google} />
      </div>

      <div
        class="absolute top-10 lg:-right-40 xl:-right-20 w-[500px] h-[300px] opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 rotate-[-20deg] hidden lg:block z-10 scale-[0.7] xl:scale-[0.9]"
      >
        <DiagramWidget data={presets.netflix} />
      </div>

      <div
        class="absolute top-2/3 lg:-left-40 xl:-left-10 -translate-y-1/2 w-[500px] h-[300px] opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 rotate-[10deg] hidden lg:block z-10 scale-[0.7] xl:scale-[0.9]"
      >
        <DiagramWidget data={presets.uber} />
      </div>

      <div
        class="absolute bottom-2 lg:-right-40 xl:-right-10 -translate-y-1/2 w-[500px] h-[300px] opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 -rotate-3 hidden lg:block z-10 scale-[0.7] xl:scale-[0.9]"
      >
        <DiagramWidget data={presets.openai} />
      </div>

      <div
        class="absolute -bottom-20 lg:-left-40 xl:-left-10 w-[500px] h-[300px] opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 -rotate-16 hidden lg:block z-10 scale-[0.7] xl:scale-[0.9]"
      >
        <DiagramWidget data={presets.amazon} />
      </div>

      <div
        class="absolute -bottom-20 lg:-right-40 xl:-right-10 w-[500px] h-[300px] opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 rotate-12 hidden lg:block z-10 scale-[0.7] xl:scale-[0.9]"
      >
        <DiagramWidget data={presets.x} />
      </div>
    </section>

    <section
      id="features"
      class="w-full py-12 md:py-12 lg:py-16 bg-gradient-to-r from-cyan-50 to-pink-50 dark:bg-gray-800"
    >
      <div class="container px-4 md:px-6">
        <h2
          class="text-3xl italic font-thin text-slate-600 sm:text-4xl md:text-5xl text-center mb-8"
        >
          What?
        </h2>
        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Card class="rounded-2xl">
            <CardHeader>
              <div class="flex flex-wrap gap-6 mb-4">
                <img
                  alt="React"
                  src="/react.svg"
                  width="30"
                  class="mb-2"
                  loading="lazy"
                />
                <img
                  alt="Svelte"
                  src="/svelte-logo.svg"
                  width="28"
                  class="mb-2"
                  loading="lazy"
                />
                <img
                  alt="Node"
                  src="/node_js.svg"
                  width="30"
                  class="mb-2"
                  loading="lazy"
                />
                <img
                  alt="Typescript"
                  src="/ts-logo.svg"
                  width="28"
                  class="mb-2"
                  loading="lazy"
                />
                <img
                  alt="Vue"
                  src="/vue.svg"
                  width="30"
                  class="mb-2"
                  loading="lazy"
                />
                <img
                  alt="Python"
                  src="/python.svg"
                  width="30"
                  class="mb-2"
                  loading="lazy"
                />
                <img
                  alt="Fluttr"
                  src="/flutter-logo.svg"
                  width="26"
                  class="mb-2"
                  loading="lazy"
                />
              </div>
              <CardTitle>{features[0].title}</CardTitle>
            </CardHeader>
            <CardContent>
              {features[0].description}
            </CardContent>
          </Card>

          <Card class="rounded-2xl">
            <CardHeader>
              <div class="flex flex-wrap gap-6 mb-4">
                <img
                  alt="AWS"
                  src="/aws.svg"
                  width="30"
                  class="mb-2"
                  loading="lazy"
                />
                <img
                  alt="GCP"
                  src="/gcp.svg"
                  width="30"
                  class="mb-2"
                  loading="lazy"
                />
                <img
                  alt="Azure"
                  src="/azure.svg"
                  width="30"
                  class="mb-2"
                  loading="lazy"
                />
                <img
                  alt="Digital Ocean"
                  src="/do.svg"
                  width="26"
                  class="mb-2"
                  loading="lazy"
                />
                <img
                  alt="Netlify"
                  src="/netlify.svg"
                  width="30"
                  class="mb-2"
                  loading="lazy"
                />
              </div>
              <CardTitle>{features[1].title}</CardTitle>
            </CardHeader>
            <CardContent>
              {features[1].description}
            </CardContent>
          </Card>

          <Card class="rounded-2xl">
            <CardHeader>
              <div class="flex flex-wrap gap-6 mb-4">
                <img
                  alt="Git"
                  src="/git.svg"
                  width="30"
                  class="mb-2"
                  loading="lazy"
                />
                <img
                  alt="Linux"
                  src="/ubuntu.svg"
                  width="30"
                  class="mb-2"
                  loading="lazy"
                />
                <img
                  alt="Docker"
                  src="/docker.svg"
                  width="30"
                  class="mb-2"
                  loading="lazy"
                />
                <img
                  alt="Android"
                  src="/android.svg"
                  width="30"
                  class="mb-2"
                  loading="lazy"
                />
                <img
                  alt="iOS"
                  src="/ios.svg"
                  width="30"
                  class="mb-2"
                  loading="lazy"
                />
                <img
                  alt="MacOS"
                  src="/macos.svg"
                  width="30"
                  class="mb-2"
                  loading="lazy"
                />
                <img
                  alt="Windows"
                  src="/microsoft.svg"
                  width="30"
                  class="mb-2"
                  loading="lazy"
                />
              </div>
              <CardTitle>{features[2].title}</CardTitle>
            </CardHeader>
            <CardContent>
              {features[2].description}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <section class="w-full py-12 md:py-12 lg:py-16">
      <div class="container px-4 md:px-6">
        <p
          class="text-3xl font-thin text-slate-600 sm:text-4xl md:text-5xl text-center sm:text-left pl-0 sm:pl-8"
        >
          <span
            class="leading-normal text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
          >
            Minimize setup time.<br />Maximize development time.
          </span>
        </p>
      </div>
    </section>

    <section
      class="w-full py-12 md:py-12 lg:py-16 bg-gradient-to-r from-cyan-50 to-pink-50 dark:bg-gray-800"
    >
      <div class="container px-4 md:px-6">
        <h2
          class="text-3xl italic font-thin text-slate-600 sm:text-4xl md:text-5xl text-center mb-8"
        >
          Who is this for?
        </h2>
        <div class="grid gap-6 md:grid-cols-3">
          {#each audienceList as audience}
            <Card class="rounded-2xl">
              <CardHeader>
                <CardTitle>{audience.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {audience.content}
              </CardContent>
            </Card>
          {/each}
        </div>
      </div>
    </section>

    <section id="pricing" class="w-full py-12 md:py-12 lg:py-16">
      <div class="container px-4 md:px-6">
        <h2
          class="text-3xl italic font-thin text-slate-600 sm:text-4xl md:text-5xl text-center mb-12"
        >
          Choose your pack!
        </h2>
        <div
          class="grid gap-6 lg:grid-cols-3 items-center max-w-6xl mx-auto px-4"
        >
          {#each pricingPlans as plan}
            <div
              class={cn(
                'relative group h-full transition-all duration-300',
                plan.title === 'Scout'
                  ? 'scale-105 z-10'
                  : 'scale-100 hover:scale-[1.02]',
              )}
            >
              <Card
                class={cn(
                  'relative flex flex-col rounded-3xl bg-white h-full transition-all duration-300',
                  plan.disabled
                    ? 'border-slate-100 bg-slate-50/50'
                    : plan.title === 'Scout'
                      ? 'border-cyan-500/20 shadow-2xl shadow-cyan-500/10 ring-1 ring-cyan-500/20'
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-lg',
                )}
              >
                <CardHeader>
                  <div class="flex justify-center w-full text-center">
                    <div>
                      <CardTitle
                        class="text-2xl font-bold {plan.title === 'Scout'
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600'
                          : 'text-slate-900'}"
                      >
                        {plan.title}
                      </CardTitle>
                      <CardDescription
                        class={cn(
                          'mt-2 text-sm font-medium mt-0',
                          plan.subtitle ? 'mb-4' : 'm-0',
                        )}
                      >
                        {plan.subtitle}
                      </CardDescription>
                    </div>
                  </div>

                  <div
                    class={cn(
                      (plan.originalPrice || plan.price || plan.annualPrice) &&
                        'mt-6 space-y-2 flex flex-col items-center',
                    )}
                  >
                    {#if plan.originalPrice}
                      <div class="flex items-center gap-2">
                        <span
                          class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800"
                        >
                          {plan.discountText}
                        </span>
                      </div>
                    {/if}
                    <div class="flex items-baseline gap-2 justify-center">
                      {#if typeof plan.price === 'number'}
                        <div class="flex items-baseline gap-1">
                          {#if plan.originalPrice}
                            <span
                              class="text-lg text-slate-500 line-through font-medium"
                              >${plan.originalPrice}</span
                            >
                          {/if}
                          <span
                            class="text-5xl font-extrabold tracking-tight text-slate-900"
                            >${plan.price}</span
                          >
                        </div>
                      {:else}
                        <span class="text-3xl font-bold text-slate-900"
                          >{plan.annualPrice}</span
                        >
                      {/if}
                    </div>
                  </div>
                </CardHeader>

                <CardContent class="flex-1 pb-0">
                  <div
                    class={cn(
                      'h-px w-full bg-slate-100 mb-4',
                      plan.title === 'Scout' &&
                        'bg-gradient-to-r from-cyan-100 to-pink-100',
                    )}
                  ></div>
                  <ul class="space-y-1">
                    {#each plan.features as feature}
                      <li class="flex items-start">
                        <div
                          class={cn(
                            'mt-0.5 rounded-full p-1',
                            plan.title === 'Scout'
                              ? 'bg-cyan-50 text-cyan-600'
                              : 'bg-slate-100 text-slate-500',
                          )}
                        >
                          <CheckCircle class="h-4 w-4" />
                        </div>
                        <span
                          class={cn(
                            'ml-3 text-sm',
                            plan.title === 'Scout'
                              ? 'text-slate-700 font-medium'
                              : 'text-slate-600',
                          )}
                        >
                          {feature}
                        </span>
                      </li>
                    {/each}
                  </ul>
                </CardContent>

                <CardFooter class="pt-8">
                  {#if plan.disabled}
                    <Button
                      class="w-full h-12 rounded-xl border-slate-200 bg-slate-50 text-slate-400 hover:bg-slate-50 hover:text-slate-400 cursor-not-allowed"
                      variant="outline"
                      disabled
                    >
                      {plan.cta}
                    </Button>
                  {:else}
                    <div class="w-full p-[3px] rounded-xl animated-gradient-bg">
                      <Button
                        class="w-full h-[46px] rounded-[10px] bg-slate-900 hover:bg-slate-800 text-white border-0 font-medium transition-all duration-300"
                        on:click={() => {
                          window.open('https://dash.buzooka.in', '_blank');
                        }}
                      >
                        {plan.cta}
                      </Button>
                    </div>
                  {/if}
                </CardFooter>
              </Card>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <section
      id="nudge-message"
      class="w-full py-12 md:py-12 lg:py-16 text-white animated-gradient-bg"
    >
      <div class="container px-4 md:px-6">
        <div class="flex flex-col items-center space-y-8 text-center">
          <div class="space-y-1">
            <h2
              class="text-3xl italic font-thin text-white sm:text-4xl md:text-5xl text-center mb-0"
            >
              You are only limited by your imagination!
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section
      id="schedule"
      class="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-r from-cyan-50 to-pink-50 dark:bg-gray-800 overflow-hidden"
    >
      <div class="container px-4 md:px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left: Illustration - Desktop Only -->
          <div class="lg:flex justify-start items-center">
            <div class="relative">
              <div
                class="absolute -inset-4 bg-gradient-to-r from-cyan-200/30 to-pink-200/30 rounded-full blur-3xl"
              ></div>
              <div
                class="m-auto w-[460px] h-[250px] md:w-[600px] md:h-[350px] relative z-10"
              >
                <AnimatedDiagramWidget
                  class="scale-75 md:scale-100"
                  data={presets.consultation}
                />
              </div>
            </div>
          </div>

          <!-- Right: Text Content -->
          <div class="space-y-6 text-center lg:text-left">
            <div class="inline-block">
              <span
                class="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-600 border border-slate-200"
              >
                Expert Guidance
              </span>
            </div>
            <h2
              class="text-4xl italic font-thin text-slate-600 sm:text-5xl md:text-6xl leading-tight"
            >
              Let's build<br />
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600"
              >
                together
              </span>
            </h2>
            <p
              class="text-lg text-slate-600 max-w-xl leading-relaxed m-auto lg:m-0"
            >
              Connect with our expert consultants for personalized guidance on
              your project. From architecture to deployment, we're here to help
              you succeed.
            </p>

            <!-- Illustration - Mobile Only -->
            <!-- <div class="lg:hidden flex justify-center py-8">
              <div
                class="sm:w-[320px] lg:w-[600px] h-[220px] relative z-10 overflow-hidden"
              >
                <AnimatedDiagramWidget
                  data={presets.consultation}
                  class="p-1"
                />
              </div>
            </div> -->

            <div class="inline-flex flex-col gap-3">
              <div
                class="inline-flex w-auto p-[3px] rounded-xl animated-gradient-bg"
              >
                <Button
                  class="gap-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 h-14 px-8 text-base font-medium"
                  on:click={() =>
                    window.open('https://cal.com/buzooka/30min', '_blank')}
                >
                  Book Consultation Call<Calendar class="w-5 h-5" />
                </Button>
              </div>
              <div class="flex items-center gap-2 text-sm text-slate-500">
                <svg
                  class="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Free 30-min session</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="w-full py-12 md:py-12 lg:py-16">
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

    <section
      id="faq"
      class="w-full py-12 md:py-12 lg:py-16 bg-gradient-to-r from-cyan-50 to-pink-50 dark:bg-gray-800"
    >
      <div class="container px-4 md:px-6">
        <h2
          class="text-3xl italic font-thin text-slate-600 sm:text-4xl md:text-5xl text-center mb-12"
        >
          Frequently Asked Questions
        </h2>
        <div class="max-w-3xl mx-auto space-y-4">
          {#each faqData as faq}
            <details
              class="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <summary
                class="flex justify-between items-center cursor-pointer p-6 font-medium text-lg text-slate-900 hover:text-cyan-600 transition-colors"
              >
                {faq.question}
                <span
                  class="ml-4 flex-shrink-0 text-cyan-500 group-open:rotate-180 transition-transform duration-300"
                >
                  <ArrowUp class="w-5 h-5" />
                </span>
              </summary>
              <div class="px-6 pb-6 text-slate-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          {/each}
        </div>
      </div>
    </section>

    <section
      id="hire"
      class="w-full py-12 md:py-12 lg:py-16 bg-gradient-to-r from-cyan-50 to-pink-50 dark:bg-gray-800"
    >
      <div class="container px-4 md:px-6">
        <h2
          class="text-3xl italic font-thin text-slate-600 sm:text-4xl md:text-5xl text-center mb-4"
        >
          Need additional support?
        </h2>

        <p
          class="text-sm text-gray-600 leading-normal mb-8 sm:text-sm text-center uppercase"
        >
          Competitively priced
        </p>
        <div class="grid gap-6 md:grid-cols-2">
          <Card class="rounded-2xl">
            <CardHeader>
              <CardTitle class="font-normal">Architect on Demand</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Get expert consultation to ensure your project is structurally
                sound for growth. Start fighting tech debt before it starts!
              </p>
            </CardContent>
          </Card>
          <Card class="rounded-2xl">
            <CardHeader>
              <CardTitle class="font-normal">Developer on Demand</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Short on time to finish that last key feature? Hire one of our
                trusted developers for feature-specific help, without the
                commitment of a full-time hire.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <section
      id="join-squad"
      class="w-full py-12 md:py-12 lg:py-16 bg-primary text-primary-foreground"
      style="--dot-bg: hsl(217, 33%, 10%);--dot-color: #888;--dot-size: 1px;--dot-space: 22px; background:
    linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
    linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
    var(--dot-color);"
    >
      <div class="container px-4 md:px-6">
        <div class="flex flex-col items-center space-y-8 text-center">
          <div class="space-y-1">
            <h2
              class="text-3xl italic font-thin text-slate-300 sm:text-4xl md:text-5xl text-center mb-0"
            >
              Go Further, Together
            </h2>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer
    class="flex flex-col gap-8 py-12 w-full shrink-0 px-4 md:px-6 bg-slate-950"
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="space-y-4">
          <a href="/" class="inline-block">
            <img
              alt="Buzooka"
              src="/buzooka-ai-icon-light.svg"
              height="40px"
              width="40px"
              class="h-10 w-10"
            />
          </a>
          <p class="text-sm text-slate-400">
            Launch production-ready MVPs instantly with AI-powered architecture.
          </p>
        </div>

        <!-- Product Links -->
        <div class="space-y-4">
          <h3
            class="text-sm font-semibold text-slate-100 uppercase tracking-wider"
          >
            Product
          </h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#features"
                class="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                class="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#schedule"
                class="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Book Consultation
              </a>
            </li>
            <li>
              <a
                href="https://status.buzooka.in"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Status
              </a>
            </li>
            <li>
              <a
                href="https://dash.buzooka.in"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="space-y-4">
          <h3
            class="text-sm font-semibold text-slate-100 uppercase tracking-wider"
          >
            Resources
          </h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#faq"
                class="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#hire"
                class="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Hire Experts
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://github.com/buzooka"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div class="space-y-4">
          <h3
            class="text-sm font-semibold text-slate-100 uppercase tracking-wider"
          >
            Legal
          </h3>
          <ul class="space-y-2">
            <li>
              <a
                href="/legal"
                class="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Legal Center
              </a>
            </li>
            <li>
              <a
                href="/terms"
                class="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                class="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/refund"
                class="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Refund Policy
              </a>
            </li>
            <li>
              <a
                href="/cookies"
                class="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="/data"
                class="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Data
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <p class="text-xs text-slate-400 text-center sm:text-left">
          © 2025 bio.local.tech. All rights reserved.
        </p>
        <div class="flex gap-4">
          <a
            href="https://x.com/buzooka"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="X (Twitter)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
            rel="noopener noreferrer"
            class="text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/buzooka"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://instagram.com/buzookapanaka"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://facebook.com/buzooka"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://youtube.com/@buzooka"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>

<style>
  @property --gradient-angle {
    syntax: '<angle>';
    inherits: false;
    initial-value: 135deg;
  }

  @property --gradient-x {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 50%;
  }

  @property --gradient-y {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 50%;
  }

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

  .animated-gradient-bg {
    --gradient-angle: 135deg;
    --gradient-x: 50%;
    --gradient-y: 50%;
    background-color: #06b6d4;
    background-image: radial-gradient(
        circle,
        rgba(0, 0, 0, 0.15) 1.5px,
        transparent 1.5px
      ),
      linear-gradient(var(--gradient-angle), #06b6d4 0%, #ec4899 100%);
    background-size:
      22px 22px,
      100% 400%;
    background-position:
      0 0,
      var(--gradient-x) var(--gradient-y);
    animation:
      gradient-rotate 12s ease infinite,
      gradient-move 8s ease infinite;
  }

  @keyframes gradient-rotate {
    0% {
      --gradient-angle: 135deg;
    }
    100% {
      --gradient-angle: 495deg;
    }
  }

  @keyframes gradient-move {
    0% {
      --gradient-x: 50%;
      --gradient-y: 50%;
    }
    25% {
      --gradient-x: 0%;
      --gradient-y: 100%;
    }
    50% {
      --gradient-x: 100%;
      --gradient-y: 0%;
    }
    75% {
      --gradient-x: 0%;
      --gradient-y: 0%;
    }
    100% {
      --gradient-x: 50%;
      --gradient-y: 50%;
    }
  }
</style>
