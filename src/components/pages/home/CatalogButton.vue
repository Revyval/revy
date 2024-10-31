<script setup>
import { useRouter } from 'vue-router';
import EnteringText from "@/components/animations/EnteringText.vue";
import CatalogButtonWrapper from "@/components/animations/CatalogButtonWrapper.vue";

const router = useRouter();

function goToCatalog() {
  router.push('/catalog');
}
</script>

<template>
  <CatalogButtonWrapper class="button-wrapper" @click="goToCatalog">
    <h3 class="catalog">Catalog</h3>
  </CatalogButtonWrapper>
</template>

<style scoped>
.button-wrapper {
  cursor: pointer;
}

.button-wrapper:active {
  transform: scale(0.95);
}

.catalog {
  text-align: center;
  font-size: 1.5rem;
  color: var(--color-text);
}
</style>