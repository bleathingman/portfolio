<template>
  <section id="projects" class="projects section">
    <div class="container">
      <div class="projects__header">
        <div>
          <div class="reveal section-label">Projets</div>
          <h2 class="reveal reveal-delay-1 section-title">Ce que j'ai construit.</h2>
        </div>
        <a class="reveal reveal-delay-2 projects__all" :href="personal.github" target="_blank" rel="noopener noreferrer">
          Tous les projets
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      </div>

      <!-- Featured projects (large) -->
      <div class="projects__featured">
        <article
          v-for="(project, i) in featuredProjects"
          :key="project.id"
          class="reveal projects__card projects__card--featured"
          :class="`reveal-delay-${i + 1}`"
          :style="{ '--project-gradient': project.gradient }"
        >
          <!-- Glow accent -->
          <div class="projects__card-glow" aria-hidden="true"></div>

          <!-- Number -->
          <span class="projects__card-num">0{{ i + 1 }}</span>

          <!-- Content -->
          <div class="projects__card-body">
            <div class="projects__card-meta">
              <span class="projects__card-year">{{ project.year }}</span>
            </div>
            <h3 class="projects__card-title">{{ project.title }}</h3>
            <p class="projects__card-desc">{{ project.description }}</p>
            <ul class="projects__card-tags">
              <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
            </ul>
          </div>

          <!-- Links -->
          <div class="projects__card-links">
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="projects__card-link" aria-label="Voir le code source sur GitHub">
              <IconGitHub />
              Code
            </a>
            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" class="projects__card-link projects__card-link--demo" aria-label="Voir la démo live">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
              Demo
            </a>
          </div>
        </article>
      </div>

      <!-- Other projects (small grid) -->
      <div class="projects__other" v-if="otherProjects.length">
        <article
          v-for="(project, i) in otherProjects"
          :key="project.id"
          class="reveal projects__card projects__card--small"
          :class="`reveal-delay-${i + 1}`"
          :style="{ '--project-gradient': project.gradient }"
        >
          <div class="projects__card-body">
            <div class="projects__card-meta">
              <span class="projects__card-year">{{ project.year }}</span>
            </div>
            <h3 class="projects__card-title">{{ project.title }}</h3>
            <p class="projects__card-desc">{{ project.description }}</p>
            <ul class="projects__card-tags">
              <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
            </ul>
          </div>
          <div class="projects__card-links">
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="projects__card-link">
              <IconGitHub /> Code
            </a>
            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" class="projects__card-link projects__card-link--demo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
              Demo
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { projects, personal } from '@/data/portfolio.js'
import IconGitHub from '@/components/icons/IconGitHub.vue'

export default {
  name: 'ProjectsSection',
  components: { IconGitHub },
  data() {
    return { personal }
  },
  computed: {
    featuredProjects() {
      return projects.filter((p) => p.featured)
    },
    otherProjects() {
      return projects.filter((p) => !p.featured)
    },
  },
}
</script>

<style scoped>
.section-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-md);
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
}

.projects__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: var(--space-xl);
  gap: var(--space-lg);
}

.projects__all {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-muted);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 2px;
  transition: color var(--duration-fast), border-color var(--duration-fast);
  white-space: nowrap;
}

.projects__all:hover {
  color: var(--color-text);
  border-color: var(--color-border-hover);
}

/* Featured grid */
.projects__featured {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

/* Other grid */
.projects__other {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-md);
}

/* Card base */
.projects__card {
  position: relative;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color var(--duration-normal),
              background var(--duration-normal),
              transform var(--duration-slow) var(--ease-out),
              box-shadow var(--duration-slow) var(--ease-out);
}

.projects__card:hover {
  border-color: var(--color-border-hover);
  background: var(--color-bg-card-hover);
  transform: translateY(-4px);
  box-shadow: var(--shadow-card), 0 0 30px rgba(0, 0, 0, 0.4);
}

/* Glow top accent */
.projects__card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--project-gradient);
  opacity: 0.7;
  transition: opacity var(--duration-normal);
}

.projects__card:hover .projects__card-glow { opacity: 1; }

/* Card number */
.projects__card-num {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--color-text-subtle);
}

/* Card body */
.projects__card-body {
  flex: 1;
  padding: var(--space-lg);
  padding-top: calc(var(--space-lg) + 8px);
}

.projects__card-meta {
  margin-bottom: var(--space-sm);
}

.projects__card-year {
  font-size: 0.75rem;
  color: var(--color-text-subtle);
  font-weight: 500;
  letter-spacing: 0.05em;
}

.projects__card-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: var(--space-sm);
  transition: color var(--duration-fast);
}

.projects__card:hover .projects__card-title {
  background: var(--project-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.projects__card-desc {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  line-height: 1.65;
  margin-bottom: var(--space-md);
}

.projects__card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* Card links */
.projects__card-links {
  padding: var(--space-md) var(--space-lg);
  border-top: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.projects__card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-text-muted);
  transition: color var(--duration-fast);
}

.projects__card-link:hover { color: var(--color-text); }

.projects__card-link--demo {
  color: var(--color-accent);
}

.projects__card-link--demo:hover { color: #fff; }

@media (max-width: 900px) {
  .projects__featured { grid-template-columns: 1fr; }
}

@media (max-width: 600px) {
  .projects__header { flex-direction: column; align-items: flex-start; }
}
</style>
