<script lang="ts">
  import { ArrowRight } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';
</script>

<section
  id="join-squad"
  class="w-full py-12 md:py-12 lg:py-16 bg-slate-950 text-white relative overflow-hidden"
>
  <!-- Background effects -->
  <div
    class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
  ></div>

  <div class="container px-4 md:px-6 relative z-10">
    <div class="flex flex-col items-center space-y-8 text-center">
      <div class="space-y-4 max-w-3xl mx-auto">
        <h2
          class="text-3xl italic font-thin text-white sm:text-4xl md:text-5xl text-center mb-8"
        >
          Go Further, Together
        </h2>
        <p
          class="mx-auto max-w-[700px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
        >
          Join hundreds of developers building the future with Buzooka. Stop
          wrestling with config and start shipping.
        </p>
      </div>
      <div class="flex flex-col gap-4 min-[400px]:flex-row justify-center">
        <Button
          class="h-12 px-8 rounded-full bg-white text-slate-950 hover:bg-slate-200 text-base font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-105"
          onclick={() => window.open('https://dash.buzooka.in/login?utm_source=getstarted', '_blank')}
        >
          Get Started Now
          <ArrowRight class="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  </div>
</section>
