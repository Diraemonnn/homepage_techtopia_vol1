<template>
  <section id="faq" class="faq">
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
            <span class="faq-icon">{{ activeId === item.id ? '−' : '+' }}</span>
          </div>
          <div class="faq-answer">
            <p>{{ item.answer }}</p>
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
  background: linear-gradient(135deg, #00FF66 0%, #00CC52 100%);
}

.section-title {
  color: var(--color-pure-black);
}

.section-subtitle {
  color: var(--color-pure-black);
  opacity: 0.8;
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
  padding: 0 var(--space-4);
}

.faq-item {
  background: var(--color-pure-white);
  border: var(--border-width-medium) solid var(--color-pure-black);
  cursor: pointer;
  transition: all var(--transition-base);
  overflow: hidden;
}

.faq-item:hover {
  transform: translate(-4px, -4px);
  box-shadow: var(--shadow-lg);
}

.faq-item.active {
  border-color: var(--color-electric-blue);
}

.faq-question {
  padding: var(--space-6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
}

.faq-question h3 {
  font-size: var(--text-xl);
  font-weight: var(--weight-bold);
  color: var(--color-pure-black);
  margin: 0;
  flex: 1;
}

.faq-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-3xl);
  font-weight: var(--weight-black);
  background: var(--color-electric-blue);
  color: var(--color-pure-white);
  border: var(--border-width-thin) solid var(--color-pure-black);
  flex-shrink: 0;
  transition: all var(--transition-fast);
}

.faq-item.active .faq-icon {
  background: var(--color-hot-pink);
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-slow);
}

.faq-item.active .faq-answer {
  max-height: 500px;
}

.faq-answer p {
  padding: 0 var(--space-6) var(--space-6);
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-pure-black);
  opacity: 0.8;
}

@media (max-width: 768px) {
  .faq-question h3 {
    font-size: var(--text-base);
  }

  .faq-answer p {
    font-size: var(--text-base);
  }
}
</style>
