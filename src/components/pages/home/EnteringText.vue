// src/components/pages/home/EnteringText.vue
<script setup>
import { ref, onMounted, onUnmounted, defineProps, defineEmits } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: 'text-transition'
  },
  mode: {
    type: String,
    default: ''
  }
});

const emit = defineEmits([
  'before-enter', 'enter', 'after-enter', 'enter-cancelled',
  'before-leave', 'leave', 'after-leave', 'leave-cancelled'
]);

const show = ref(false);
const initialLoad = ref(true);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (initialLoad.value) {
        show.value = entry.isIntersecting;
        initialLoad.value = false;
      } else {
        show.value = entry.isIntersecting;
      }
    });
  });

  const element = document.querySelector('.transition-element');
  if (element) {
    observer.observe(element);
  }

  onUnmounted(() => {
    if (element) {
      observer.unobserve(element);
    }
  });
});
</script>

<template>
  <Transition
      :name="name"
      :mode="mode"
      @before-enter="emit('before-enter', $event)"
      @enter="emit('enter', $event)"
      @after-enter="emit('after-enter', $event)"
      @enter-cancelled="emit('enter-cancelled', $event)"
      @before-leave="emit('before-leave', $event)"
      @leave="emit('leave', $event)"
      @after-leave="emit('after-leave', $event)"
      @leave-cancelled="emit('leave-cancelled', $event)"
  >
    <div v-if="show" class="transition-element">
      <slot />
    </div>
  </Transition>
</template>

<style scoped>
.text-transition-enter-active {
  transition: all 0.3s ease-out;
}

.text-transition-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.text-transition-enter-from,
.text-transition-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>