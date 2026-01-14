<template>
  <section id="tujuan" class="objectives">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">Tujuan Techtopia</h2>
        <p class="section-subtitle">
          TECHTOPIA Vol. 1 hadir dengan misi mengembangkan potensi generasi muda di bidang teknologi informasi
        </p>
      </div>

      <div class="objectives-grid">
        <div 
          v-for="(objective, index) in objectivesWithIcons" 
          :key="objective.id"
          class="objective-card card"
        >
          <div class="objective-icon" v-html="objective.icon"></div>
          <div class="objective-number">{{ String(index + 1).padStart(2, '0') }}</div>
          <h3 class="objective-title">{{ objective.title }}</h3>
          <p class="objective-description">{{ objective.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { objectives } from '@/data/competitions';

// Add IT-related icons to objectives
const objectivesWithIcons = objectives.map((obj, index) => {
  const icons = [
    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l-5.5 9h11z M12 22l5.5-9h-11z M12 2v20"/></svg>`
  ];
  return {
    ...obj,
    icon: icons[index] || icons[0]
  };
});
</script>

<style scoped>
.objectives {
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
  width: 100%;
}

.section-subtitle {
  color: var(--color-grey-400);
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.objectives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-8);
  max-width: 100%;
}

.objective-card {
  padding: var(--space-10);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  min-height: 320px;
  position: relative;
}

.objective-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  border-radius: var(--radius-lg);
  color: var(--color-pure-white);
  margin-bottom: var(--space-2);
}

.objective-icon svg {
  width: 32px;
  height: 32px;
}

.objective-number {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  font-size: var(--text-4xl);
  font-weight: var(--weight-black);
  color: rgba(0, 217, 255, 0.1);
  font-family: var(--font-display);
  line-height: 1;
}

.objective-title {
  font-size: var(--text-xl);
  font-weight: var(--weight-bold);
  color: var(--color-pure-white);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: var(--font-display);
}

.objective-description {
  font-size: var(--text-base);
  line-height: 1.7;
  color: var(--color-grey-400);
  flex: 1;
}

@media (max-width: 768px) {
  .objectives-grid {
    grid-template-columns: 1fr;
  }
}
</style>
