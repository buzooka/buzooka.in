<script lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from '$lib/components/ui/card';

  const audienceList = [
    {
      title: 'Business & Enterprise Teams',
      problem: 'Build and deploy quickly across different use cases.',
      solution: 'Buzooka lets you deploy anything, anywhere, landing pages, services, AI agents, and internal tools, using clean setups and flexible deployment workflows on your own cloud.',
    },
    {
      title: 'The Founder',
      problem: 'Launch a serious product with scalable architecture.',
      solution: 'Remove setup and deployment friction so your team can focus on building, testing, and improving core features and not configuring tools.',
    },
    {
      title: 'Agencies & IT Services',
      problem: 'Deliver multiple projects that are - consistent, predictable and reliabile.',
      solution: 'Standardizes project setup and deployment so you can reduce delivery time while maintaining predictable, production-grade outcomes.',
    },
    {
      title: 'Side-Project / Solo Builder',
      problem: 'Building alone and your time is limited.',
      solution: 'Skip repetitive setup, infrastructure, and deployment tasks so you can validate ideas and ship real products faster, without getting stuck in DevOps or boilerplate.',
    },
  ];
</script>

<section
  id="who-is-this-for"
  class="w-full py-12 md:py-12 lg:py-16 bg-gradient-to-r from-cyan-50 to-pink-50 dark:bg-gray-800"
>
  <div class="container px-4 md:px-6">
    <h2
      class="text-3xl italic font-thin text-slate-600 sm:text-4xl md:text-5xl text-center mb-8"
    >
      Who is this for?
    </h2>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {#each audienceList as audience}
        <Card class="rounded-2xl border-none shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/60 backdrop-blur-sm px-6 py-6 md:px-8 md:py-8">
          <CardHeader class="p-0 pb-0">
            <CardTitle class="text-[17px] md:text-[19px] font-mono font-medium text-cyan-800 tracking-tight">{audience.title}</CardTitle>
          </CardHeader>
          <CardContent class="p-0 space-y-4">
            <p class="text-[14px] md:text-[15px] leading-relaxed text-slate-500">{audience.problem}</p>
            <p class="text-[14px] md:text-[15px] leading-relaxed text-slate-700">{audience.solution}</p>
          </CardContent>
        </Card>
      {/each}
    </div>
  </div>
</section>
