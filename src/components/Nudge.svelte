<script lang="ts">
  export let prompt: string;
</script>

<section
  class="w-full py-12 md:py-12 lg:py-16 text-white animated-gradient-bg"
>
  <div class="container px-4 md:px-6">
    <div class="flex flex-col items-center space-y-8 text-center">
      <div class="space-y-1">
        <h2
          class="text-3xl italic font-thin text-white sm:text-4xl md:text-5xl text-center mb-0"
        >
          <span
            class="leading-[1.1] text-3xl sm:text-5xl md:text-6xl text-white block"
          >
            {@html prompt}
          </span>
        </h2>
      </div>
    </div>
  </div>
</section>

<style>
  @property --gradient-angle {
    syntax: '<angle>';
    inherits: false;
    initial-value: 135deg;
  }

  @property --gradient-x {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 50%;
  }

  @property --gradient-y {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 50%;
  }

  .animated-gradient-bg {
    --gradient-angle: 135deg;
    --gradient-x: 50%;
    --gradient-y: 50%;
    background-color: #06b6d4;
    background-image: radial-gradient(
        circle,
        rgba(0, 0, 0, 0.15) 1.5px,
        transparent 1.5px
      ),
      linear-gradient(var(--gradient-angle), #06b6d4 0%, #ec4899 100%);
    background-size:
      22px 22px,
      100% 400%;
    background-position:
      0 0,
      var(--gradient-x) var(--gradient-y);
    animation:
      gradient-rotate 12s ease infinite,
      gradient-move 8s ease infinite;
  }

  @keyframes gradient-rotate {
    0% {
      --gradient-angle: 135deg;
    }
    100% {
      --gradient-angle: 495deg;
    }
  }

  @keyframes gradient-move {
    0% {
      --gradient-x: 50%;
      --gradient-y: 50%;
    }
    25% {
      --gradient-x: 0%;
      --gradient-y: 100%;
    }
    50% {
      --gradient-x: 100%;
      --gradient-y: 0%;
    }
    75% {
      --gradient-x: 0%;
      --gradient-y: 0%;
    }
    100% {
      --gradient-x: 50%;
      --gradient-y: 50%;
    }
  }
</style>
