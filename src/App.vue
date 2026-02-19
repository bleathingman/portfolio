<template>
  <div id="app">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script>
import NavBar          from '@/components/NavBar.vue'
import HeroSection     from '@/components/HeroSection.vue'
import AboutSection    from '@/components/AboutSection.vue'
import SkillsSection   from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection  from '@/components/ContactSection.vue'
import FooterSection   from '@/components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
    FooterSection,
  },

  mounted() {
    this.initRevealObserver()
  },

  methods: {
    initRevealObserver() {
      const elements = document.querySelectorAll('.reveal')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
      )
      elements.forEach((el) => observer.observe(el))
    },
  },
}
</script>
