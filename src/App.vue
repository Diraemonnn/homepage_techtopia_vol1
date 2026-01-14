<template>
  <div id="app">
    <AppHeader />
    
    <main>
      <HeroSection />
      
      <!-- Smart Countdown Feature -->
      <section class="countdown-section">
        <div class="container">
          <SmartCountdown />
        </div>
      </section>

      <ObjectivesSection />
      
      <!-- Interactive Timeline Feature -->
      <InteractiveTimeline />
      
      <CompetitionsSection />
      
      <!-- Live Leaderboard Feature -->
      <LiveLeaderboard />
      
      <FAQSection />
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';
import HeroSection from './components/sections/HeroSection.vue';
import ObjectivesSection from './components/sections/ObjectivesSection.vue';
import CompetitionsSection from './components/sections/CompetitionsSection.vue';
import FAQSection from './components/sections/FAQSection.vue';
import SmartCountdown from './components/features/SmartCountdown.vue';
import InteractiveTimeline from './components/features/InteractiveTimeline.vue';
import LiveLeaderboard from './components/features/LiveLeaderboard.vue';
</script>

<style>
@import './assets/styles/global.css';

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding-top: 80px; /* Account for fixed header */
}

.countdown-section {
  padding: var(--space-12) 0;
  background: linear-gradient(135deg, #FF6B00 0%, #FF8C00 100%);
}

/* Smooth scroll offset for fixed header */
section[id] {
  scroll-margin-top: 100px;
}

/* Loading animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#app {
  animation: fadeIn 0.5s ease-in;
}
</style>
