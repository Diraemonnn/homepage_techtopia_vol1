<template>
  <section id="daftar-lomba" class="competitions">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">Daftar Lomba</h2>
        <p class="section-subtitle">Pilih kategori lomba sesuai minat dan keahlianmu</p>
      </div>

      <div class="competitions-grid">
        <div 
          v-for="competition in competitions" 
          :key="competition.id"
          class="competition-card card"
        >
          <div class="competition-header" :style="{ backgroundColor: competition.color }">
            <h3 class="competition-title">{{ competition.title }}</h3>
          </div>

          <div class="competition-body">
            <p class="competition-description">{{ competition.description }}</p>

            <div class="waves-info">
              <div 
                v-for="wave in competition.waves" 
                :key="wave.wave"
                class="wave-item"
              >
                <div class="wave-header">
                  <span class="wave-label">{{ wave.label }}</span>
                  <span class="wave-price">{{ wave.priceFormatted }}</span>
                </div>
                <p class="wave-date">{{ formatDateRange(wave.startDate, wave.endDate) }}</p>
              </div>
            </div>

            <div class="competition-actions">
              <a :href="competition.registrationUrl" class="btn btn-primary">
                Daftar Sekarang
              </a>
              <a :href="competition.guideUrl" class="btn btn-outline">
                Buku Panduan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { competitions } from '@/data/competitions';

const formatDateRange = (start, end) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const startDate = new Date(start).toLocaleDateString('id-ID', options);
  const endDate = new Date(end).toLocaleDateString('id-ID', options);
  return `${startDate} – ${endDate}`;
};
</script>

<style scoped>
.competitions {
  background: linear-gradient(135deg, #FF006E 0%, #C70055 100%);
  color: var(--color-pure-white);
}

.section-title {
  color: var(--color-neon-yellow);
}

.section-subtitle {
  color: var(--color-pure-white);
  opacity: 0.9;
}

.competitions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-8);
  max-width: 100%;
  width: 100%;
}

.competition-card {
  background: var(--color-pure-white);
  color: var(--color-pure-black);
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 480px;
}

.competition-header {
  padding: var(--space-6);
  border-bottom: var(--border-width-medium) solid var(--color-pure-black);
}

.competition-title {
  font-size: var(--text-3xl);
  font-weight: var(--weight-black);
  color: var(--color-pure-white);
  text-transform: uppercase;
  text-align: center;
  margin: 0;
}

.competition-body {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  flex: 1;
}

.competition-description {
  font-size: var(--text-lg);
  line-height: 1.6;
  text-align: center;
}

.waves-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.wave-item {
  padding: var(--space-4);
  background: rgba(0, 0, 0, 0.05);
  border: var(--border-width-thin) solid var(--color-pure-black);
}

.wave-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-2);
}

.wave-label {
  font-size: var(--text-lg);
  font-weight: var(--weight-black);
  text-transform: uppercase;
}

.wave-price {
  font-size: var(--text-xl);
  font-weight: var(--weight-black);
  color: var(--color-electric-blue);
  font-family: var(--font-mono);
}

.wave-date {
  font-size: var(--text-base);
  opacity: 0.7;
}

.competition-actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.competition-actions .btn {
  flex: 1;
  min-width: 140px;
}

@media (max-width: 768px) {
  .competitions-grid {
    grid-template-columns: 1fr;
  }

  .competition-actions {
    flex-direction: column;
  }

  .competition-actions .btn {
    width: 100%;
  }
}
</style>
