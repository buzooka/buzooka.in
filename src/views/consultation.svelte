<script lang="ts">
  import LandingHeader from '../components/LandingHeader.svelte';
  import LandingFooter from '../components/LandingFooter.svelte';
  import Consultation from '../components/Consultation.svelte';
  import HowItWorks from '../components/HowItWorks.svelte';
  import Faq from '../components/Faq.svelte';
  import Cta from '../components/Cta.svelte';
</script>

<LandingHeader activePage="consultation" />
<div class="flex flex-col min-h-screen overflow-x-clip">
  <main class="flex-1">
    <div class="pt-10">
      <Consultation />
    </div>

    <HowItWorks />
    
    <section class="py-16 md:py-24">
      <div class="container px-4 md:px-6">
        <div class="max-w-3xl mx-auto text-center space-y-4">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">What to expect from a demo</h2>
          <p class="text-muted-foreground md:text-lg">
            A personalized walkthrough of how Buzooka can transform your development workflow, from architecture design to final deployment.
          </p>
        </div>
      </div>
    </section>

    <Faq />
    <Cta />
  </main>
  <LandingFooter />
</div>
