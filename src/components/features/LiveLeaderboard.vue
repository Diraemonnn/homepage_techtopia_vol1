<template>
  <div class="live-leaderboard">
    <div class="leaderboard-header">
      <div class="header-top">
        <h2 class="section-title">Live Statistics</h2>
        <div class="live-indicator">
          <span class="live-dot"></span>
          <span class="live-text">LIVE</span>
        </div>
      </div>
      <p class="section-subtitle">Statistik pendaftaran real-time TECHTOPIA Vol. 1</p>
    </div>

    <div class="leaderboard-grid">
      <!-- Total Participants Card -->
      <div class="stat-card total-card glass-strong">
        <div class="stat-icon">👥</div>
        <div class="stat-content">
          <p class="stat-label">Total Peserta</p>
          <p class="stat-number">{{ animatedTotal }}</p>
          <p class="stat-update">Update: {{ lastUpdateTime }}</p>
        </div>
      </div>

      <!-- Category Stats -->
      <div class="categories-card card">
        <h3 class="card-title">Pendaftaran per Kategori</h3>
        <div class="categories-list">
          <div 
            v-for="(cat, key) in categories" 
            :key="key"
            class="category-item"
          >
            <div class="category-info">
              <span class="category-icon">{{ getCategoryIcon(key) }}</span>
              <span class="category-name">{{ getCategoryName(key) }}</span>
            </div>
            <div class="category-stats">
              <span class="category-count">{{ cat.count }}</span>
              <div class="category-bar">
                <div 
                  class="category-fill" 
                  :style="{ 
                    width: cat.percentage + '%',
                    backgroundColor: getCategoryColor(key)
                  }"
                ></div>
              </div>
              <span class="category-percentage">{{ cat.percentage }}%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Top Schools -->
      <div class="leaderboard-card card">
        <h3 class="card-title">🏫 Top 5 Sekolah</h3>
        <div class="leaderboard-list">
          <div 
            v-for="school in topSchools" 
            :key="school.rank"
            class="leaderboard-item"
            :class="{ 'top-three': school.rank <= 3 }"
          >
            <div class="rank-badge" :class="`rank-${school.rank}`">
              <span v-if="school.rank === 1">🥇</span>
              <span v-else-if="school.rank === 2">🥈</span>
              <span v-else-if="school.rank === 3">🥉</span>
              <span v-else>{{ school.rank }}</span>
            </div>
            <div class="school-info">
              <p class="school-name">{{ school.name }}</p>
              <p class="school-province">{{ school.province }}</p>
            </div>
            <div class="school-count">
              {{ school.participants }}
              <span class="count-label">peserta</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Top Provinces -->
      <div class="leaderboard-card card">
        <h3 class="card-title">🗺️ Top 5 Provinsi</h3>
        <div class="leaderboard-list">
          <div 
            v-for="province in topProvinces" 
            :key="province.rank"
            class="leaderboard-item"
            :class="{ 'top-three': province.rank <= 3 }"
          >
            <div class="rank-badge" :class="`rank-${province.rank}`">
              {{ province.rank }}
            </div>
            <div class="province-info">
              <p class="province-name">{{ province.name }}</p>
            </div>
            <div class="province-count">
              {{ province.participants }}
              <span class="count-label">peserta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { leaderboardData } from '@/data/competitions';

// Reactive data
const totalParticipants = ref(leaderboardData.totalParticipants);
const categories = ref(leaderboardData.categories);
const topSchools = ref(leaderboardData.topSchools);
const topProvinces = ref(leaderboardData.topProvinces);
const lastUpdate = ref(new Date());

// Animated total counter
const animatedTotal = ref(0);

// Format last update time
const lastUpdateTime = computed(() => {
  const now = lastUpdate.value;
  return now.toLocaleTimeString('id-ID', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'
  });
});

// Category helpers
const getCategoryIcon = (key) => {
  const icons = {
    webDesign: '🌐',
    ciscoPacketTracer: '🔌',
    posterDigital: '🎨',
    videoKreatif: '🎬'
  };
  return icons[key] || '📊';
};

const getCategoryName = (key) => {
  const names = {
    webDesign: 'Web Design',
    ciscoPacketTracer: 'Cisco Packet Tracer',
    posterDigital: 'Poster Digital',
    videoKreatif: 'Video Kreatif'
  };
  return names[key] || key;
};

const getCategoryColor = (key) => {
  const colors = {
    webDesign: '#0066FF',
    ciscoPacketTracer: '#FF006E',
    posterDigital: '#9D00FF',
    videoKreatif: '#00FF66'
  };
  return colors[key] || '#666666';
};

// Simulate live updates
let updateInterval = null;

const simulateLiveUpdate = () => {
  // Randomly increment participant count (1-3 participants)
  const increment = Math.floor(Math.random() * 3) + 1;
  totalParticipants.value += increment;
  
  // Update random category
  const categoryKeys = Object.keys(categories.value);
  const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
  categories.value[randomCategory].count += increment;
  
  // Recalculate percentages
  const total = totalParticipants.value;
  Object.keys(categories.value).forEach(key => {
    categories.value[key].percentage = Math.round((categories.value[key].count / total) * 100);
  });
  
  // Update timestamp
  lastUpdate.value = new Date();
};

// Animate counter on mount
const animateCounter = () => {
  const target = totalParticipants.value;
  const duration = 2000; // 2 seconds
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      animatedTotal.value = target;
      clearInterval(timer);
    } else {
      animatedTotal.value = Math.floor(current);
    }
  }, duration / steps);
};

onMounted(() => {
  animateCounter();
  
  // Simulate live updates every 10 seconds
  updateInterval = setInterval(() => {
    simulateLiveUpdate();
  }, 10000);
});

onUnmounted(() => {
  if (updateInterval) {
    clearInterval(updateInterval);
  }
});
</script>

<style scoped>
.live-leaderboard {
  padding: var(--space-12) 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: var(--color-pure-white);
}

.leaderboard-header {
  text-align: center;
  margin-bottom: var(--space-12);
}

.header-top {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.section-title {
  color: var(--color-neon-yellow);
  margin: 0;
}

.live-indicator {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: rgba(255, 0, 110, 0.2);
  border: var(--border-width-thin) solid var(--color-hot-pink);
}

.live-dot {
  width: 12px;
  height: 12px;
  background: var(--color-hot-pink);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.live-text {
  font-size: var(--text-sm);
  font-weight: var(--weight-black);
  color: var(--color-hot-pink);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.section-subtitle {
  color: var(--color-pure-white);
  opacity: 0.8;
}

.leaderboard-grid {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
  width: 100%;
}

/* Total Card */
.stat-card {
  padding: var(--space-8);
  border: var(--border-width-thick) solid var(--color-neon-yellow);
  display: flex;
  align-items: center;
  gap: var(--space-6);
  background: rgba(255, 255, 0, 0.1);
  transition: all var(--transition-base);
}

.stat-card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 8px 8px 0px var(--color-neon-yellow);
}

.stat-icon {
  font-size: var(--text-7xl);
  flex-shrink: 0;
}

.stat-content {
  flex: 1;
}

.stat-label {
  font-size: var(--text-lg);
  font-weight: var(--weight-semibold);
  color: var(--color-pure-white);
  opacity: 0.8;
  margin-bottom: var(--space-2);
  text-transform: uppercase;
}

.stat-number {
  font-size: var(--text-6xl);
  font-weight: var(--weight-black);
  color: var(--color-neon-yellow);
  font-family: var(--font-mono);
  line-height: 1;
  margin-bottom: var(--space-2);
}

.stat-update {
  font-size: var(--text-sm);
  color: var(--color-pure-white);
  opacity: 0.6;
  font-family: var(--font-mono);
}

/* Cards */
.card {
  background: rgba(255, 255, 255, 0.05);
  border: var(--border-width-medium) solid rgba(255, 255, 255, 0.2);
  padding: var(--space-6);
  backdrop-filter: blur(10px);
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

.card:hover {
  transform: translate(-4px, -4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-electric-blue);
}

.card-title {
  font-size: var(--text-2xl);
  font-weight: var(--weight-black);
  color: var(--color-pure-white);
  margin-bottom: var(--space-6);
  text-transform: uppercase;
  border-bottom: 3px solid var(--color-electric-blue);
  padding-bottom: var(--space-3);
}

/* Categories */
.categories-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.category-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.category-info {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.category-icon {
  font-size: var(--text-2xl);
}

.category-name {
  font-size: var(--text-lg);
  font-weight: var(--weight-semibold);
  color: var(--color-pure-white);
}

.category-stats {
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  align-items: center;
  gap: var(--space-3);
}

.category-count {
  font-size: var(--text-2xl);
  font-weight: var(--weight-black);
  color: var(--color-pure-white);
  font-family: var(--font-mono);
}

.category-bar {
  height: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: var(--border-width-thin) solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.category-fill {
  height: 100%;
  transition: width 1s ease-out;
}

.category-percentage {
  font-size: var(--text-base);
  font-weight: var(--weight-bold);
  color: var(--color-pure-white);
  text-align: right;
}

/* Leaderboard */
.leaderboard-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.leaderboard-item {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4);
  background: rgba(255, 255, 255, 0.05);
  border: var(--border-width-thin) solid rgba(255, 255, 255, 0.1);
  transition: all var(--transition-fast);
}

.leaderboard-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(4px);
}

.leaderboard-item.top-three {
  background: rgba(255, 215, 0, 0.1);
  border-color: var(--color-neon-yellow);
}

.rank-badge {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xl);
  font-weight: var(--weight-black);
  background: rgba(255, 255, 255, 0.1);
  border: var(--border-width-thin) solid rgba(255, 255, 255, 0.3);
  flex-shrink: 0;
}

.rank-badge.rank-1,
.rank-badge.rank-2,
.rank-badge.rank-3 {
  font-size: var(--text-2xl);
  background: transparent;
  border: none;
}

.school-info,
.province-info {
  flex: 1;
}

.school-name,
.province-name {
  font-size: var(--text-base);
  font-weight: var(--weight-bold);
  color: var(--color-pure-white);
  margin-bottom: var(--space-1);
}

.school-province {
  font-size: var(--text-sm);
  color: var(--color-pure-white);
  opacity: 0.6;
}

.school-count,
.province-count {
  font-size: var(--text-xl);
  font-weight: var(--weight-black);
  color: var(--color-neon-yellow);
  font-family: var(--font-mono);
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.count-label {
  font-size: var(--text-xs);
  font-weight: var(--weight-normal);
  color: var(--color-pure-white);
  opacity: 0.6;
  text-transform: uppercase;
}

/* Responsive */
@media (max-width: 768px) {
  .leaderboard-grid {
    grid-template-columns: 1fr;
    padding: 0 var(--space-4);
  }

  .stat-card {
    flex-direction: column;
    text-align: center;
  }

  .stat-number {
    font-size: var(--text-5xl);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1);
  }
}
</style>
