<script setup>
import EnteringText from "@/components/animations/EnteringText.vue";
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(false);
const animatedDiv = ref(null);
let observer;

onMounted(() => {
  if (animatedDiv.value) {
    observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.3, // Trigger when 30% of the element is visible
    });

    observer.observe(animatedDiv.value);
  }
});

onBeforeUnmount(() => {
  if (observer && animatedDiv.value) {
    observer.unobserve(animatedDiv.value);
  }
});

function handleIntersection(entries) {
  entries.forEach((entry) => {
    isVisible.value = entry.isIntersecting;
    console.log('Element visibility:', isVisible.value);
  });
}
</script>

<template>
  <div ref="animatedDiv" class="animated-div-wrapper">
    <transition name="fade-slide">
      <div v-show="isVisible" class="wrapper">
        <EnteringText>
          <slot></slot>
        </EnteringText>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.animated-div-wrapper {
  min-height: 100px;
  min-width: 100px;
}

.wrapper {
  background-color: var(--background-soft);
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

}


.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>