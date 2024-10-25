<script setup>
import EnteringText from "@/components/animations/EnteringText.vue";
import Ropeman from "@/assets/ropeman.png";
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
  });
}
</script>

<template>
  <div ref="animatedDiv" class="animated-div-wrapper">
    <transition name="fade-slide">
      <div v-show="isVisible" class="wrapper">
        <div class="content">
          <EnteringText class="text">
            <slot></slot>
          </EnteringText>
          <img src="@/assets/ropeman.png" alt="Ropeman" class="ropeman"/>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.content {
  background-color: var(--background-soft);
  padding: 10px;
  width: 30%;
  margin: 0 auto;
  border-radius: 8px;
  position: relative;
}

.text {
  white-space: nowrap;
}

.ropeman {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: top center;
  transition: top 0.5s ease, opacity 0.5s ease;
  max-width: 100px;
  max-height: 100px;
  opacity: 0;
  z-index: -1;
}

.content:hover .ropeman {
  top: 100%;
  opacity: 1;
  animation: swing 1s ease-in-out infinite alternate; /* Add swing animation */
}

@keyframes swing {
  0% {
    transform: translateX(-50%) rotate(-1.5deg); /* Tilt left */
  }
  100% {
    transform: translateX(-50%) rotate(1.5deg); /* Tilt right */
  }
}

.content:not(:hover) .ropeman {
  top: -15px;
  animation: fadeOut 0.5s forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
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

@media (max-width: 1050px) {
  .content {
    width: 90%;
  }
}
</style>