<template>
  <section id="contact" class="contact section">
    <div class="container">

      <!-- Glow -->
      <div class="contact__orb" aria-hidden="true"></div>

      <div class="contact__inner">
        <div class="reveal contact__label section-label">Contact</div>
        <h2 class="reveal reveal-delay-1 contact__title">
          Travaillons<br />
          <span class="gradient-text">ensemble.</span>
        </h2>
        <p class="reveal reveal-delay-2 contact__sub">
          Disponible pour des projets freelance, des opportunités CDI<br />
          ou simplement pour échanger autour d'une idée.
        </p>

        <!-- CTA email -->
        <a
          class="reveal reveal-delay-3 contact__email-btn"
          :href="`mailto:${personal.email}`"
        >
          <span>{{ personal.email }}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>

        <!-- Social links -->
        <div class="reveal reveal-delay-4 contact__socials">
          <a :href="personal.github" target="_blank" rel="noopener noreferrer" class="contact__social">
            <IconGitHub /> GitHub
          </a>
          <span class="contact__social-sep" aria-hidden="true">·</span>
          <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer" class="contact__social">
            <IconLinkedIn /> LinkedIn
          </a>
          <span class="contact__social-sep" aria-hidden="true">·</span>
          <a :href="personal.twitter" target="_blank" rel="noopener noreferrer" class="contact__social">
            <IconTwitter /> Twitter
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { personal } from '@/data/portfolio.js'
import IconGitHub   from '@/components/icons/IconGitHub.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
import IconTwitter  from '@/components/icons/IconTwitter.vue'

export default {
  name: 'ContactSection',
  components: { IconGitHub, IconLinkedIn, IconTwitter },
  data() {
    return { personal }
  },
}
</script>

<style scoped>
.contact {
  position: relative;
  overflow: hidden;
  text-align: center;
}

.contact__orb {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(183, 26, 235, 0.1), transparent 65%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.contact__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-md);
}

.contact__title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  margin-bottom: var(--space-lg);
}

.contact__sub {
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  max-width: 420px;
  margin-bottom: var(--space-xl);
}

/* Email button */
.contact__email-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  padding: 1em 2em;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  background: var(--color-bg-card);
  margin-bottom: var(--space-xl);
  transition: border-color var(--duration-normal),
              background var(--duration-normal),
              transform var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal);
}

.contact__email-btn:hover {
  border-color: var(--color-accent);
  background: var(--color-bg-card-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow-blue);
}

/* Socials */
.contact__socials {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.contact__social {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-muted);
  transition: color var(--duration-fast);
}

.contact__social:hover { color: var(--color-text); }

.contact__social-sep {
  color: var(--color-text-subtle);
}

@media (max-width: 500px) {
  .contact__email-btn { font-size: 0.85rem; }
}
</style>
