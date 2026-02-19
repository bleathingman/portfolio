<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__copy">
        © {{ year }} {{ personal.name }} — Conçu &amp; développé avec ♥
      </p>
      <p class="footer__built">
        Construit avec <strong>Vue.js</strong> + <strong>Vite</strong>
      </p>
    </div>
  </footer>
</template>

<script>
import { personal } from '@/data/portfolio.js'

export default {
  name: 'FooterSection',
  data() {
    return {
      personal,
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  padding: var(--space-lg) 0;
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
}

.footer__copy,
.footer__built {
  font-size: 0.8rem;
  color: var(--color-text-subtle);
}

.footer__built strong {
  color: var(--color-text-muted);
  font-weight: 500;
}

@media (max-width: 500px) {
  .footer__inner { flex-direction: column; text-align: center; }
}
</style>
