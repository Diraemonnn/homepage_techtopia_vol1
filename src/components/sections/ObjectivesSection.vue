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
          v-for="objective in objectives" 
          :key="objective.id"
          class="objective-card card"
          :style="{ borderTopColor: objective.color }"
        >
          <div class="objective-icon" :style="{ backgroundColor: objective.color }">
            {{ objective.icon }}
          </div>
          <h3 class="objective-title">{{ objective.title }}</h3>
          <p class="objective-description">{{ objective.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { objectives } from '@/data/competitions';
</script>

<style scoped>
.objectives {
  background: linear-gradient(135deg, #9D00FF 0%, #6B00B3 100%);
  color: var(--color-pure-white);
}

.section-title {
  color: var(--color-neon-yellow);
}

.section-subtitle {
  color: var(--color-pure-white);
  opacity: 0.9;
}

.objectives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-8);
  max-width: 100%;
  width: 100%;
}

.objective-card {
  background: var(--color-pure-white);
  color: var(--color-pure-black);
  padding: var(--space-8);
  text-align: center;
  border-top: 8px solid;
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 320px;
}

.objective-card:hover {
  transform: translate(-6px, -6px);
  box-shadow: 12px 12px 0px var(--color-pure-black);
}

.objective-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto var(--space-6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-6xl);
  border: var(--border-width-medium) solid var(--color-pure-black);
  box-shadow: var(--shadow-md);
}

.objective-title {
  font-size: var(--text-2xl);
  font-weight: var(--weight-black);
  margin-bottom: var(--space-4);
  text-transform: uppercase;
}

.objective-description {
  font-size: var(--text-lg);
  line-height: 1.6;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .objectives-grid {
    grid-template-columns: 1fr;
  }
}
</style>
