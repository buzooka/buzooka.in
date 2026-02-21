<script lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from '$lib/components/ui/card';

  const features = [
    {
      title: 'AI-enabled Boilerplates',
      description:
        'Generate production-ready scaffolding tailored to enterprise standards and compliance requirements.',
    },
    {
      title: 'Deploy on your own cloud',
      description:
        'Maintain full control over infrastructure without vendor lock-in and hidden complexity.',
    },
    {
      title: 'On-Demand Deployment (CI/CD)',
      description:
        'Deploy faster with preconfigured pipelines that work out of the box on your cloud provider.',
    },
  ];
</script>

<section
  id="features"
  class="w-full py-12 md:py-12 lg:py-16 bg-gradient-to-r from-cyan-50 to-pink-50 dark:bg-gray-800"
>
  <div class="container px-4 md:px-6">
    <h2
      class="text-3xl italic font-thin text-slate-600 sm:text-4xl md:text-5xl text-center mb-4"
    >
      What?
    </h2>
    <p class="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
      Scalabale production-grade foundations from day one
    </p>
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {#each features as feature}
        <Card class="rounded-md">
          <CardHeader>
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {feature.description}
          </CardContent>
        </Card>
      {/each}
    </div>
  </div>
</section>
