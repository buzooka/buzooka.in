<script lang="ts">
  import { Github, Linkedin, Twitter, Instagram, Facebook, Youtube } from 'lucide-svelte';
</script>

<footer class="flex flex-col gap-8 py-12 w-full shrink-0 px-4 md:px-6 bg-slate-950">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Company Info -->
      <div class="space-y-4">
        <div class="flex flex-col gap-4">
          <a href="/" class="inline-block">
            <img
              alt="Buzooka"
              src="/buzooka-ai-icon-light.svg"
              width="40"
              height="40"
              class="h-10 w-10"
            />
          </a>
          <p class="text-sm text-slate-400 max-w-xs">
            Launch production-ready MVPs instantly with AI-powered architecture.
          </p>
          <div class="flex flex-wrap gap-4 pt-2">
            <a 
              href="https://x.com/buzooka" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/company/buzooka-in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/buzooka" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://instagram.com/buzooka_in" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.facebook.com/buzooka.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.youtube.com/@buzooka_in" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-sm font-semibold text-slate-100 uppercase tracking-wider">Product</h3>
        <ul class="space-y-2">
          <li><a href="https://dash.buzooka.in/login?utm_source=footer" target="_blank" class="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Dashboard</a></li>
          <li><a href="/architect" class="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Architect</a></li>
          <li><a href="/about" class="text-sm text-slate-400 hover:text-cyan-400 transition-colors">About Us</a></li>
          <li><a href="/#features" class="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Features</a></li>
          <li><a href="/pricing" class="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Pricing</a></li>
          <li><a href="/consultation" class="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Book a demo</a></li>
          <li><a href="https://status.buzooka.in" target="_blank" class="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Status</a></li>
        </ul>
      </div>

      <!-- Resources -->
      <div class="space-y-4">
        <h3 class="text-sm font-semibold text-slate-100 uppercase tracking-wider">Resources</h3>
        <ul class="space-y-2">
          <li><a href="/faq" class="text-sm text-slate-400 hover:text-cyan-400 transition-colors">FAQ</a></li>
          <li><a href="/#hire" class="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Hire Experts</a></li>
          <li><a href="mailto:hello@buzooka.in" class="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Contact</a></li>
          <li><a href="https://buzooka.in/blog" class="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Blog</a></li>
        </ul>
      </div>

      <!-- Legal -->
      <div class="space-y-4">
        <h3 class="text-sm font-semibold text-slate-100 uppercase tracking-wider">Legal</h3>
        <ul class="space-y-2">
          <li><a href="/legal" class="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Legal Center</a></li>
          <li><a href="/terms" class="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Terms & Conditions</a></li>
          <li><a href="/privacy" class="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
          <li><a href="/refund" class="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Refund Policy</a></li>
          <li><a href="/cookies" class="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    
    <div class="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p class="text-xs text-slate-500">
        © 2026 Biolocal Technologies (OPC) Private Limited. All rights reserved.
      </p>
    </div>
  </div>
</footer>
