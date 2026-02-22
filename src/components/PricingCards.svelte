<script lang="ts">
  import { cn } from '$lib/utils';
  import { Button } from '$lib/components/ui/button';
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
  } from '$lib/components/ui/card';
  import { CheckCircle } from 'lucide-svelte';

  const pricingPlans = [
    {
      id: 'gunner',
      title: 'Gunner',
      subtitle: 'Founder , Early-Stage Growth, Scaling',
      features: ['Everything in Scout', 'Priority Support', 'AI Agents'],
      cta: 'Coming soon',
      disabled: true,
    },
    {
      id: 'scout',
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
      id: 'squadron',
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
</script>

<section id="pricing" class="w-full py-12 md:py-12 lg:py-16">
  <div class="container px-4 md:px-6">
    <h2
      class="text-3xl italic font-thin text-foreground sm:text-4xl md:text-5xl text-center mb-12"
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
              'relative flex flex-col rounded-3xl bg-card h-full transition-all duration-300',
              plan.disabled
                ? 'border-border bg-muted/50'
                : plan.title === 'Scout'
                  ? 'border-cyan-500/20 shadow-2xl shadow-cyan-500/10 ring-1 ring-cyan-500/20'
                  : 'border-border hover:border-accent hover:shadow-lg',
            )}
          >
            <CardHeader>
              <div class="flex justify-center w-full text-center">
                <div>
                  <CardTitle
                    class="text-2xl font-bold {plan.title === 'Scout'
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600'
                      : 'text-foreground'}"
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
                          class="text-lg text-muted-foreground line-through font-medium"
                          >${plan.originalPrice}</span
                        >
                      {/if}
                      <span
                        class="text-5xl font-extrabold tracking-tight text-foreground"
                        >${plan.price}</span
                      >
                    </div>
                  {:else}
                    <span class="text-3xl font-bold text-foreground"
                      >{plan.annualPrice}</span
                    >
                  {/if}
                </div>
              </div>
            </CardHeader>

            <CardContent class="flex-1 pb-0">
              <div
                class={cn(
                  'h-px w-full bg-border mb-4',
                  plan.title === 'Scout' &&
                    'bg-gradient-to-r from-cyan-100 to-pink-100 dark:from-cyan-900 dark:to-pink-900',
                )}
              ></div>
              <ul class="space-y-1">
                {#each plan.features as feature}
                  <li class="flex items-center">
                    <div
                      class={cn(
                        'mt-0.5 rounded-full p-1',
                        plan.title === 'Scout'
                          ? 'bg-muted text-cyan-600'
                          : 'bg-muted text-muted-foreground',
                      )}
                    >
                      <CheckCircle class="h-4 w-4" />
                    </div>
                    <span
                      class={cn(
                        'ml-3 text-sm',
                        plan.title === 'Scout'
                          ? 'text-foreground font-medium'
                          : 'text-muted-foreground',
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
                  class="w-full h-12 rounded-xl border-border bg-muted/50 text-muted-foreground hover:bg-muted/80 hover:text-muted-foreground cursor-not-allowed"
                  variant="outline"
                  disabled
                >
                  {plan.cta}
                </Button>
              {:else}
                <div class="w-full p-[3px] rounded-xl animated-gradient-bg">
                  <Button
                    class="w-full h-[46px] rounded-[10px] bg-blue-700 hover:bg-blue-600  text-white border-0 font-bold transition-all duration-300"
                    onclick={() => {
                      window.open(`https://dash.buzooka.in/login?utm_source=pricingcard&action=buy&plan=${plan.id}`, '_blank');
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
