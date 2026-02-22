<script lang="ts">
  import {
    LayoutTemplate,
    Code2,
    Cloud,
    Rocket,
    Repeat
  } from 'lucide-svelte';

  const steps = [
    {
      icon: LayoutTemplate,
      title: 'Create architecture',
      description: 'Design your system manually or with our AI Agent.',
    },
    {
      icon: Code2,
      title: 'Generate Codebases',
      description: 'Get production-ready, AI-enabled foundation code.',
    },
    {
      icon: Cloud,
      title: 'Connect Cloud',
      description: 'Securely link your own cloud provider.',
    },
    {
      icon: Rocket,
      title: 'Provision Infra & Deploy',
      description: 'Configure your cloud and deploy effortlessly.',
    },
    {
      icon: Repeat,
      title: 'Refine and Redeploy',
      description: 'Iterate with ease and maintain full control.',
    },
  ];
</script>

<section id="how-it-works" class="w-full py-12 md:py-20 bg-background relative border-y">
  <div class="container px-4 md:px-6">
    <h2 class="text-3xl italic font-thin text-foreground sm:text-4xl md:text-5xl text-center mb-16">
      How it works?
    </h2>
    
    <div class="grid grid-cols-2 gap-8 gap-y-10 md:grid-cols-5 md:gap-12 relative">
      <!-- Connection line (Desktop) -->
      <div class="hidden md:block absolute top-[48px] left-[10%] right-[10%] h-[1px] bg-border -z-0"></div>
      
      {#each steps as step, i}
        <div class="flex flex-col items-center text-center group relative z-10 {i === steps.length - 1 ? 'col-span-2 md:col-span-1' : ''}">
          <div class="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-[30px] bg-card border border-muted-foreground flex items-center justify-center mb-4 md:mb-6 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500 shadow-sm relative">
            <span class="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-foreground text-background rounded-lg text-[10px] md:text-xs font-mono flex items-center justify-center border-2 border-background shadow-sm">
              0{i + 1}
            </span>
            <step.icon class="w-7 h-7 md:w-10 md:h-10 text-muted-foreground group-hover:text-primary transition-all duration-500 group-hover:scale-110" />
          </div>
          <h3 class="text-xs md:text-sm font-bold text-primary mb-1 uppercase font-mono tracking-tight px-1 md:px-2">
            {step.title}
          </h3>
          <p class="text-[10px] md:text-[11px] text-muted-foreground leading-relaxed max-w-[140px] md:max-w-[180px]">
            {step.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
