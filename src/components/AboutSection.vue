<template>
  <section id="about" class="about section">
    <div class="container about__inner">

      <!-- Left — text -->
      <div class="about__text">
        <div class="reveal section-label">À propos</div>
        <h2 class="reveal reveal-delay-1 about__title">
          Un développeur<br />qui pense design.
        </h2>
        <p
          v-for="(paragraph, i) in about.bio"
          :key="i"
          class="reveal about__para"
          :class="`reveal-delay-${i + 2}`"
        >
          {{ paragraph }}
        </p>

        <!-- Experience timeline -->
        <div class="reveal reveal-delay-3 about__experience">
          <div
            v-for="(job, i) in experience"
            :key="i"
            class="about__job"
          >
            <div class="about__job-period">{{ job.period }}</div>
            <div class="about__job-info">
              <div class="about__job-title">{{ job.role }}</div>
              <div class="about__job-company">{{ job.company }}</div>
              <p class="about__job-desc">{{ job.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right — stats -->
      <div class="about__stats">
        <div
          v-for="(stat, i) in about.stats"
          :key="i"
          class="reveal about__stat"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="about__stat-value">{{ stat.value }}</div>
          <div class="about__stat-label">{{ stat.label }}</div>
        </div>

        <!-- Visual accent card -->
        <div class="reveal reveal-delay-4 about__accent-card">
          <div class="about__accent-orb" aria-hidden="true"></div>
          <span class="about__accent-text">Toujours en train d'apprendre</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { about, experience } from '@/data/portfolio.js'

export default {
  name: 'AboutSection',
  data() {
    return { about, experience }
  },
}
</script>

<style scoped>
.about__inner {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: var(--space-2xl);
  align-items: start;
}

/* Section label */
.section-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-md);
}

/* Title */
.about__title {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: var(--space-lg);
}

/* Paragraphs */
.about__para {
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: var(--space-md);
  max-width: 540px;
}

/* Experience */
.about__experience {
  margin-top: var(--space-xl);
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-lg);
}

.about__job {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: var(--space-md);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--space-lg);
}

.about__job:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.about__job-period {
  font-size: 0.8rem;
  color: var(--color-text-subtle);
  padding-top: 2px;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.about__job-title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 2px;
}

.about__job-company {
  font-size: 0.82rem;
  color: var(--color-accent);
  margin-bottom: var(--space-sm);
}

.about__job-desc {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* Stats */
.about__stats {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  position: sticky;
  top: calc(var(--nav-height) + var(--space-lg));
}

.about__stat {
  padding: var(--space-lg);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: border-color var(--duration-normal), background var(--duration-normal);
}

.about__stat:hover {
  border-color: var(--color-border-hover);
  background: var(--color-bg-card-hover);
}

.about__stat-value {
  font-family: var(--font-display);
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 6px;
}

.about__stat-label {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  font-weight: 400;
}

/* Accent card */
.about__accent-card {
  position: relative;
  overflow: hidden;
  padding: var(--space-lg);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  animation: borderGlow 4s ease-in-out infinite;
}

.about__accent-orb {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 221, 255, 0.2), transparent 70%);
  top: -20px;
  right: -20px;
  pointer-events: none;
}

.about__accent-text {
  position: relative;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  font-style: italic;
}

@media (max-width: 900px) {
  .about__inner {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  .about__stats {
    position: static;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .about__accent-card { display: none; }
}

@media (max-width: 600px) {
  .about__stats { grid-template-columns: 1fr; }
  .about__job   { grid-template-columns: 1fr; }
}
</style>
