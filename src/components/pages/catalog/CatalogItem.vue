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
    <div v-if="item.soldOut" class="out-of-stock">
      <p>Sold out</p>
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
  position: relative; /* Ensure the parent is relative */
  overflow: hidden; /* Add overflow hidden to the parent */
}

.out-of-stock {
  background: rgba(255, 0, 0, 0.5);
  color: white;
  padding: 5px 10px;
  font-size: 1rem;
  font-weight: bold;
  z-index: 2;
  position: absolute;
  top: 40px;
  left: 40px;
  width: 100%;
  transform: translate(-50%, -50%) rotate(-45deg); /* Center and rotate */
  align-content: center;
  border: 2px solid white;
  height: 60px;
}

.out-of-stock p {
  transform: scaleY(2.5);
  font-stretch: condensed;
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