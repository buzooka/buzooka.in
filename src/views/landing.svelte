<script lang="ts">
  import LandingHeader from '../components/LandingHeader.svelte';
  import LandingFooter from '../components/LandingFooter.svelte';
  import Nudge from '../components/Nudge.svelte';
  import Social from '../components/Social.svelte';
  import LandingHero from '../components/LandingHero.svelte';
  import ArchitectAgent from '../components/ArchitectAgent.svelte';
  import Features from '../components/Features.svelte';
  import WhoIsThisFor from '../components/WhoIsThisFor.svelte';
  import HowItWorks from '../components/HowItWorks.svelte';
  import Faq from '../components/Faq.svelte';
  import Cta from '../components/Cta.svelte';
  import Consultation from '../components/Consultation.svelte';
  import Hire from '../components/Hire.svelte';
  import type { FAQItem } from '$lib/config/faq';

  export let faqs: FAQItem[] | undefined = undefined;
</script>

<LandingHeader isLanding={true} />
<div
  class="flex flex-col min-h-screen overflow-x-clip"
  style="--dot-bg: white;--dot-color: #888;--dot-size: 1px;--dot-space: 22px; background:
linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
var(--dot-color);"
>
  <main class="flex-1">
    <LandingHero />
    <Features />
    <Nudge prompt="Everything you need to go from idea to production" />
    <HowItWorks />
    <ArchitectAgent />
    <Nudge prompt="Minimize setup time.<br /> Do what matters." />
    <WhoIsThisFor />
    <Nudge prompt="You are only limited by your imagination!" />
    <Consultation />
    <Social />
    <Faq items={faqs} />
    <Hire />
    <Cta />
  </main>
  <LandingFooter />
</div>

