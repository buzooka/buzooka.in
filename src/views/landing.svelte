<script lang="ts">
  import { blur, crossfade } from 'svelte/transition';
  import DiagramWidget from '../components/DiagramWidget.svelte';
  import {
    CheckCircle,
    ArrowUp,
    Paperclip,
    Calendar,
    Linkedin,
    Github,
    Globe,
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
  let placeholderText = 'Describe the product you want to build';

  const placeholders = [
    'Describe the product you want to build',
    'A CRM dashboard for a pet grooming business',
    'A social network for vintage car enthusiasts',
    'An inventory management system for a small bakery',
    'A mobile app for tracking daily water intake',
    'Create a Google Search clone',
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
      title: 'Automatic Deployment (CI/CD)',
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
      cta: 'Join',
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

  onMount(() => {
    setInterval(() => {
      if (id > 0 && id < 4) {
        id = id + 1;
      } else {
        id = 1;
      }
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
  <nav class="ml-auto flex gap-4 sm:gap-6 flex-1 justify-end">
    <a
      href="#features"
      class="text-sm font-medium hover:underline underline-offset-4 py-3 hidden sm:block"
      >What</a
    >
    <a
      href="#pricing"
      class="text-sm font-medium hover:underline underline-offset-4 py-3 hidden sm:block"
      >Plans</a
    >
    <button
      on:click={() => promptInput?.focus()}
      class="text-sm underline font-medium hover:underline underline-offset-4 py-3"
      >Create</button
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
      class="relative h-auto mt-10 sm:mt-20 w-full py-12 md:py-24 lg:py-32"
    >
      <div class="container px-4 md:px-6 relative z-30">
        <div class="flex flex-col items-center space-y-4 text-center">
          <div class="space-y-6 mb-4">
            <h1 class="text-sm uppercase font-mono font-medium text-slate-600">
              <span class="font-bold">A Startup Studio</span> - Tools for Product
              Development
            </h1>
            <h2
              class="text-2xl font-sans sm:text-4xl md:text-5xl lg:text-5xl/none block w-full sm:w-[600px] pt-0"
            >
              <span class="italic font-thin text-slate-600"
                >Launch your <mark class="px-3">MVP</mark> ,</span
              ><br />
              <div
                class="relative h-24 text-center flex items-center justify-center"
              >
                {#if id === 1}
                  <span
                    transition:blur={{
                      duration: 200,
                    }}
                    class="leading-normal absolute font-mono text-4xl/2 sm:text-5xl/2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                  >
                    in just DAYS!
                  </span>
                {/if}
                {#if id === 2}
                  <span
                    transition:blur={{
                      duration: 200,
                    }}
                    class="leading-normal absolute font-mono text-4xl/2 sm:text-5xl/2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                  >
                    Own the CODE
                  </span>
                {/if}
                {#if id === 3}
                  <span
                    transition:blur={{
                      duration: 200,
                    }}
                    class="leading-normal absolute font-mono text-4xl/2 sm:text-5xl/2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                  >
                    Bring Your Own Cloud
                  </span>
                {/if}
                {#if id === 4}
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
              class="mx-auto italic font-thin max-w-[700px] text-slate-600 md:text-lg dark:text-gray-400 pt-8"
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

            <form
              class="relative bg-white rounded-2xl shadow-xl flex flex-col"
              on:submit={(e) => {
                e.preventDefault();
                const target = e.currentTarget as HTMLFormElement;
                const formData = new FormData(target);
                const prompt = formData.get('prompt') as string;
                if (prompt) {
                  window.location.href = `https://dash.buzooka.localhost/login?prompt=${encodeURIComponent(prompt)}`;
                }
              }}
            >
              <textarea
                name="prompt"
                bind:this={promptInput}
                bind:value={promptText}
                placeholder={placeholderText}
                class="w-full min-h-[80px] focus:min-h-[160px] p-4 text-md bg-transparent border-0 focus:ring-0 resize-none placeholder:text-slate-400 text-slate-900 outline-none transition-all duration-300 ease-in-out"
              ></textarea>

              <div class="flex justify-between items-center px-4 pb-4">
                <div class="flex gap-2">
                  <button
                    type="button"
                    class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <Paperclip size={20} />
                  </button>
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
                    Create
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
          </div>
        </div>
      </div>

      <div
        class="absolute top-32 lg:-left-20 xl:left-10 w-[500px] h-[300px] opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 rotate-[5deg] hidden lg:block z-10 scale-75 xl:scale-100"
      >
        <DiagramWidget type="google" />
      </div>

      <div
        class="absolute top-10 lg:-right-40 xl:-right-20 w-[500px] h-[300px] opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 rotate-[-20deg] hidden lg:block z-10 scale-75 xl:scale-100"
      >
        <DiagramWidget type="netflix" />
      </div>

      <div
        class="absolute top-2/3 lg:-left-40 xl:left-20 -translate-y-1/2 w-[500px] h-[300px] opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 rotate-[10deg] hidden lg:block z-10 scale-75 xl:scale-100"
      >
        <DiagramWidget type="uber" />
      </div>

      <div
        class="absolute bottom-2 lg:-right-40 xl:right-8 -translate-y-1/2 w-[500px] h-[300px] opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 -rotate-3 hidden lg:block z-10 scale-75 xl:scale-100"
      >
        <DiagramWidget type="openai" />
      </div>

      <div
        class="absolute -bottom-20 lg:-left-40 xl:left-2 w-[500px] h-[300px] opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 -rotate-16 hidden lg:block z-10 scale-75 xl:scale-100"
      >
        <DiagramWidget type="amazon" />
      </div>

      <div
        class="absolute -bottom-20 lg:-right-40 xl:-right-2 w-[500px] h-[300px] opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 rotate-12 hidden lg:block z-10 scale-75 xl:scale-100"
      >
        <DiagramWidget type="x" />
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
                <img alt="React" src="/react.svg" width="30" class="mb-2" />
                <img
                  alt="Svelte"
                  src="/svelte-logo.svg"
                  width="28"
                  class="mb-2"
                />
                <img alt="Node" src="/node_js.svg" width="30" class="mb-2" />
                <img
                  alt="Typescript"
                  src="/ts-logo.svg"
                  width="28"
                  class="mb-2"
                />
                <img alt="Vue" src="/vue.svg" width="30" class="mb-2" />
                <img alt="Python" src="/python.svg" width="30" class="mb-2" />
                <img
                  alt="Fluttr"
                  src="/flutter-logo.svg"
                  width="26"
                  class="mb-2"
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
                <img alt="AWS" src="/aws.svg" width="30" class="mb-2" />
                <img alt="GCP" src="/gcp.svg" width="30" class="mb-2" />
                <img alt="Azure" src="/azure.svg" width="30" class="mb-2" />
                <img
                  alt="Digital Ocean"
                  src="/do.svg"
                  width="26"
                  class="mb-2"
                />
                <img alt="Netlify" src="/netlify.svg" width="30" class="mb-2" />
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
                <img alt="Git" src="/git.svg" width="30" class="mb-2" />
                <img alt="Linux" src="/ubuntu.svg" width="30" class="mb-2" />
                <img alt="Docker" src="/docker.svg" width="30" class="mb-2" />
                <img alt="Android" src="/android.svg" width="30" class="mb-2" />
                <img alt="iOS" src="/ios.svg" width="30" class="mb-2" />
                <img alt="MacOS" src="/macos.svg" width="30" class="mb-2" />
                <img
                  alt="Windows"
                  src="/microsoft.svg"
                  width="30"
                  class="mb-2"
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
              class="relative group h-full transition-all duration-300 {plan.title ===
              'Scout'
                ? 'scale-105 z-10'
                : 'scale-100 hover:scale-[1.02]'}"
            >
              <Card
                class="relative flex flex-col rounded-3xl bg-white h-full transition-all duration-300 {plan.disabled
                  ? 'border-slate-100 bg-slate-50/50'
                  : plan.title === 'Scout'
                    ? 'border-cyan-500/20 shadow-2xl shadow-cyan-500/10 ring-1 ring-cyan-500/20'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-lg'}"
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
                        class={`mt-2 text-sm font-medium mt-0 ${plan.subtitle ? 'mb-4' : 'm-0'}`}
                      >
                        {plan.subtitle}
                      </CardDescription>
                    </div>
                  </div>

                  <div
                    class={plan.originalPrice || plan.price || plan.annualPrice
                      ? 'mt-6 space-y-2 flex flex-col items-center'
                      : ''}
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
                              class="text-lg text-slate-400 line-through font-medium"
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
                    class="h-px w-full bg-slate-100 mb-4 {plan.title === 'Scout'
                      ? 'bg-gradient-to-r from-cyan-100 to-pink-100'
                      : ''}"
                  ></div>
                  <ul class="space-y-2">
                    {#each plan.features as feature}
                      <li class="flex items-start">
                        <div
                          class="mt-0.5 rounded-full p-1 {plan.title === 'Scout'
                            ? 'bg-cyan-50 text-cyan-600'
                            : 'bg-slate-100 text-slate-500'}"
                        >
                          <CheckCircle class="h-4 w-4" />
                        </div>
                        <span
                          class="ml-3 text-sm {plan.title === 'Scout'
                            ? 'text-slate-700 font-medium'
                            : 'text-slate-600'}"
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
                    <div
                      class="w-full p-[2px] rounded-xl bg-gradient-to-r from-cyan-500 to-pink-500"
                    >
                      <Button
                        class="w-full h-[46px] rounded-[10px] bg-slate-900 hover:bg-slate-800 text-white border-0 font-medium transition-all duration-300"
                        on:click={() => {
                          const element = document.getElementById('join-squad');
                          element?.scrollIntoView({ behavior: 'smooth' });
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
      id="schedule"
      class="w-full py-12 md:py-12 lg:py-16 bg-gradient-to-r from-cyan-50 to-pink-50 dark:bg-gray-800"
    >
      <div class="container px-4 md:px-6 text-center">
        <h2
          class="text-3xl italic font-thin text-slate-600 sm:text-4xl md:text-5xl text-center mb-2"
        >
          Schedule a Call
        </h2>
        <p class="text-slate-600 mb-8 max-w-2xl mx-auto">
          Connect with an expert. Get expert advice.
        </p>
        <Button
          class="gap-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 h-12 px-6 text-md"
          on:click={() =>
            (window.location.href =
              'mailto:hello@buzooka.in?subject=Consultation Request')}
        >
          Book Consultation Call<Calendar class="w-5 h-5" />
        </Button>
      </div>
    </section>
    <section id="contact" class="w-full py-12 md:py-12 lg:py-16">
      <div class="container px-4 md:px-6">
        <h2
          class="text-3xl italic font-thin text-slate-600 sm:text-4xl md:text-5xl text-center mb-12"
        >
          Let's Talk!
        </h2>
        <div class="flex justify-center gap-6">
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
          Need extra help?
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
              You are only limited by your imagination!
            </h2>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer
    class="flex flex-col sm:flex-row gap-2 py-6 w-full shrink-0 items-center px-4 md:px-6 bg-slate-950"
  >
    <p
      class="text-xs text-slate-100 dark:text-gray-400 leading-normal text-center sm:text-left"
    >
      © 2025 bio.local.tech. All rights reserved.
    </p>
  </footer>
</div>

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
