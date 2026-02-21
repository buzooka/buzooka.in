<script lang="ts">
  import { ArrowUp } from 'lucide-svelte';
  import { faqData, type FAQItem } from '$lib/config/faq';

  export let items: FAQItem[] = faqData;
</script>

<section
  id="faq"
  class="w-full py-12 md:py-12 lg:py-16 bg-gradient-to-r from-cyan-50 to-pink-50 dark:bg-gray-800"
>
  <div class="container px-4 md:px-6">
    <h2
      class="text-3xl italic font-thin text-slate-600 sm:text-4xl md:text-5xl text-center mb-12"
    >
      Frequently Asked Questions
    </h2>
    <div class="max-w-3xl mx-auto space-y-4">
      {#each items as faq}
        <details
          class="group bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300"
        >
          <summary
            class="flex justify-between items-center cursor-pointer p-6 font-medium text-lg text-slate-900 hover:text-cyan-600 transition-colors"
          >
            {faq.question}
            <span
              class="ml-4 flex-shrink-0 text-cyan-500 group-open:rotate-180 transition-transform duration-300"
            >
              <ArrowUp class="w-5 h-5" />
            </span>
          </summary>
          <div class="px-6 pb-6 text-slate-600 leading-relaxed">
            {faq.answer}
          </div>
        </details>
      {/each}
    </div>
  </div>
</section>
