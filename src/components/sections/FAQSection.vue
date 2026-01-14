<template>
  <section id="faq" class="faq">
    <div class="faq-glow"></div>
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">FAQ</h2>
        <p class="section-subtitle">Temukan jawaban untuk pertanyaan yang sering diajukan</p>
      </div>

      <div class="faq-container">
        <div 
          v-for="item in faqData" 
          :key="item.id"
          class="faq-item"
          :class="{ 'active': activeId === item.id }"
          @click="toggleFAQ(item.id)"
        >
          <div class="faq-question">
            <h3>{{ item.question }}</h3>
            <span class="faq-icon">
              <!-- Animated Chevron -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </div>
          <div class="faq-answer">
            <div class="faq-answer-inner">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { faqData } from '@/data/faq';

const activeId = ref(null);

const toggleFAQ = (id) => {
  activeId.value = activeId.value === id ? null : id;
};
</script>

<style scoped>
.faq {
  position: relative;
  overflow: hidden;
  /* Removed local background to let global body bg shine through, or clearer separation */
  background: rgba(10, 14, 39, 0.3);
}

.faq-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(123, 47, 255, 0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.container {
  position: relative;
  z-index: 1;
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

.faq-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.faq-item {
  background: rgba(13, 18, 30, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}

.faq-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.faq-item:hover {
  background: rgba(13, 18, 30, 0.8);
  border-color: rgba(0, 217, 255, 0.3);
  transform: translateX(4px);
}

.faq-item.active {
  background: rgba(13, 18, 30, 0.9);
  border-color: var(--color-primary);
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.05);
}

.faq-item.active::before {
  opacity: 1;
}

.faq-question {
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.faq-question h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-grey-200);
  margin: 0;
  flex: 1;
  font-family: var(--font-primary);
  transition: color 0.3s ease;
}

.faq-item:hover h3 {
  color: var(--color-pure-white);
}

.faq-item.active h3 {
  color: var(--color-primary);
  text-shadow: 0 0 10px rgba(0, 217, 255, 0.3);
}

.faq-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-500);
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 50%;
}

.faq-icon svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.faq-item:hover .faq-icon {
  color: var(--color-pure-white);
  background: rgba(255, 255, 255, 0.1);
}

.faq-item.active .faq-icon {
  color: var(--color-pure-white);
  background: var(--gradient-primary);
}

.faq-item.active .faq-icon svg {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(0, 0, 0, 0.2);
}

.faq-item.active .faq-answer {
  max-height: 500px; /* Arbitrary large height */
}

.faq-answer-inner {
  padding: 0 24px 24px 24px;
}

.faq-answer p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-grey-400);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 16px;
}

@media (max-width: 768px) {
  .faq-question h3 {
    font-size: 1rem;
  }

  .faq-answer p {
    font-size: 0.9rem;
  }
}
</style>
