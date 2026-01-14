<template>
  <section id="beranda" class="hero">
    <div class="hero-grid-bg"></div>
    <div class="container">
      <div class="hero-content">
        <!-- Tech Icons Floating -->
        <div class="tech-icons">
          <div class="tech-icon" style="--delay: 0s">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
            </svg>
          </div>
          <div class="tech-icon" style="--delay: 0.5s">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 3v2H7v2H5v2H3v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h-2V7h-2V5h-2V3H9zm0 2h2v2h2v2h2v2h-2v2h-2v2h-2v-2H7v-2H5V9h2V7h2V5z"/>
            </svg>
          </div>
          <div class="tech-icon" style="--delay: 1s">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/>
            </svg>
          </div>
          <div class="tech-icon" style="--delay: 1.5s">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            </svg>
          </div>
        </div>

        <div class="hero-badge">
          <span class="badge-dot"></span>
          <span>Olimpiade TIK Nasional 2025</span>
        </div>

        <h1 class="hero-title">
          <span class="title-main">TECHTOPIA</span>
          <span class="title-version">Vol. 1</span>
        </h1>

        <h2 class="hero-tagline">
          START IT: Spark Talent and Raise Through<br>
          <span class="text-gradient">Innovation & Technology</span>
        </h2>

        <p class="hero-description">
          Olimpiade TIK tingkat nasional bagi siswa SMA/SMK/MA sederajat 
          untuk menggali potensi dan mengembangkan talenta muda melalui 
          inovasi dan teknologi digital.
        </p>

        <div class="hero-buttons">
          <a href="#daftar-lomba" class="btn btn-primary btn-large">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
            Daftar Sekarang
          </a>
          <a href="#tujuan" class="btn btn-outline btn-large">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
            Pelajari Lebih Lanjut
          </a>
        </div>

        <!-- Stats -->
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
            </div>
            <div class="stat-content">
              <span class="stat-number">4</span>
              <span class="stat-label">Kategori Lomba</span>
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <div class="stat-content">
              <span class="stat-number">342+</span>
              <span class="stat-label">Peserta Terdaftar</span>
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div class="stat-content">
              <span class="stat-number">Nasional</span>
              <span class="stat-label">Tingkat Kompetisi</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-line"></div>
      <span class="scroll-text">Scroll</span>
    </div>
  </section>
</template>

<script setup>
// Futuristic hero with tech icons
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 140px 0 var(--space-20);
  overflow: hidden;
}

.hero-grid-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 217, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 217, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(50px);
  }
}

.tech-icons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.1;
}

.tech-icon {
  position: absolute;
  width: 80px;
  height: 80px;
  color: var(--color-primary);
  animation: float 6s ease-in-out infinite;
  animation-delay: var(--delay);
}

.tech-icon:nth-child(1) {
  top: 10%;
  left: 10%;
}

.tech-icon:nth-child(2) {
  top: 20%;
  right: 15%;
}

.tech-icon:nth-child(3) {
  bottom: 20%;
  left: 15%;
}

.tech-icon:nth-child(4) {
  bottom: 15%;
  right: 10%;
}

.hero-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  align-items: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: rgba(0, 217, 255, 0.1);
  border: var(--border-width-thin) solid rgba(0, 217, 255, 0.3);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: var(--weight-semibold);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.title-main {
  font-size: clamp(var(--text-5xl), 12vw, var(--text-7xl));
  font-weight: var(--weight-black);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.05em;
  line-height: 1;
  text-shadow: 0 0 80px rgba(0, 217, 255, 0.5);
}

.title-version {
  font-size: clamp(var(--text-xl), 3vw, var(--text-2xl));
  color: var(--color-grey-400);
  font-weight: var(--weight-normal);
  letter-spacing: 0.2em;
}

.hero-tagline {
  font-size: clamp(var(--text-lg), 2.5vw, var(--text-2xl));
  font-weight: var(--weight-medium);
  color: var(--color-grey-300);
  line-height: 1.5;
  font-family: var(--font-primary);
  text-transform: none;
}

.hero-description {
  font-size: var(--text-lg);
  line-height: 1.8;
  color: var(--color-grey-400);
  max-width: 700px;
}

.hero-buttons {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
  margin-top: var(--space-4);
}

.btn-icon {
  width: 20px;
  height: 20px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-6);
  width: 100%;
  max-width: 800px;
  margin-top: var(--space-8);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-6);
  background: rgba(15, 22, 41, 0.6);
  backdrop-filter: blur(10px);
  border: var(--border-width-thin) solid rgba(0, 217, 255, 0.2);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.stat-item:hover {
  border-color: var(--color-primary);
  box-shadow: var(--glow-primary);
  transform: translateY(-4px);
}

.stat-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  border-radius: var(--radius-md);
  color: var(--color-pure-white);
  flex-shrink: 0;
}

.stat-icon svg {
  width: 24px;
  height: 24px;
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  text-align: left;
}

.stat-number {
  font-size: var(--text-2xl);
  font-weight: var(--weight-bold);
  color: var(--color-pure-white);
  font-family: var(--font-display);
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--color-grey-400);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.scroll-indicator {
  position: absolute;
  bottom: var(--space-12);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  opacity: 0.5;
}

.scroll-line {
  width: 2px;
  height: 40px;
  background: var(--gradient-primary);
  animation: scrollMove 2s ease-in-out infinite;
}

.scroll-text {
  font-size: var(--text-xs);
  color: var(--color-grey-400);
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

@keyframes scrollMove {
  0%, 100% {
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    transform: translateY(10px);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 120px 0 var(--space-16);
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .hero-buttons .btn {
    width: 100%;
  }

  .tech-icons {
    opacity: 0.05;
  }
}
</style>
