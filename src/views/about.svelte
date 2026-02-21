<script lang="ts">
  import LandingHeader from '../components/LandingHeader.svelte';
  import LandingFooter from '../components/LandingFooter.svelte';
  import Consultation from '../components/Consultation.svelte';
  import Social from '../components/Social.svelte';
  import Cta from '../components/Cta.svelte';
</script>

<LandingHeader activePage="about" />
<div class="flex flex-col min-h-screen overflow-x-clip"
  style="--dot-bg: white;--dot-color: #888;--dot-size: 1px;--dot-space: 22px; background:
linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
var(--dot-color);"
>
  <main class="flex-1">
    <section class="py-16 md:py-24 bg-white">
      <div class="container px-4 md:px-6">
        <div class="max-w-3xl mx-auto space-y-12">
          <div class="space-y-4 text-center">
            <h1 class="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-slate-900">
              Building the <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600">Future</span>
            </h1>
            <p class="text-xl text-slate-600 leading-relaxed">
              Simplify the journey from idea to production-ready product.
            </p>
          </div>

          <div class="space-y-8 prose prose-slate max-w-none">
            <p class="text-slate-600 leading-relaxed">
              Founded with the vision that developers should focus on what they do best. Building products. Buzooka provides the architectural and infrastructure foundation needed to scale ideas rapidly. We bridge the gap between creative code and production-grade stability. It is built by veterans with 20+ years of combined experience in engineering and product architecture. We've honed our craft at every stage of the business lifecycle - from early stage products to unicorns.
            </p>
            <p class="text-slate-600 leading-relaxed pt-4">
              This diverse background allows us to anticipate the challenges of scaling and handle them automatically, so you don't have to.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Social />
    <Consultation />
    <Cta />
  </main>
  <LandingFooter />
</div>
