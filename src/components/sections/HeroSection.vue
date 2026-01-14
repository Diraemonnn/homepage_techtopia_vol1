<template>
  <section id="beranda" class="hero">
    <div class="hero-background">
      <div class="hero-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>

    <div class="container">
      <div class="hero-content-wrapper">
        <!-- Mascot -->
        <div class="hero-mascot">
          <img 
            src="/images/mascot.png" 
            alt="TECHTOPIA Mascot"
            class="mascot-image"
            @error="handleImageError"
          />
        </div>

        <!-- Content -->
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="title-main">TECHTOPIA</span>
            <span class="title-sub">Vol. 1</span>
          </h1>

          <h2 class="hero-theme">
            START IT: Spark Talent and Raise Through Innovation & Technology
          </h2>

          <div class="hero-description glass">
            <p>
              Olimpiade TIK tingkat nasional bagi siswa SMA/SMK/MA sederajat 
              untuk menggali potensi dan mengembangkan talenta muda melalui 
              inovasi dan teknologi digital.
            </p>
          </div>

          <div class="hero-buttons">
            <a href="#daftar-lomba" class="btn btn-primary btn-large">
              <span class="btn-icon">🏆</span>
              Daftar Lomba
            </a>
            <a href="#tujuan" class="btn btn-secondary btn-large">
              <span class="btn-icon">ℹ️</span>
              Pelajari Lebih Lanjut
            </a>
          </div>

          <!-- Stats Bar -->
          <div class="hero-stats glass">
            <div class="stat-item">
              <span class="stat-number">4</span>
              <span class="stat-label">Kategori Lomba</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">342+</span>
              <span class="stat-label">Peserta Terdaftar</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">Nasional</span>
              <span class="stat-label">Tingkat Kompetisi</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <span class="scroll-text">Scroll Down</span>
      <span class="scroll-arrow">↓</span>
    </div>
  </section>
</template>

<script setup>
// Handle image loading errors with placeholder
const handleImageError = (event) => {
  event.target.src = 'https://placehold.co/400x400/0066FF/FFFFFF?text=TECHTOPIA+Mascot';
};
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 120px 0 var(--space-12);
  overflow: hidden;
  background: linear-gradient(135deg, #0066FF 0%, #00CCFF 50%, #0066FF 100%);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.hero-shapes {
  position: relative;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border: var(--border-width-thick) solid var(--color-pure-black);
  opacity: 0.1;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: var(--color-neon-yellow);
  top: 10%;
  left: 5%;
  transform: rotate(15deg);
  animation: float 8s ease-in-out infinite;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: var(--color-hot-pink);
  bottom: 15%;
  right: 10%;
  transform: rotate(-20deg);
  animation: float 6s ease-in-out infinite reverse;
}

.shape-3 {
  width: 250px;
  height: 250px;
  background: var(--color-lime-green);
  top: 50%;
  right: 20%;
  transform: rotate(45deg);
  animation: float 10s ease-in-out infinite;
}

.container {
  position: relative;
  z-index: 1;
}

.hero-content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--space-8);
  align-items: center;
  max-width: 100%;
  width: 100%;
}

.hero-mascot {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.mascot-image {
  width: 100%;
  max-width: 350px;
  height: auto;
  filter: drop-shadow(8px 8px 0px rgba(0, 0, 0, 0.5));
  animation: float 6s ease-in-out infinite;
  transition: all var(--transition-base);
}

.mascot-image:hover {
  transform: scale(1.05) rotate(3deg);
  filter: drop-shadow(16px 16px 0px rgba(0, 0, 0, 0.7));
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
  max-width: 100%;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  margin: 0;
}

.title-main {
  font-size: clamp(var(--text-5xl), 8vw, var(--text-7xl));
  font-weight: var(--weight-black);
  color: var(--color-pure-white);
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 0.9;
  text-shadow: 
    4px 4px 0px var(--color-pure-black),
    -2px -2px 0px var(--color-neon-yellow);
}

.title-sub {
  font-size: clamp(var(--text-2xl), 4vw, var(--text-4xl));
  font-weight: var(--weight-black);
  color: var(--color-neon-yellow);
  text-transform: uppercase;
  text-shadow: 3px 3px 0px var(--color-pure-black);
}

.hero-theme {
  font-size: clamp(var(--text-base), 2.5vw, var(--text-xl));
  font-weight: var(--weight-bold);
  color: var(--color-pure-white);
  line-height: 1.4;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);
}

.hero-description {
  padding: var(--space-5);
  border: var(--border-width-medium) solid var(--color-pure-black);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
}

.hero-description p {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-pure-white);
  font-weight: var(--weight-medium);
}

.hero-buttons {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
  align-items: center;
}

.btn-icon {
  font-size: var(--text-2xl);
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-6);
  border: var(--border-width-medium) solid var(--color-pure-black);
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  margin-top: var(--space-4);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  flex: 1;
  min-width: 0;
}

.stat-number {
  font-size: var(--text-3xl);
  font-weight: var(--weight-black);
  color: var(--color-neon-yellow);
  font-family: var(--font-mono);
}

.stat-label {
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--color-pure-white);
  text-align: center;
  text-transform: uppercase;
  opacity: 0.9;
}

.stat-divider {
  width: 2px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
}

.scroll-indicator {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  animation: bounce 2s ease-in-out infinite;
}

.scroll-text {
  font-size: var(--text-sm);
  font-weight: var(--weight-bold);
  color: var(--color-pure-white);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.scroll-arrow {
  font-size: var(--text-2xl);
  color: var(--color-neon-yellow);
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-content-wrapper {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-mascot {
    order: -1;
  }

  .mascot-image {
    margin: 0 auto;
    max-width: 350px;
  }

  .hero-content {
    align-items: center;
  }

  .hero-buttons {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 var(--space-8);
  }

  .hero-content-wrapper {
    gap: var(--space-6);
  }

  .hero-stats {
    flex-direction: column;
    gap: var(--space-3);
    padding: var(--space-4);
  }

  .stat-divider {
    width: 100%;
    height: 2px;
  }

  .mascot-image {
    max-width: 220px;
  }

  .hero-description {
    padding: var(--space-4);
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .hero-buttons .btn {
    width: 100%;
    justify-content: center;
  }

  .stat-number {
    font-size: var(--text-xl);
  }

  .stat-label {
    font-size: var(--text-xs);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(2deg);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
}
</style>
