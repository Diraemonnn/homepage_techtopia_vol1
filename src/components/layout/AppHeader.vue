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
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const handleLogoError = (event) => {
  event.target.src = 'https://placehold.co/200x50/0066FF/FFFFFF?text=TECHTOPIA';
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
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: var(--border-width-medium) solid var(--color-pure-black);
  transition: all var(--transition-base);
}

.app-header.scrolled {
  box-shadow: var(--shadow-md);
  background: rgba(255, 255, 255, 0.98);
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) 0;
}

.logo-img {
  height: 50px;
  width: auto;
  transition: all var(--transition-base);
}

.logo-img:hover {
  transform: scale(1.05);
}

.nav-list {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  list-style: none;
}

.nav-link {
  font-size: var(--text-base);
  font-weight: var(--weight-bold);
  color: var(--color-pure-black);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  transition: all var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 3px;
  background: var(--color-electric-blue);
  transition: width var(--transition-fast);
}

.nav-link:hover {
  color: var(--color-electric-blue);
}

.nav-link:hover::after {
  width: 100%;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2);
}

.hamburger span {
  width: 30px;
  height: 3px;
  background: var(--color-pure-black);
  transition: all var(--transition-fast);
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-list {
    position: fixed;
    top: 80px;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: calc(100vh - 80px);
    background: var(--color-pure-white);
    border-left: var(--border-width-medium) solid var(--color-pure-black);
    flex-direction: column;
    align-items: flex-start;
    padding: var(--space-8);
    gap: var(--space-4);
    transition: right var(--transition-base);
    box-shadow: var(--shadow-lg);
  }

  .nav-list.active {
    right: 0;
  }

  .nav-link {
    width: 100%;
    padding: var(--space-3) 0;
  }

  .nav-list .btn {
    width: 100%;
  }
}
</style>
