<template>
  <header class="app-header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <nav class="nav-wrapper">
        <!-- Logo -->
        <a href="#beranda" class="logo">
          <img 
            src="/images/logo_techtopia.png" 
            alt="TECHTOPIA Logo" 
            class="logo-img"
            @error="handleLogoError"
          />
        </a>

        <!-- Desktop Navigation -->
        <ul class="nav-list" :class="{ 'active': mobileMenuOpen }">
          <li><a href="#beranda" class="nav-link" @click="closeMobileMenu">Beranda</a></li>
          <li><a href="#tujuan" class="nav-link" @click="closeMobileMenu">Tujuan</a></li>
          <li><a href="#daftar-lomba" class="nav-link" @click="closeMobileMenu">Daftar Lomba</a></li>
          <li><a href="#faq" class="nav-link" @click="closeMobileMenu">FAQ</a></li>
          <li>
            <a href="https://techtopia.hmjtiundiksha.com/login" class="btn btn-primary btn-small">
              Login
            </a>
          </li>
        </ul>

        <!-- Mobile Hamburger -->
        <button 
          class="hamburger" 
          :class="{ 'active': mobileMenuOpen }"
          @click="toggleMobileMenu"
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const handleLogoError = (event) => {
  event.target.src = 'https://placehold.co/200x50/000000/FFFFFF?text=TECHTOPIA';
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-fixed);
  background: rgba(10, 14, 39, 0.85); /* Solid dark glass for visibility */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  height: 80px;
  display: flex;
  align-items: center;
}

.app-header.scrolled {
  background: rgba(5, 8, 20, 0.95); /* Even darker on scroll */
  border-bottom-color: rgba(0, 217, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.logo-img {
  height: 50px; /* Slightly larger logo */
  width: auto;
  transition: all 0.3s ease;
  filter: drop-shadow(0 0 8px rgba(0, 217, 255, 0.3)); /* Glow match theme */
}

.logo:hover .logo-img {
  transform: scale(1.05);
  filter: drop-shadow(0 0 12px rgba(0, 217, 255, 0.6));
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}

.nav-link {
  font-family: var(--font-primary);
  font-size: 0.95rem; /* Better readability */
  font-weight: 500;
  color: var(--color-grey-300);
  letter-spacing: 0.02em;
  position: relative;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  box-shadow: 0 0 8px var(--color-primary);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--color-pure-white);
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
}

.nav-link:hover::after {
  width: 100%;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .app-header {
    height: 70px;
  }
}
</style>
