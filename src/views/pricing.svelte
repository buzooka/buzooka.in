<script lang="ts">
  import LandingHeader from '../components/LandingHeader.svelte';
  import LandingFooter from '../components/LandingFooter.svelte';
  import Nudge from '../components/Nudge.svelte';
  import PricingCards from '../components/PricingCards.svelte';
  import HowItWorks from '../components/HowItWorks.svelte';
  import Social from '../components/Social.svelte'
  import Faq from '../components/Faq.svelte';
  import Cta from '../components/Cta.svelte';
  import Consultation from '../components/Consultation.svelte';
  import Hire from '../components/Hire.svelte';
  import { Button } from '$lib/components/ui/button';
  import { ArrowRight } from 'lucide-svelte';
</script>

<LandingHeader activePage="pricing" />

<main class="flex-1 overflow-x-clip">
  <!-- 1. Hero -->
  <section class="w-full py-8 md:py-16 lg:py-20">
    <div class="container px-4 md:px-6 text-center">
      <h1 class="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-foreground mb-6">
        Do your team a <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600">Favour</span>
      </h1>
      <p class="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed mb-6">
        Choose the plan that fits your growth stage. No hidden fees, no vendor lock-in. Just pure deployment power.
      </p>
      <div class="flex justify-center gap-4">
        <Button  
          size="lg"
          class="text-2xl bg-blue-600 text-slate-100 rounded-full px-8 py-7"
          onclick={() => {
            const el = document.getElementById('pricing');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          See Plans
        </Button>
      </div>
    </div>
  </section>

  <Nudge prompt="Minimize setup time.<br /> Do what matters." />
  <HowItWorks />
  <PricingCards />
  <Nudge prompt="You are only limited by your imagination" />
  <Faq />
  <Consultation />
  <Social />
  <Cta />
</main>

<LandingFooter />
