<template>
  <section id="daftar-lomba" class="competitions">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">Daftar Lomba</h2>
        <p class="section-subtitle">Pilih kategori lomba sesuai minat dan keahlianmu</p>
      </div>

      <div class="competitions-grid">
        <div 
          v-for="(competition, index) in competitionsWithIcons" 
          :key="competition.id"
          class="competition-card card"
        >
          <div class="competition-icon" v-html="competition.icon"></div>
          
          <div class="competition-header">
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

// Add category icons
const competitionsWithIcons = competitions.map((comp) => {
  const iconMap = {
    'Web Design': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/></svg>`,
    'Cisco Packet Tracer': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
    'Poster Digital': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h5v7H5zm6-3h8v3h-8zm0 4h8v6h-8z"/></svg>`,
    'Video Kreatif': `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>`
  };
  return {
    ...comp,
    icon: iconMap[comp.title] || iconMap['Web Design']
  };
});
</script>

<style scoped>
.competitions {
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

/* Horizontal Scrolling Layout */
.competitions-grid {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding: 10px 4px 40px 4px; /* Bottom padding for scrollbar/shadow */
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch; /* Smooth scroll on iOS */
  /* Hide scrollbar but keep functionality */
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) rgba(255, 255, 255, 0.05);
}

.competitions-grid::-webkit-scrollbar {
  height: 6px;
}

.competitions-grid::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

.competitions-grid::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 10px;
}

.competition-card {
  min-width: 350px;
  max-width: 350px;
  flex-shrink: 0;
  scroll-snap-align: center;
  
  /* Restored Base Styles */
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 580px;
  position: relative;
  background: rgba(13, 18, 30, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px; /* Added proper radius */
  transition: all 0.3s ease;
}

.competition-card:hover {
  transform: translateY(-8px);
  border-color: var(--color-primary);
  box-shadow: 0 20px 40px -10px rgba(0, 217, 255, 0.15);
}

/* Ensure container handles overflow correctly */
.container {
  overflow: visible; /* Let scrollbar be visible/usable */
}


.competition-icon {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 217, 255, 0.1);
  border: 1px solid rgba(0, 217, 255, 0.2);
  border-radius: 12px;
  color: var(--color-primary);
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
}

.competition-icon svg {
  width: 28px;
  height: 28px;
}

.competition-header {
  padding: 32px 24px;
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(123, 47, 255, 0.1) 100%);
  position: relative;
  z-index: 1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.competition-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-pure-white);
  text-transform: uppercase;
  text-align: left;
  margin: 0;
  font-family: var(--font-display);
  letter-spacing: 0.05em;
  padding-right: 60px; /* Space for icon */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.competition-body {
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
}

.competition-description {
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: left;
  color: var(--color-grey-300);
}

.waves-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
}

.wave-item {
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.wave-item:hover {
  border-color: rgba(0, 217, 255, 0.3);
  background: rgba(0, 217, 255, 0.05);
  transform: translateX(4px);
}

.wave-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.wave-label {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-grey-400);
  letter-spacing: 0.05em;
}

.wave-price {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-primary);
  font-family: var(--font-mono);
}

.wave-date {
  font-size: 0.8rem;
  color: var(--color-grey-500);
}

.competition-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 24px;
}

.competition-actions .btn {
  width: 100%;
  min-width: 0;
  padding: 0 16px;
  height: 44px;
  font-size: 0.85rem;
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
