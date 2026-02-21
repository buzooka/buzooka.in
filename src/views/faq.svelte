<script lang="ts">
  import LandingHeader from '../components/LandingHeader.svelte';
  import LandingFooter from '../components/LandingFooter.svelte';
  import Faq from '../components/Faq.svelte';
  import Cta from '../components/Cta.svelte';
  import type { FAQItem } from '$lib/config/faq';

  export let faqs: FAQItem[] | undefined = undefined;
</script>

<LandingHeader activePage="faq" />
<div class="flex flex-col min-h-screen overflow-x-clip"
  style="--dot-bg: white;--dot-color: #888;--dot-size: 1px;--dot-space: 22px; background:
linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
var(--dot-color);"
>
  <main class="flex-1">
    <div class="pt-20">
      <Faq items={faqs} />
    </div>
    <Cta />
  </main>
  <LandingFooter />
</div>
