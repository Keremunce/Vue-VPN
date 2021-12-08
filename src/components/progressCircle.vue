<template>

<CircleProgress
    :percent="76"
    :viewport="true"
    :show-percent="true"
    :is-gradient="true"
/>
</template>

<script>
import { ref, onMounted } from "vue";
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";
export default {
name: "App",
components: {
CircleProgress: CircleProgress,
},
setup() {
const percent = ref(75);

onMounted(() => {
    setInterval(() => {
    if (percent.value === 25) {
        percent.value = 75;
    } else {
        percent.value = 25;
    }
    }, 100000);
});

return {
    percent,
};
},
};
</script>
