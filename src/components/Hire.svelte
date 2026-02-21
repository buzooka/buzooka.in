<script lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from '$lib/components/ui/card';
</script>

<section
  id="hire"
  class="w-full py-12 md:py-12 lg:py-16 bg-gradient-to-r from-cyan-50 to-pink-50 dark:bg-gray-800"
>
  <div class="container px-4 md:px-6">
    <h2
      class="text-3xl italic font-thin text-slate-600 sm:text-4xl md:text-5xl text-center mb-4"
    >
      Need additional support?
    </h2>

    <p
      class="text-sm text-gray-600 leading-normal mb-8 sm:text-sm text-center uppercase"
    >
      Competitively priced
    </p>
    <div class="grid gap-6 md:grid-cols-2">
      <Card class="rounded-md">
        <CardHeader>
          <CardTitle class="font-normal">Architect on Demand</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Get expert consultation to ensure your project is structurally
            sound for growth. Start fighting tech debt before it starts!
          </p>
        </CardContent>
      </Card>
      <Card class="rounded-md">
        <CardHeader>
          <CardTitle class="font-normal">Developer on Demand</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Short on time to finish that last key feature? Hire one of our
            trusted developers for feature-specific help, without the
            commitment of a full-time hire.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
