<script lang="ts">
  import { blur, crossfade } from 'svelte/transition';
  import { CheckCircle } from 'lucide-svelte';
  import { onMount } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input/index.js';
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '$lib/components/ui/card';
  import { waitlistSchema } from '$lib/schema/email-waitlist.ts';

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
      title: 'Solo Scout',
      subtitle: 'Prototyping, Initial Launch',
      price: 29,
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
    },
    {
      title: 'Founder Gunner',
      subtitle: 'Early-Stage Growth, Scaling',
      price: 49,
      annualPrice: 588,
      features: [
        'All Scout Features',
        'Priority Support',
        'Hire AI Developers',
      ],
    },
    {
      title: 'Squadron',
      subtitle: 'Startups, Enterprise',
      price: 'As per requirement',
      annualPrice: 'Custom',
      features: [
        'All Gunner Features',
        'Custom Integrations',
        'Dedicated Account Manager',
      ],
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
      title: 'The Non-Technical Founder',
      content:
        'Launch your high-quality product without needing a co-founder or a costly architect. Focus on your product vision, not complex configurations.',
    },
    {
      title: 'The Side-Project Hustler',
      content:
        'Validate your idea quickly and reliably. Get a professional, scalable stack ready for prime time without spending weekends on boilerplate.',
    },
    {
      title: 'Enterprise Teams',
      content:
        'Dont spend endless hours to build internal dashboards and tracking tools. Create production apps that work.',
    },
    {
      title: 'Technnical Founder',
      content:
        'Get things done faster. Make your devs spend all their time and effort into making the product a market fit. Not technical stuff.',
    },
    {
      title: 'Business Development Teams',
      content:
        'Get fully managed automated product development services. Spend time growing your business. Let us handle the rest.',
    },
  ];

  let id = 1;

  onMount(() => {
    setInterval(() => {
      if (id > 0 && id < 3) {
        id = id + 1;
      } else {
        id = 1;
      }
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
        src="/buzooka.svg"
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
    <a
      href="#join-squad"
      class="text-sm underline font-medium hover:underline underline-offset-4 py-3"
      >Join Squad!</a
    >
  </nav>
</header>
<div
  class="flex flex-col min-h-screen"
  style="--dot-bg: white;--dot-color: #888;--dot-size: 1px;--dot-space: 22px; background:
linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
var(--dot-color);"
>
  <main class="flex-1">
    <section
      class="h-auto mt-12 sm:mt-20 w-full py-12 md:py-24 lg:py-32 xl:py-48"
    >
      <div class="container px-4 md:px-6">
        <div class="flex flex-col items-center space-y-4 text-center">
          <div class="space-y-6 mb-4">
            <h1 class="text-sm uppercase font-mono font-medium text-slate-600">
              <span class="font-bold">A Startup Studio</span> - Tools for Product
              Development
            </h1>
            <h2
              class="text-2xl font-sans sm:text-4xl md:text-5xl lg:text-6xl/none block w-full sm:w-[600px] pt-0"
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
                    class="leading-normal absolute font-mono text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                  >
                    faster!
                  </span>
                {/if}
                {#if id === 2}
                  <span
                    transition:blur={{
                      duration: 200,
                    }}
                    class="leading-normal absolute font-mono text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                  >
                    make an impact
                  </span>
                {/if}
                {#if id === 3}
                  <span
                    transition:blur={{
                      duration: 200,
                    }}
                    class="leading-normal absolute font-mono text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                  >
                    in just days!
                  </span>
                {/if}
              </div>
            </h2>

            <h3
              class="mx-auto italic font-thin max-w-[700px] text-slate-600 md:text-xl dark:text-gray-400 pt-8"
            >
              <span class="font-medium">Code</span>,
              <span class="font-medium">Cloud</span>, and
              <span class="font-medium">CI/CD</span> simplified.
            </h3>
          </div>
          <form
            class="flex flex-col sm:flex-row gap-2 sm:gap-0"
            on:submit={handleSubmit}
          >
            <Input
              name="email"
              type="email"
              placeholder="Email"
              class="max-w-xs w-[300px] h-[47px] rounded-lg sm:rounded-none sm:rounded-l-lg outline-0 border-slate-700 bg-white placeholder-shown:bg-cyan-50 text-slate-950 font-bold"
            />
            <Button
              type="submit"
              size="xs"
              class="px-9 py-3 rounded-lg sm:rounded-none sm:rounded-r-lg border-solid border-[1px] sm:border-l-0 border-slate-700"
            >
              <span
                class="leading-normal font-mono font-bold text-transparent bg-slate-950 bg-clip-text bg-gradient-to-r from-cyan-100 to-pink-100"
              >
                Join Squad
              </span>
            </Button>
          </form>
        </div>
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
          <Card>
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

          <Card>
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

          <Card>
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
            <Card>
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
          class="text-3xl italic font-thin text-slate-600 sm:text-4xl md:text-5xl text-center mb-8"
        >
          Choose your pack!
        </h2>
        <div class="grid gap-6 lg:grid-cols-3">
          {#each pricingPlans as plan}
            <Card class="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <CardDescription>{plan.subtitle}</CardDescription>
              </CardHeader>
              <CardContent class="flex-1">
                <ul class="space-y-2">
                  {#each plan.features as feature}
                    <li class="flex items-center">
                      <CheckCircle class="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  {/each}
                </ul>
              </CardContent>
            </Card>
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
          Need extra help?
        </h2>

        <p
          class="text-sm text-gray-600 leading-normal mb-8 sm:text-sm text-center uppercase"
        >
          Competitively priced
        </p>
        <div class="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle class="font-normal">Architect on Demand</CardTitle
              >
            </CardHeader>
            <CardContent>
              <p>
                Get a one-time, expert consultation to ensure your solo project
                is structurally sound for growth. Startup fighting tech debt before
                it starts!
              </p>
            </CardContent>
          </Card>
          <Card>
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
              class="text-3xl italic font-thin text-slate-300 sm:text-4xl md:text-5xl text-center mb-20"
            >
              You are only limited by your imagination!
            </h2>
            <p
              class="mx-auto max-w-[700px] text-slate-200 text-2xl mt-8 mb-8 font-handwriting md:leading-normal italic"
            >
              Become an early bird!
            </p>
          </div>
          <form
            class="flex flex-col sm:flex-row gap-2 sm:gap-0"
            on:submit={handleSubmit}
          >
            <Input
              name="email"
              type="email"
              placeholder="Email"
              class="max-w-xs w-[300px] h-[47px] rounded-lg sm:rounded-none sm:rounded-l-lg border-slate-700 focus-visible:outline-0 text-slate-50 font-bold placeholder:text-slate-100 bg-cyan-950 bg-slate-900 placeholder-shown:bg-cyan-950 focus-visible:bg-slate-900 focus-visible:bg-slate-900"
            />
            <Button
              type="submit"
              size="xs"
              class="px-8 rounded-lg sm:rounded-none sm:rounded-r-lg border-solid border-[1px] sm:border-l-0 border-slate-700 bg-gradient-to-r from-cyan-100 to-pink-100 hover:from-cyan-300 hover:to-pink-300 font-bold transition-all duration-500 ease-in py-3"
            >
              <span class="leading-normal font-mono text-black">
                Join Squad
              </span>
            </Button>
          </form>
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
      © 2025 Biolocal Technologies (OPC) Private Limited. All rights reserved.
    </p>
  </footer>
</div>
