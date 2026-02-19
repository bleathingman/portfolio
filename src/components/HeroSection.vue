<template>
  <section id="hero" class="hero section">
    <!-- Ambient background orbs -->
    <div class="hero__orb hero__orb--blue"  aria-hidden="true"></div>
    <div class="hero__orb hero__orb--purple" aria-hidden="true"></div>

    <div class="container hero__content">
      <!-- Badge -->
      <div class="hero__badge hero-animate hero-animate-delay-1">
        <span class="hero__badge-dot"></span>
        Open to opportunities
      </div>

      <!-- Headline -->
      <h1 class="hero__title hero-animate hero-animate-delay-2">
        <span class="hero__title-line">
          Je construis des
        </span>
        <span class="hero__title-line hero__title-gradient">
          projets web
        </span>
        <span class="hero__title-line">
          qui durent.
        </span>
      </h1>

      <!-- Sub -->
      <p class="hero__sub hero-animate hero-animate-delay-3">
        {{ personal.role }} · {{ personal.location }}<br />
        Web, software &amp; game projects — learning, sharing, creating.
      </p>

      <!-- Actions -->
      <div class="hero__actions hero-animate hero-animate-delay-4">
        <a href="#projects" class="btn btn--primary">
          Voir mes projets
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="#contact" class="btn btn--ghost">Me contacter</a>
      </div>

      <!-- Social links -->
      <div class="hero__social hero-animate hero-animate-delay-4">
        <a :href="personal.github" target="_blank" rel="noopener noreferrer" class="hero__social-link" aria-label="GitHub">
          <IconGitHub />
        </a>
        <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer" class="hero__social-link" aria-label="LinkedIn">
          <IconLinkedIn />
        </a>
        <a :href="personal.twitter" target="_blank" rel="noopener noreferrer" class="hero__social-link" aria-label="Twitter">
          <IconTwitter />
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="hero__scroll" aria-hidden="true">
      <span>Scroll</span>
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>

<script>
import { personal } from '@/data/portfolio.js'
import IconGitHub   from '@/components/icons/IconGitHub.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
import IconTwitter  from '@/components/icons/IconTwitter.vue'

export default {
  name: 'HeroSection',
  components: { IconGitHub, IconLinkedIn, IconTwitter },
  data() {
    return { personal }
  },
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: calc(var(--nav-height) + var(--space-xl));
  overflow: hidden;
}

/* Orbs */
.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  animation: orbFloat 12s ease-in-out infinite;
}

.hero__orb--blue {
  width: 500px;
  height: 500px;
  top: -100px;
  left: -100px;
  background: radial-gradient(circle, rgba(0, 221, 255, 0.15), transparent 70%);
  animation-delay: 0s;
}

.hero__orb--purple {
  width: 400px;
  height: 400px;
  bottom: -50px;
  right: 10%;
  background: radial-gradient(circle, rgba(183, 26, 235, 0.12), transparent 70%);
  animation-delay: -6s;
}

/* Content */
.hero__content {
  position: relative;
  z-index: 1;
}

/* Badge */
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-text-muted);
  padding: 0.4em 1em;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-lg);
  background: var(--color-bg-card);
  letter-spacing: 0.03em;
}

.hero__badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #8fffb1;
  box-shadow: 0 0 8px rgba(143, 255, 177, 0.7);
  animation: pulse 2s infinite;
}

/* Title */
.hero__title {
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.035em;
  margin-bottom: var(--space-lg);
}

.hero__title-line {
  display: block;
}

.hero__title-gradient {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Sub */
.hero__sub {
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--color-text-muted);
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: var(--space-xl);
}

/* Actions */
.hero__actions {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.75em 1.6em;
  border-radius: var(--radius-full);
  transition: opacity var(--duration-fast), transform var(--duration-fast), box-shadow var(--duration-normal);
}

.btn:active { transform: scale(0.97); }

.btn--primary {
  background: var(--gradient-primary);
  color: #fff;
  background-size: 200% 200%;
  animation: gradientShift 4s ease infinite;
}

.btn--primary:hover {
  opacity: 0.9;
  box-shadow: var(--shadow-glow-blue);
  transform: translateY(-1px);
}

.btn--ghost {
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
}

.btn--ghost:hover {
  color: var(--color-text);
  border-color: var(--color-border-hover);
  background: rgba(255,255,255,0.03);
}

/* Social */
.hero__social {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.hero__social-link {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: color var(--duration-fast), border-color var(--duration-fast), background var(--duration-fast);
}

.hero__social-link:hover {
  color: var(--color-text);
  border-color: var(--color-border-hover);
  background: rgba(255,255,255,0.04);
}

/* Scroll indicator */
.hero__scroll {
  position: absolute;
  bottom: var(--space-lg);
  right: var(--space-lg);
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-subtle);
  writing-mode: vertical-rl;
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, transparent, var(--color-text-subtle));
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}

@media (max-width: 768px) {
  .hero__orb--blue   { width: 300px; height: 300px; }
  .hero__orb--purple { width: 250px; height: 250px; }
  .hero__scroll      { display: none; }
}
</style>
