<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import IncreasingNumber from "@/components/animations/IncreasingNumber.vue";
import MeasurementsInfo from "@/components/pages/catalog/MeasurementsInfo.vue";
import clothes from '@/clothes.json';
import MainHeader from "@/components/pages/home/MainHeader.vue";
import EnteringText from "@/components/animations/EnteringText.vue";
import ImageSelector from "@/components/pages/catalog_product/ImageSelector.vue";

const route = useRoute();
const router = useRouter();
const product = ref(null);

onMounted(() => {
  const productId = route.params.id;
  product.value = clothes.find(item => item.id === productId);
});

function goToCatalog() {
  router.push('/catalog');
}
</script>

<template>
  <MainHeader/>
  <div v-if="product" class="product-details">
    <div class="back-to-catalog" @click="goToCatalog">
      <ArrowLeft class="back-arrow"/>
      <h1>Catalog</h1>
    </div>
    <div class="product-content">
      <ImageSelector class="image-selector" :images="product.images"/>
      <div class="product-info">
        <div class="product-header">
          <EnteringText class="product-title">{{ product.title }}</EnteringText>
          <MeasurementsInfo :item="product"/>
        </div>
        <p class="product-description">{{ product.description }}</p>
        <p v-if="product.fabric" class="product-fabric">Fabric: {{ product.fabric }}</p>
        <p v-if="product.measurements" class="product-measurements">Measurements: {{ product.measurements }}</p>
        <div class="product-price-container">
          <IncreasingNumber :number="product.price" class="product-price"/>
          €
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-details {
  padding: 20px;
  margin-top: 80px;
}

.back-to-catalog {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.product-title {
  font-size: 2.4rem;
}

.back-arrow {
  height: 100%;
  margin-right: 8px;
}

.product-content {
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
}

.product-info {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
}

.product-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.product-description, .product-fabric, .product-measurements {
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
}

.product-price-container {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin-top: 20px;
}

.product-price {
  margin-right: 5px;
}
</style>