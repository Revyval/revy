<script setup>
import { ref, onMounted } from 'vue';
import MainHeader from "@/components/pages/home/MainHeader.vue";
import clothesData from '@/assets/clothes/clothes.json';

const clothes = ref([]);

onMounted(() => {
  clothes.value = clothesData;
});
</script>

<template>
  <MainHeader/>
  <div class="catalog">
    <div class="grid">
      <div v-for="item in clothes" :key="item.title" class="grid-item">
        <img :src="`@/assets/clothes/images/${item.image}`" :alt="item.title" class="item-image"/>
        <h3 class="item-title">{{ item.title }}</h3>
        <p class="item-description">{{ item.description }}</p>
        <p class="item-price">${{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog {
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.grid-item {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}

.item-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.item-title {
  font-size: 1.2rem;
  margin: 10px 0;
}

.item-description {
  font-size: 1rem;
  color: #666;
}

.item-price {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px;
}
</style>