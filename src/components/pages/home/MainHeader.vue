<script setup>
import RevyvalLogo from "@/assets/svg/revyval_logo.svg?component";
import RevyvalTitle from "@/assets/svg/revyval.svg?component";
import { onMounted, onUnmounted, ref, computed } from "vue";
import LanguageSelector from "@/components/pages/home/LanguageSelector.vue";

const isAtTop = ref(true);
const isMounted = ref(false);

const handleScroll = () => {
  isAtTop.value = window.scrollY < 100;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
  isMounted.value = true; // Trigger the transition
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const hasBackground = computed(() => !isAtTop.value);
</script>

<template>
  <transition name="header-transition">
    <header v-if="isMounted" :class="{ 'no-background': isAtTop, 'with-background': !isAtTop }">
      <transition name="background-transition">
        <div v-show="true" :class="{ 'background-visible': !isAtTop, 'background-hidden': isAtTop }" class="background"></div>
      </transition>
      <router-link to="/home" class="logo-link">
        <RevyvalLogo class="logo"/>
      </router-link>
      <RevyvalTitle class="title"/>
      <LanguageSelector :put-secondary="hasBackground" secondary-color="var(--pantone-black)" class="language-selector"/>
    </header>
  </transition>
</template>

<style scoped>
@import url(https://fonts.bunny.net/css?family=sora:500);

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 140px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-soft);
  z-index: -1;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: transform 0.3s ease;
}

.background-visible {
  transform: translateY(0);
}

.background-hidden {
  transform: translateY(-100%);
}

.title {
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -50%);
  max-width: 200%;
  max-height: 200%;
}

.language-selector {
  margin-right: 20px;

}

.header-transition-enter-active,
.header-transition-leave-active {
  transition: transform 0.3s ease;
}

.header-transition-enter-from,
.header-transition-leave-to {
  transform: translateY(-100%);
}

.header-transition-enter-to,
.header-transition-leave-from {
  transform: translateY(0);
}

@keyframes scale-up {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

.logo {
  width: 140px;
  height: 140px;
  max-width: 100%;
  max-height: 100%;
  color: var(--color-text);
  cursor: pointer;
  transition: color 0.1s ease, transform 0.3s ease;
  margin-left: 20px;
  will-change: transform;
}

.logo:hover {
  color: var(--background-lighter);
  transform: scale(1.05);
}

@media (max-width: 600px) {
  .logo {
    margin-left: 4px;
    width: 120px;
    height: 120px;
  }
}
</style>