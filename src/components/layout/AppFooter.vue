<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-main">
        <!-- Brand Section -->
        <div class="footer-brand">
          <div class="footer-logos">
            <a href="https://undiksha.ac.id/" target="_blank" class="footer-logo">
              <img 
                src="/images/logo_undiksha.png" 
                alt="Undiksha"
                @error="handleFooterImageError"
              />
            </a>
            <a href="https://hmjti.undiksha.ac.id/" target="_blank" class="footer-logo">
              <img 
                src="/images/logo_hmj.png" 
                alt="HMJ TI"
                @error="handleFooterImageError"
              />
            </a>
          </div>
          <div class="footer-social">
            <a href="https://www.facebook.com/hmj.ti.undiksha/" target="_blank" class="social-link">
              <span class="social-icon">📘</span>
            </a>
            <a href="https://www.instagram.com/hmj_ti.undiksha/" target="_blank" class="social-link">
              <span class="social-icon">📷</span>
            </a>
            <a href="https://www.youtube.com/@hmjtiundiksha" target="_blank" class="social-link">
              <span class="social-icon">📺</span>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h3 class="footer-title">Akses Cepat</h3>
          <ul class="footer-links">
            <li><a href="https://hmjti.undiksha.ac.id/">Web HMJ</a></li>
            <li><a href="https://integer.hmjtiundiksha.com/">Web Integer</a></li>
            <li><a href="https://eors.hmjtiundiksha.com/">EORS</a></li>
            <li><a href="https://etika.hmjtiundiksha.com/">ETIKA</a></li>
            <li><a href="https://iuran.hmjtiundiksha.com/">Iuran HMJ</a></li>
            <li><a href="https://inventaris.hmjtiundiksha.com/">Inventaris</a></li>
          </ul>
        </div>

        <!-- Content Links -->
        <div class="footer-section">
          <h3 class="footer-title">Konten</h3>
          <ul class="footer-links">
            <li><a href="#beranda">Beranda</a></li>
            <li><a href="#tujuan">Tujuan</a></li>
            <li><a href="#daftar-lomba">Daftar Lomba</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-section">
          <h3 class="footer-title">Layanan</h3>
          <div class="contact-info">
            <p>📍 Jl. Udayana No.11, Banjar Tegal, Singaraja, Kabupaten Buleleng, Bali</p>
            <p>✉️ <a href="mailto:hmjtiundiksha@gmail.com">hmjtiundiksha@gmail.com</a></p>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p class="footer-copyright">© 2025 HMJ TI Undiksha</p>
        <p class="footer-credit">
          Made with <span class="heart">❤️</span> by 
          <a href="#" class="footer-credit-link">GanaDev Com X Web Dev HMJ TI</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const handleFooterImageError = (event) => {
  event.target.src = 'https://placehold.co/100x100/FFFFFF/000000?text=Logo';
};
</script>

<style scoped>
.app-footer {
  background: var(--color-pure-black);
  color: var(--color-pure-white);
  padding: var(--space-16) 0 var(--space-8);
  border-top: var(--border-width-thick) solid var(--color-neon-yellow);
}

.footer-main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-12);
  margin-bottom: var(--space-12);
  padding-bottom: var(--space-12);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.footer-logos {
  display: flex;
  gap: var(--space-4);
  align-items: center;
}

.footer-logo img {
  height: 60px;
  width: auto;
  transition: all var(--transition-base);
  filter: brightness(0) invert(1);
}

.footer-logo:hover img {
  transform: scale(1.1);
  filter: brightness(0) invert(1) drop-shadow(0 0 10px var(--color-neon-yellow));
}

.footer-social {
  display: flex;
  gap: var(--space-4);
}

.social-link {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-pure-white);
  color: var(--color-pure-black);
  border: var(--border-width-thin) solid var(--color-pure-white);
  transition: all var(--transition-base);
}

.social-link:hover {
  background: var(--color-neon-yellow);
  transform: translate(-4px, -4px);
  box-shadow: 4px 4px 0px var(--color-pure-white);
}

.social-icon {
  font-size: var(--text-2xl);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.footer-title {
  font-size: var(--text-xl);
  font-weight: var(--weight-black);
  color: var(--color-neon-yellow);
  text-transform: uppercase;
  margin-bottom: var(--space-2);
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer-links a {
  color: var(--color-pure-white);
  font-size: var(--text-base);
  transition: all var(--transition-fast);
  display: inline-block;
}

.footer-links a:hover {
  color: var(--color-neon-yellow);
  transform: translateX(4px);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.contact-info p {
  font-size: var(--text-base);
  line-height: 1.6;
  opacity: 0.9;
}

.contact-info a {
  color: var(--color-neon-yellow);
  text-decoration: underline;
}

.contact-info a:hover {
  color: var(--color-pure-white);
}

.footer-bottom {
  text-align: center;
  padding-top: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer-copyright {
  font-size: var(--text-base);
  font-weight: var(--weight-semibold);
  opacity: 0.8;
}

.footer-credit {
  font-size: var(--text-sm);
  opacity: 0.7;
}

.heart {
  color: var(--color-hot-pink);
  animation: pulse 2s ease-in-out infinite;
}

.footer-credit-link {
  color: var(--color-neon-yellow);
  font-weight: var(--weight-bold);
}

.footer-credit-link:hover {
  color: var(--color-pure-white);
}

@media (max-width: 768px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .footer-bottom {
    font-size: var(--text-sm);
  }
}
</style>
