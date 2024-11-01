<script setup>
import { ref, onMounted } from 'vue';
import MainHeader from "@/components/pages/home/MainHeader.vue";
import clothesData from '/src/clothes.json';
import EnteringText from "@/components/animations/EnteringText.vue";
import CatalogItem from "@/components/pages/catalog/CatalogItem.vue";

const clothes = ref([]);

onMounted(() => {
  clothes.value = clothesData;
});
</script>

<template>
  <MainHeader/>
  <EnteringText class="title">Catalogue</EnteringText>
  <div class="catalog">
    <div class="grid">
      <CatalogItem v-for="item in clothes" :key="item.title" :item="item" />
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  margin-top: 80px;
  font-size: 2.4rem;
}

.catalog {
  padding: 20px;
  margin-top: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
</style>