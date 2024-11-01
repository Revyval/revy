<script setup>
import EnteringText from "@/components/animations/EnteringText.vue";
import Ropeman from "@/assets/png/ropeman.png";
import {ref, onMounted} from 'vue';

const isVisible = ref(false);
const animatedDiv = ref(null);
const randomXPosition = ref('50%');

function generateRandomPosition() {
  const randomPercentage = Math.floor(Math.random() * 85) + 7.5;
  randomXPosition.value = `${randomPercentage}%`;
}

onMounted(() => {
  isVisible.value = true;
});
</script>

<template>
  <div ref="animatedDiv">
    <transition name="fade-slide">
      <div v-show="isVisible">
        <div class="content" @mouseenter="generateRandomPosition">
          <EnteringText class="text">
            <slot></slot>
          </EnteringText>
          <img :src="Ropeman" alt="Ropeman" class="ropeman" :style="{ left: randomXPosition }"/>
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
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
  border: 2px solid black;
}

.content:hover {
  background-color: var(--background-lighter);
}

.text {
  white-space: nowrap;
}

.ropeman {
  position: absolute;
  top: -100px;
  transform-origin: top center;
  transition: top 0.5s ease, opacity 0.5s ease;
  max-width: 90px;
  max-height: 90px;
  opacity: 0;
  z-index: -1;
}

.content:hover .ropeman {
  top: 100%;
  opacity: 1;
  animation: swing 1s ease-in-out infinite alternate;
}

.content:not(:hover) .ropeman {
  top: -15px;
  opacity: 0;
  left: 50%;
}

@keyframes swing {
  0% {
    transform: rotate(-1.5deg);
  }
  100% {
    transform: rotate(1.5deg);
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