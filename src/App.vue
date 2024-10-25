<!-- src/App.vue -->
<template>
  <LoadingSpinner v-if="loading" />
  <div v-else class="app-container">
    <router-view />
    <MainFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import LoadingSpinner from './components/LoadingSpinner.vue';
import MainFooter from "@/components/pages/home/MainFooter.vue";

const loading = ref(true);

onMounted(() => {
  window.addEventListener('load', () => {
    loading.value = false;
  });
});
</script>

<style>
/* Estilo de layout general */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que el contenedor tenga al menos la altura de la pantalla */
}

.router-view {
  flex: 1; /* Expande el contenido principal para empujar el footer hacia abajo */
}
</style>
