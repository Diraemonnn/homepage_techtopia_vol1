import { ref, computed } from 'vue';

/**
 * Composable for timeline functionality
 * @param {Array} stages - Array of timeline stages
 * @returns {Object} Timeline state and methods
 */
export function useTimeline(stages) {
    const currentDate = ref(new Date());
    const selectedStage = ref(null);

    // Determine stage status based on current date
    const getStageStatus = (stage) => {
        const now = currentDate.value;
        const start = new Date(stage.startDate);
        const end = new Date(stage.endDate);

        if (now < start) return 'upcoming';
        if (now > end) return 'completed';
        return 'active';
    };

    // Enhanced stages with computed status
    const enhancedStages = computed(() => {
        return stages.map(stage => ({
            ...stage,
            computedStatus: getStageStatus(stage),
            progress: calculateProgress(stage)
        }));
    });

    // Calculate progress percentage for a stage
    const calculateProgress = (stage) => {
        const now = currentDate.value;
        const start = new Date(stage.startDate);
        const end = new Date(stage.endDate);

        if (now < start) return 0;
        if (now > end) return 100;

        const total = end - start;
        const elapsed = now - start;
        return Math.round((elapsed / total) * 100);
    };

    // Get current active stage
    const activeStage = computed(() => {
        return enhancedStages.value.find(stage => stage.computedStatus === 'active') || null;
    });

    // Get next upcoming stage
    const nextStage = computed(() => {
        return enhancedStages.value.find(stage => stage.computedStatus === 'upcoming') || null;
    });

    // Overall timeline progress
    const overallProgress = computed(() => {
        const completedStages = enhancedStages.value.filter(s => s.computedStatus === 'completed').length;
        const totalStages = enhancedStages.value.length;
        return Math.round((completedStages / totalStages) * 100);
    });

    // Select a stage
    const selectStage = (stage) => {
        selectedStage.value = stage;
    };

    // Clear selection
    const clearSelection = () => {
        selectedStage.value = null;
    };

    // Format date for display
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('id-ID', options);
    };

    // Get date range string
    const getDateRange = (stage) => {
        if (stage.startDate === stage.endDate) {
            return formatDate(stage.startDate);
        }
        return `${formatDate(stage.startDate)} - ${formatDate(stage.endDate)}`;
    };

    // Get days remaining for a stage
    const getDaysRemaining = (stage) => {
        const now = currentDate.value;
        const end = new Date(stage.endDate);
        const diff = end - now;

        if (diff <= 0) return 0;

        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    };

    return {
        enhancedStages,
        activeStage,
        nextStage,
        overallProgress,
        selectedStage,
        selectStage,
        clearSelection,
        formatDate,
        getDateRange,
        getDaysRemaining,
        getStageStatus
    };
}
