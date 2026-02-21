<script lang="ts">
  import LandingHeader from '../components/LandingHeader.svelte';
  import LandingFooter from '../components/LandingFooter.svelte';
  import ArchitectAgent from '../components/ArchitectAgent.svelte';
  import Nudge from '../components/Nudge.svelte';
  import Features from '../components/Features.svelte';
  import HowItWorks from '../components/HowItWorks.svelte';
  import Faq from '../components/Faq.svelte';
  import Cta from '../components/Cta.svelte';
  import type { FAQItem } from '$lib/config/faq';

  export let faqs: FAQItem[] | undefined = undefined;
</script>

<LandingHeader activePage="architect" />
<div class="flex flex-col min-h-screen overflow-x-clip"
  style="--dot-bg: white;--dot-color: #888;--dot-size: 1px;--dot-space: 22px; background:
linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
var(--dot-color);"
>
  <main class="flex-1">
    <ArchitectAgent />
    
    <section class="py-16 md:py-24 bg-slate-50">
      <div class="container px-4 md:px-6">
        <div class="max-w-3xl mx-auto text-center space-y-8">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">Why use Buzooka Architect?</h2>
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left pt-8">
            <div class="space-y-2">
              <h3 class="font-bold">System Blueprints</h3>
              <p class="text-sm text-slate-600">Generate complex architectural diagrams and system designs from simple text prompts.</p>
            </div>
            <div class="space-y-2">
              <h3 class="font-bold">Cloud Infrastructure</h3>
              <p class="text-sm text-slate-600">Automatically map your architecture to production-ready cloud configurations.</p>
            </div>
            <div class="space-y-2">
              <h3 class="font-bold">CI/CD Integration</h3>
              <p class="text-sm text-slate-600">Get pre-configured delivery pipelines that match your unique system requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HowItWorks />
    <Faq items={faqs} />
    <Nudge prompt="Ready to architect your next big thing?" />
    <Cta />
  </main>
  <LandingFooter />
</div>
