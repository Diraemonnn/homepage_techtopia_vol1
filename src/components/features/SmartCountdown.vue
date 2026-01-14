<template>
  <div class="smart-countdown">
    <div class="countdown-card glass-strong" :style="{ borderColor: urgencyColor }">
      <!-- Header -->
      <div class="countdown-header">
        <div class="countdown-icon">⏰</div>
        <div class="countdown-title">
          <h3>Pendaftaran Ditutup Dalam</h3>
          <p class="countdown-subtitle">{{ urgencyMessage }}</p>
        </div>
      </div>

      <!-- Countdown Display -->
      <div class="countdown-display">
        <div class="countdown-unit" :class="{ 'pulse': urgencyLevel === 'critical' }">
          <div class="countdown-number" :style="{ backgroundColor: urgencyColor }">
            {{ formatNumber(timeRemaining.days) }}
          </div>
          <div class="countdown-label">Hari</div>
        </div>

        <div class="countdown-separator">:</div>

        <div class="countdown-unit" :class="{ 'pulse': urgencyLevel === 'critical' }">
          <div class="countdown-number" :style="{ backgroundColor: urgencyColor }">
            {{ formatNumber(timeRemaining.hours) }}
          </div>
          <div class="countdown-label">Jam</div>
        </div>

        <div class="countdown-separator">:</div>

        <div class="countdown-unit" :class="{ 'pulse': urgencyLevel === 'critical' }">
          <div class="countdown-number" :style="{ backgroundColor: urgencyColor }">
            {{ formatNumber(timeRemaining.minutes) }}
          </div>
          <div class="countdown-label">Menit</div>
        </div>

        <div class="countdown-separator">:</div>

        <div class="countdown-unit" :class="{ 'pulse': urgencyLevel === 'critical' }">
          <div class="countdown-number" :style="{ backgroundColor: urgencyColor }">
            {{ formatNumber(timeRemaining.seconds) }}
          </div>
          <div class="countdown-label">Detik</div>
        </div>
      </div>

      <!-- Urgency Bar -->
      <div class="urgency-bar">
        <div 
          class="urgency-fill" 
          :style="{ 
            width: urgencyPercentage + '%',
            backgroundColor: urgencyColor 
          }"
        ></div>
      </div>

      <!-- CTA Button -->
      <div class="countdown-cta">
        <a href="#daftar-lomba" class="btn btn-primary btn-large">
          🚀 Daftar Sekarang
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCountdown } from '@/composables/useCountdown';

// Target date: End of wave 2 registration (August 30, 2025)
const targetDate = '2025-08-30T23:59:59';

const {
  timeRemaining,
  urgencyLevel,
  urgencyColor,
  urgencyMessage,
  formatNumber
} = useCountdown(targetDate);

// Calculate urgency percentage for visual bar
const urgencyPercentage = computed(() => {
  const totalDays = 40; // Total registration period (approx)
  const remainingDays = timeRemaining.value.days;
  return Math.max(0, Math.min(100, ((totalDays - remainingDays) / totalDays) * 100));
});
</script>

<style scoped>
.smart-countdown {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.countdown-card {
  padding: var(--space-6);
  border: var(--border-width-thick) solid var(--color-pure-black);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.countdown-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: linear-gradient(90deg, 
    var(--color-electric-blue), 
    var(--color-hot-pink), 
    var(--color-neon-yellow)
  );
}

.countdown-header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.countdown-icon {
  font-size: var(--text-4xl);
  animation: float 3s ease-in-out infinite;
}

.countdown-title h3 {
  font-size: clamp(var(--text-xl), 3.5vw, var(--text-3xl));
  font-weight: var(--weight-black);
  color: var(--color-pure-black);
  margin-bottom: var(--space-2);
  text-transform: uppercase;
}

.countdown-subtitle {
  font-size: var(--text-lg);
  font-weight: var(--weight-semibold);
  color: var(--color-pure-black);
  opacity: 0.8;
}

.countdown-display {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
  flex-wrap: wrap;
}

.countdown-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}

.countdown-unit.pulse .countdown-number {
  animation: pulse 1s ease-in-out infinite;
}

.countdown-number {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-4xl);
  font-weight: var(--weight-black);
  color: var(--color-pure-white);
  border: var(--border-width-medium) solid var(--color-pure-black);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  font-family: var(--font-mono);
}

.countdown-separator {
  font-size: var(--text-4xl);
  font-weight: var(--weight-black);
  color: var(--color-pure-black);
  margin: 0 var(--space-1);
}

.countdown-label {
  font-size: var(--text-base);
  font-weight: var(--weight-bold);
  color: var(--color-pure-black);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.urgency-bar {
  width: 100%;
  height: 10px;
  background: rgba(0, 0, 0, 0.1);
  border: var(--border-width-thin) solid var(--color-pure-black);
  margin-bottom: var(--space-6);
  overflow: hidden;
}

.urgency-fill {
  height: 100%;
  transition: width 1s ease-out, background-color var(--transition-base);
}

.countdown-cta {
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .countdown-card {
    padding: var(--space-6);
  }

  .countdown-number {
    width: 70px;
    height: 70px;
    font-size: var(--text-3xl);
  }

  .countdown-separator {
    font-size: var(--text-3xl);
    margin: 0 var(--space-1);
  }

  .countdown-label {
    font-size: var(--text-sm);
  }

  .countdown-icon {
    font-size: var(--text-4xl);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}
</style>
