<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="container navbar__inner">
      <!-- Logo -->
      <a href="#" class="navbar__logo" aria-label="Retour en haut">
        <span class="navbar__logo-dot"></span>
        <span class="navbar__logo-text">{{ personal.name.split(' ')[0] }}</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="navbar__links" aria-label="Navigation principale">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="navbar__link"
          :class="{ 'navbar__link--active': activeSection === link.id }"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- CTA -->
      <a :href="`mailto:${personal.email}`" class="navbar__cta">
        <span class="navbar__cta-dot" :class="{ 'navbar__cta-dot--available': personal.available }"></span>
        Disponible
      </a>

      <!-- Mobile toggle -->
      <button class="navbar__burger" @click="toggleMenu" :aria-expanded="menuOpen" aria-label="Menu">
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div class="navbar__mobile" :class="{ 'navbar__mobile--open': menuOpen }">
      <nav>
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="navbar__mobile-link"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
import { personal } from '@/data/portfolio.js'

export default {
  name: 'NavBar',

  data() {
    return {
      personal,
      isScrolled: false,
      menuOpen: false,
      activeSection: 'hero',
      navLinks: [
        { href: '#about',    label: 'À propos', id: 'about' },
        { href: '#skills',   label: 'Skills',   id: 'skills' },
        { href: '#projects', label: 'Projets',  id: 'projects' },
        { href: '#contact',  label: 'Contact',  id: 'contact' },
      ],
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    this.setupIntersectionObserver()
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 40
    },

    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },

    setupIntersectionObserver() {
      const sections = document.querySelectorAll('section[id]')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id
            }
          })
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      sections.forEach((section) => observer.observe(section))
    },
  },
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  transition: background var(--duration-normal) var(--ease-out),
              border-color var(--duration-normal) var(--ease-out),
              backdrop-filter var(--duration-normal) var(--ease-out);
  border-bottom: 1px solid transparent;
}

.navbar--scrolled {
  background: rgba(10, 10, 12, 0.85);
  border-bottom-color: var(--color-border);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}

.navbar__inner {
  height: 100%;
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

/* Logo */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-right: auto;
}

.navbar__logo-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gradient-primary);
  flex-shrink: 0;
}

.navbar__logo-text {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Links */
.navbar__links {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.navbar__link {
  font-size: 0.88rem;
  font-weight: 400;
  color: var(--color-text-muted);
  transition: color var(--duration-fast) var(--ease-out);
  position: relative;
  padding: 4px 0;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--gradient-text);
  transition: width var(--duration-normal) var(--ease-out);
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--color-text);
}

.navbar__link:hover::after,
.navbar__link--active::after {
  width: 100%;
}

/* CTA */
.navbar__cta {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--color-text-muted);
  padding: 0.4em 1em;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  transition: color var(--duration-normal), border-color var(--duration-normal), background var(--duration-normal);
}

.navbar__cta:hover {
  color: var(--color-text);
  border-color: var(--color-border-hover);
  background: rgba(255,255,255,0.03);
}

.navbar__cta-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-text-subtle);
}

.navbar__cta-dot--available {
  background: #8fffb1;
  box-shadow: 0 0 6px rgba(143, 255, 177, 0.6);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
}

/* Burger */
.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
  margin-left: auto;
}

.navbar__burger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--color-text-muted);
  border-radius: 1px;
  transition: transform var(--duration-normal), opacity var(--duration-normal);
}

/* Mobile menu */
.navbar__mobile {
  display: none;
  flex-direction: column;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-lg);
  background: rgba(10, 10, 12, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
  transform: translateY(-100%);
  opacity: 0;
  transition: transform var(--duration-normal) var(--ease-out),
              opacity var(--duration-normal) var(--ease-out);
}

.navbar__mobile--open {
  transform: translateY(0);
  opacity: 1;
}

.navbar__mobile-link {
  font-size: 1rem;
  color: var(--color-text-muted);
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border);
  transition: color var(--duration-fast);
}

.navbar__mobile-link:hover { color: var(--color-text); }

@media (max-width: 768px) {
  .navbar__links { display: none; }
  .navbar__cta   { display: none; }
  .navbar__burger { display: flex; }
  .navbar__mobile { display: flex; }
}
</style>
