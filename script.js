// Menunggu hingga seluruh konten halaman dimuat sebelum menjalankan skrip
document.addEventListener("DOMContentLoaded", () => {
    // Inisialisasi semua fungsionalitas yang diperlukan
    initMobileMenu();
    initFAQ();
});

/**
 * Fungsi untuk mengaktifkan menu navigasi mobile.
 * Menambahkan event listener pada tombol toggle untuk membuka/menutup menu.
 */
function initMobileMenu() {
    const mobileToggle = document.getElementById("mobile-toggle");
    const navList = document.querySelector(".nav-list");

    // Pastikan elemennya ada sebelum menambahkan event listener
    if (mobileToggle && navList) {
        mobileToggle.addEventListener("click", () => {
            // Toggle class 'active' pada tombol dan menu navigasi
            mobileToggle.classList.toggle("active");
            navList.classList.toggle("active");
        });
    }
}

/**
 * Fungsi untuk mengaktifkan accordion pada bagian FAQ.
 * Ketika sebuah pertanyaan diklik, penjelasan akan muncul.
 * Hanya satu penjelasan yang bisa terbuka dalam satu waktu.
 */
function initFAQ() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        if (question) {
            question.addEventListener("click", () => {
                // Cek apakah item yang diklik sudah aktif
                const wasActive = item.classList.contains("active");

                // Tutup semua item FAQ lainnya
                faqItems.forEach((otherItem) => {
                    otherItem.classList.remove("active");
                });

                // Jika item yang diklik sebelumnya tidak aktif, maka aktifkan
                if (!wasActive) {
                    item.classList.add("active");
                }
                // Jika sudah aktif, klik tadi akan membuatnya tertutup (karena semua class 'active' sudah dihapus)
            });
        }
    });
}
