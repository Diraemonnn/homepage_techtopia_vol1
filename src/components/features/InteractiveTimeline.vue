<template>
  <div class="interactive-timeline">
    <div class="timeline-header text-center">
      <h2 class="section-title">Timeline Kompetisi</h2>
      <p class="section-subtitle">Ikuti setiap tahapan kompetisi TECHTOPIA Vol. 1</p>
    </div>

    <!-- Overall Progress -->
    <div class="timeline-progress">
      <div class="progress-bar">
        <div 
          class="progress-fill" 
          :style="{ width: overallProgress + '%' }"
        ></div>
      </div>
      <p class="progress-text">Progress: {{ overallProgress }}% Complete</p>
    </div>

    <!-- Timeline Stages -->
    <div class="timeline-container">
      <div 
        v-for="(stage, index) in enhancedStages" 
        :key="stage.id"
        class="timeline-stage"
        :class="[
          `status-${stage.computedStatus}`,
          { 'selected': selectedStage?.id === stage.id }
        ]"
        @click="selectStage(stage)"
      >
        <!-- Stage Marker -->
        <div class="stage-marker" :style="{ backgroundColor: stage.color }">
          <span class="stage-icon">{{ stage.icon }}</span>
          <div class="stage-number">{{ index + 1 }}</div>
        </div>

        <!-- Stage Content -->
        <div class="stage-content glass">
          <h3 class="stage-name">{{ stage.nameId }}</h3>
          <p class="stage-date">{{ getDateRange(stage) }}</p>
          
          <!-- Status Badge -->
          <div class="stage-badge" :class="`badge-${stage.computedStatus}`">
            <span v-if="stage.computedStatus === 'completed'">✓ Selesai</span>
            <span v-else-if="stage.computedStatus === 'active'">● Sedang Berlangsung</span>
            <span v-else>○ Akan Datang</span>
          </div>

          <!-- Progress for active stage -->
          <div v-if="stage.computedStatus === 'active'" class="stage-progress">
            <div class="stage-progress-bar">
              <div 
                class="stage-progress-fill" 
                :style="{ 
                  width: stage.progress + '%',
                  backgroundColor: stage.color 
                }"
              ></div>
            </div>
            <p class="stage-progress-text">{{ stage.progress }}% - {{ getDaysRemaining(stage) }} hari tersisa</p>
          </div>

          <!-- Description (shown on hover/click) -->
          <div class="stage-description">
            <p>{{ stage.description }}</p>
          </div>
        </div>

        <!-- Connector Line -->
        <div 
          v-if="index < enhancedStages.length - 1" 
          class="stage-connector"
          :class="{ 'active': stage.computedStatus === 'completed' }"
        ></div>
      </div>
    </div>

    <!-- Active Stage Highlight -->
    <div v-if="activeStage" class="active-stage-highlight glass-strong">
      <div class="highlight-icon">🎯</div>
      <div class="highlight-content">
        <h4>Tahap Saat Ini</h4>
        <p class="highlight-stage">{{ activeStage.nameId }}</p>
        <p class="highlight-description">{{ activeStage.description }}</p>
        <div class="highlight-countdown">
          <span class="highlight-days">{{ getDaysRemaining(activeStage) }}</span>
          <span class="highlight-label">hari tersisa</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTimeline } from '@/composables/useTimeline';
import { timelineStages } from '@/data/competitions';

const {
  enhancedStages,
  activeStage,
  overallProgress,
  selectedStage,
  selectStage,
  getDateRange,
  getDaysRemaining
} = useTimeline(timelineStages);
</script>

<style scoped>
.interactive-timeline {
  padding: var(--space-12) 0;
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
}

.timeline-header {
  margin-bottom: var(--space-12);
}

.section-title {
  color: var(--color-pure-black);
  margin-bottom: var(--space-4);
}

.section-subtitle {
  color: var(--color-pure-black);
  opacity: 0.7;
}

.timeline-progress {
  max-width: 800px;
  margin: 0 auto var(--space-12);
  padding: 0 var(--space-6);
}

.progress-bar {
  width: 100%;
  height: 16px;
  background: rgba(0, 0, 0, 0.1);
  border: var(--border-width-medium) solid var(--color-pure-black);
  overflow: hidden;
  margin-bottom: var(--space-2);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, 
    var(--color-electric-blue), 
    var(--color-hot-pink)
  );
  transition: width 1s ease-out;
}

.progress-text {
  text-align: center;
  font-weight: var(--weight-bold);
  font-size: var(--text-lg);
  color: var(--color-pure-black);
}

.timeline-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-8);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-8);
  position: relative;
  width: 100%;
}

.timeline-stage {
  position: relative;
  cursor: pointer;
  transition: all var(--transition-base);
}

.timeline-stage:hover {
  transform: translateY(-8px);
}

.timeline-stage.selected .stage-content {
  border-color: var(--color-electric-blue);
  box-shadow: var(--shadow-blue);
}

.stage-marker {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: var(--border-width-thick) solid var(--color-pure-black);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-4);
  position: relative;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.timeline-stage:hover .stage-marker {
  transform: scale(1.1) rotate(5deg);
}

.stage-icon {
  font-size: var(--text-4xl);
}

.stage-number {
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 32px;
  height: 32px;
  background: var(--color-pure-black);
  color: var(--color-pure-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--weight-black);
  font-size: var(--text-sm);
  border: var(--border-width-thin) solid var(--color-pure-white);
}

.stage-content {
  padding: var(--space-6);
  border: var(--border-width-medium) solid var(--color-pure-black);
  background: rgba(255, 255, 255, 0.9);
  transition: all var(--transition-base);
  min-height: 280px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.stage-name {
  font-size: var(--text-2xl);
  font-weight: var(--weight-black);
  margin-bottom: var(--space-2);
  color: var(--color-pure-black);
  text-transform: uppercase;
}

.stage-date {
  font-size: var(--text-base);
  font-weight: var(--weight-semibold);
  color: var(--color-pure-black);
  opacity: 0.7;
  margin-bottom: var(--space-4);
}

.stage-badge {
  display: inline-block;
  padding: var(--space-2) var(--space-4);
  border: var(--border-width-thin) solid var(--color-pure-black);
  font-size: var(--text-sm);
  font-weight: var(--weight-bold);
  margin-bottom: var(--space-4);
  text-transform: uppercase;
}

.badge-completed {
  background: var(--color-lime-green);
  color: var(--color-pure-black);
}

.badge-active {
  background: var(--color-neon-yellow);
  color: var(--color-pure-black);
  animation: pulse 2s ease-in-out infinite;
}

.badge-upcoming {
  background: rgba(0, 0, 0, 0.1);
  color: var(--color-pure-black);
}

.stage-progress {
  margin-top: auto;
  padding-top: var(--space-4);
}

.stage-progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(0, 0, 0, 0.1);
  border: var(--border-width-thin) solid var(--color-pure-black);
  overflow: hidden;
  margin-bottom: var(--space-2);
}

.stage-progress-fill {
  height: 100%;
  transition: width 1s ease-out;
}

.stage-progress-text {
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--color-pure-black);
}

.stage-description {
  margin-top: var(--space-4);
  padding-top: var(--space-4);
  border-top: 2px dashed rgba(0, 0, 0, 0.2);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-pure-black);
  opacity: 0.8;
}

.stage-connector {
  display: none;
}

.active-stage-highlight {
  max-width: 800px;
  margin: var(--space-12) auto 0;
  padding: var(--space-8);
  border: var(--border-width-thick) solid var(--color-electric-blue);
  display: flex;
  gap: var(--space-6);
  align-items: center;
  background: rgba(0, 102, 255, 0.1);
}

.highlight-icon {
  font-size: var(--text-6xl);
  flex-shrink: 0;
}

.highlight-content h4 {
  font-size: var(--text-sm);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  color: var(--color-pure-black);
  opacity: 0.6;
  margin-bottom: var(--space-2);
}

.highlight-stage {
  font-size: var(--text-3xl);
  font-weight: var(--weight-black);
  color: var(--color-electric-blue);
  margin-bottom: var(--space-2);
}

.highlight-description {
  font-size: var(--text-lg);
  color: var(--color-pure-black);
  margin-bottom: var(--space-4);
}

.highlight-countdown {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
}

.highlight-days {
  font-size: var(--text-5xl);
  font-weight: var(--weight-black);
  color: var(--color-electric-blue);
  font-family: var(--font-mono);
}

.highlight-label {
  font-size: var(--text-xl);
  font-weight: var(--weight-semibold);
  color: var(--color-pure-black);
}

/* Responsive */
@media (max-width: 768px) {
  .timeline-container {
    grid-template-columns: 1fr;
    padding: var(--space-4);
  }

  .active-stage-highlight {
    flex-direction: column;
    text-align: center;
  }

  .highlight-icon {
    font-size: var(--text-5xl);
  }
}
</style>
