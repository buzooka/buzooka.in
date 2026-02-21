<script lang="ts">
  import LandingHeader from '../components/LandingHeader.svelte';
  import LandingFooter from '../components/LandingFooter.svelte';
  import Consultation from '../components/Consultation.svelte';
  import HowItWorks from '../components/HowItWorks.svelte';
  import Faq from '../components/Faq.svelte';
  import Cta from '../components/Cta.svelte';
</script>

<LandingHeader activePage="consultation" />
<div class="flex flex-col min-h-screen overflow-x-clip"
  style="--dot-bg: white;--dot-color: #888;--dot-size: 1px;--dot-space: 22px; background:
linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
var(--dot-color);"
>
  <main class="flex-1">
    <div class="pt-10">
      <Consultation />
    </div>

    <HowItWorks />
    
    <section class="py-16 md:py-24">
      <div class="container px-4 md:px-6">
        <div class="max-w-3xl mx-auto text-center space-y-4">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">What to expect from a demo</h2>
          <p class="text-slate-600 md:text-lg">
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
