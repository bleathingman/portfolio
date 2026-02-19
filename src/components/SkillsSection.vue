<template>
  <section id="skills" class="skills section">
    <div class="container">
      <div class="section-header">
        <div class="reveal section-label">Compétences</div>
        <h2 class="reveal reveal-delay-1 section-title">Ma boîte à outils.</h2>
      </div>

      <div class="skills__grid">
        <div
          v-for="(skill, i) in skills"
          :key="skill.category"
          class="reveal skills__card"
          :class="`reveal-delay-${i + 1}`"
        >
          <!-- Card header -->
          <div class="skills__card-header">
            <div class="skills__card-icon" :style="{ background: skill.gradient }">
              <IconCode v-if="skill.category === 'Frontend'" />
              <IconServer v-else-if="skill.category === 'Backend'" />
              <IconTool v-else />
            </div>
            <h3 class="skills__card-title">{{ skill.category }}</h3>
          </div>

          <!-- Tags -->
          <ul class="skills__card-tags">
            <li
              v-for="item in skill.items"
              :key="item"
              class="tag"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { skills } from '@/data/portfolio.js'
import IconCode   from '@/components/icons/IconCode.vue'
import IconServer from '@/components/icons/IconServer.vue'
import IconTool   from '@/components/icons/IconTool.vue'

export default {
  name: 'SkillsSection',
  components: { IconCode, IconServer, IconTool },
  data() {
    return { skills }
  },
}
</script>

<style scoped>
.section-header {
  margin-bottom: var(--space-xl);
}

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

/* Grid */
.skills__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

/* Card */
.skills__card {
  padding: var(--space-lg);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: border-color var(--duration-normal), background var(--duration-normal), transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal);
}

.skills__card:hover {
  border-color: var(--color-border-hover);
  background: var(--color-bg-card-hover);
  transform: translateY(-3px);
  box-shadow: var(--shadow-card);
}

.skills__card-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.skills__card-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
}

.skills__card-title {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.skills__card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 900px) {
  .skills__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .skills__grid { grid-template-columns: 1fr; }
}
</style>
