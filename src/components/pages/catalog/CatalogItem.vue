<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import IncreasingNumber from "@/components/animations/IncreasingNumber.vue";

const props = defineProps({
  item: Object
});

const router = useRouter();

function goToProduct() {
  console.log(props.item.id);
  router.push(`/catalogue/${props.item.id}`);
}
</script>

<template>
  <div class="grid-item" @click="goToProduct">
    <img :src="`https://revyval.store/images/${props.item.images[0]}`" :alt="props.item.title" class="item-image"/>
    <h3 class="item-title">{{ item.title }}</h3>
    <div class="item-price-container">
      <IncreasingNumber :number="item.price" :decimalPlaces="2" class="item-price"/>
      €
    </div>
  </div>
</template>

<style scoped>
.grid-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  height: 100%;
  cursor: pointer;
}

.item-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.item-title {
  font-size: 1.2rem;
  margin: 10px 0;
  text-align: center;
}

.item-price-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-top: auto;
}

.item-price {
  margin-right: 5px;
}
</style>