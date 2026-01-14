import { ref, computed, onMounted, onUnmounted } from 'vue';

/**
 * Composable for countdown timer functionality
 * @param {string} targetDate - Target date in ISO format (YYYY-MM-DD)
 * @returns {Object} Countdown state and methods
 */
export function useCountdown(targetDate) {
    const now = ref(new Date());
    const target = new Date(targetDate);
    let intervalId = null;

    // Calculate time remaining
    const timeRemaining = computed(() => {
        const diff = target - now.value;

        if (diff <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                total: 0,
                isExpired: true
            };
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
            total: diff,
            isExpired: false
        };
    });

    // Urgency level based on time remaining
    const urgencyLevel = computed(() => {
        const { days, total } = timeRemaining.value;

        if (total <= 0) return 'expired';
        if (days < 1) return 'critical'; // Less than 24 hours
        if (days < 3) return 'high';     // Less than 3 days
        if (days < 7) return 'medium';   // Less than 7 days
        return 'low';                     // More than 7 days
    });

    // Urgency color
    const urgencyColor = computed(() => {
        switch (urgencyLevel.value) {
            case 'critical':
                return '#FF006E'; // Hot pink
            case 'high':
                return '#FF6B00'; // Orange
            case 'medium':
                return '#FFFF00'; // Yellow
            case 'low':
                return '#00FF66'; // Green
            default:
                return '#666666'; // Gray
        }
    });

    // Urgency message
    const urgencyMessage = computed(() => {
        switch (urgencyLevel.value) {
            case 'critical':
                return 'Segera! Pendaftaran akan ditutup dalam hitungan jam!';
            case 'high':
                return 'Buruan! Waktu pendaftaran hampir habis!';
            case 'medium':
                return 'Jangan sampai ketinggalan! Daftar sekarang!';
            case 'low':
                return 'Masih ada waktu untuk mendaftar';
            default:
                return 'Pendaftaran telah ditutup';
        }
    });

    // Format number with leading zero
    const formatNumber = (num) => {
        return num.toString().padStart(2, '0');
    };

    // Start countdown
    const startCountdown = () => {
        intervalId = setInterval(() => {
            now.value = new Date();
        }, 1000);
    };

    // Stop countdown
    const stopCountdown = () => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    };

    // Lifecycle hooks
    onMounted(() => {
        startCountdown();
    });

    onUnmounted(() => {
        stopCountdown();
    });

    return {
        timeRemaining,
        urgencyLevel,
        urgencyColor,
        urgencyMessage,
        formatNumber,
        startCountdown,
        stopCountdown
    };
}
