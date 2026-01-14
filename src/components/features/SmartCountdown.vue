<template>
  <div class="countdown-wrapper">
    <div class="countdown-card">
      <div class="countdown-header">
        <h3>Pendaftaran Ditutup Dalam</h3>
        <p class="countdown-deadline">{{ formatDeadline(targetDate) }}</p>
      </div>

      <div class="countdown-display">
        <div class="countdown-unit">
          <div class="countdown-number">{{ days }}</div>
          <div class="countdown-label">Hari</div>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-unit">
          <div class="countdown-number">{{ hours }}</div>
          <div class="countdown-label">Jam</div>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-unit">
          <div class="countdown-number">{{ minutes }}</div>
          <div class="countdown-label">Menit</div>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-unit">
          <div class="countdown-number">{{ seconds }}</div>
          <div class="countdown-label">Detik</div>
        </div>
      </div>

      <div class="countdown-message">
        <p>{{ urgencyMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCountdown } from '@/composables/useCountdown';

const targetDate = new Date('2025-08-30T23:59:59');
const { days, hours, minutes, seconds, urgencyMessage } = useCountdown(targetDate);

const formatDeadline = (date) => {
  return date.toLocaleDateString('id-ID', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
};
</script>

<style scoped>
/* Futuristic Checkout Style */
.countdown-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.countdown-card {
  padding: 48px;
  border-radius: 24px;
  background: rgba(10, 14, 30, 0.4); /* Very subtle dark glass */
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 217, 255, 0.1);
  box-shadow: 0 0 40px rgba(0, 217, 255, 0.05); /* Subtle glow */
  transition: all 0.3s ease;
  text-align: center;
}

.countdown-card:hover {
  border-color: rgba(0, 217, 255, 0.3);
  box-shadow: 0 0 60px rgba(0, 217, 255, 0.1);
}

.countdown-header {
  margin-bottom: 40px;
}

.countdown-header h3 {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--color-pure-white);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 0 0 20px rgba(0, 217, 255, 0.4);
}

.countdown-deadline {
  font-family: var(--font-mono);
  font-size: 1rem;
  color: var(--color-primary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.countdown-display {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.countdown-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.countdown-number {
  font-family: var(--font-display); /* Use display font for numbers */
  font-size: 4rem;
  line-height: 1;
  font-weight: 700;
  color: var(--color-pure-white);
  text-shadow: 
    0 0 10px rgba(0, 217, 255, 0.5),
    0 0 20px rgba(0, 217, 255, 0.3);
  min-width: 80px;
}

.countdown-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-grey-400);
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.countdown-separator {
  font-size: 3rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.1);
  margin-top: -10px; /* Adjust vertical align */
}

.countdown-message {
  display: inline-block;
  padding: 12px 32px;
  background: rgba(0, 217, 255, 0.1);
  border: 1px solid rgba(0, 217, 255, 0.2);
  border-radius: 50px;
  font-size: 0.95rem;
  color: var(--color-pure-white);
  font-weight: 500;
  letter-spacing: 0.02em;
  animation: pulse 2s infinite;
}

@media (max-width: 768px) {
  .countdown-display {
    gap: 16px;
  }
  
  .countdown-number {
    font-size: 2.5rem;
    min-width: 50px;
  }
  
  .countdown-separator {
    display: none; /* Hide separators on mobile for cleaner look */
  }
  
  .countdown-card {
    padding: 32px 20px;
  }
}
</style>
