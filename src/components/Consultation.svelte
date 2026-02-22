<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import AnimatedDiagramWidget from './AnimatedDiagramWidget.svelte';
  import { presets } from '$lib/config/presets';
  import { Calendar } from 'lucide-svelte';
</script>

<section
  id="schedule"
  class="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-r from-cyan-50 to-pink-50 dark:from-background dark:to-background overflow-hidden border-y"
>
  <div class="container px-4 md:px-6">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left: Illustration - Desktop Only -->
      <div class="lg:flex justify-start items-center">
        <div class="relative">
          <div
            class="absolute -inset-4 bg-gradient-to-r from-cyan-200/30 to-pink-200/30 dark:from-cyan-700/30 dark:to-pink-800/30 rounded-full blur-3xl"
          ></div>
          <div
            class="m-auto w-[460px] h-[250px] md:w-[600px] md:h-[350px] relative z-10"
          >
            <AnimatedDiagramWidget
              data={presets.consultation}
            />
          </div>
        </div>
      </div>

      <!-- Right: Text Content -->
      <div class="space-y-6 text-center lg:text-left">
        <div class="inline-block">
          <span
            class="px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full text-sm font-medium text-muted-foreground border border-border"
          >
            Expert Guidance
          </span>
        </div>
        <h2
          class="text-4xl italic font-thin text-foreground sm:text-5xl md:text-6xl leading-tight"
        >
          Let's build<br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600"
          >
            together
          </span>
        </h2>
        <p
          class="text-lg text-muted-foreground max-w-xl leading-relaxed m-auto lg:m-0"
        >
          Connect with our expert consultants for personalized guidance on
          your project. From architecture to deployment, we're here to help
          you succeed.
        </p>

        <div class="inline-flex flex-col gap-3">
          <div
            class="inline-flex w-auto p-[3px] rounded-xl animated-gradient-bg"
          >
            <Button
              class="gap-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 h-14 px-8 text-base font-medium"
              onclick={() =>
                window.open('https://cloud.umami.is/q/mtpPVH3Xk', '_blank')}
            >
              Book Demo Call<Calendar class="w-5 h-5" />
            </Button>
          </div>
          <div class="flex items-center gap-2 text-sm text-muted-foreground">
            <svg
              class="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Free 30-min session</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
