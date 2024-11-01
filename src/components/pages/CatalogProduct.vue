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
  router.push('/catalogue');
}
</script>

<template>
  <MainHeader/>
  <div v-if="product" class="product-details">
    <div class="back-to-catalog" @click="goToCatalog">
      <ArrowLeft class="back-arrow"/>
      <h1>Catalogue</h1>
    </div>
    <div class="product-content">
      <ImageSelector class="image-selector" :images="product.images"/>
      <div class="product-info">
        <EnteringText class="product-title">{{ product.title }}</EnteringText>

        <p class="product-description">{{ product.description }}</p>

        <hr class="separator">

        <p v-if="product.size" class="product-size"><strong class="label">Size:</strong> {{ product.size }}</p>
        <p v-if="product.fabric" class="product-fabric"><strong class="label">Fabric:</strong> {{ product.fabric }}</p>
        <div class="product-measurements">
          <p v-if="product.measurements"><strong class="label">Measurements:</strong> {{ product.measurements }}</p>
          <MeasurementsInfo :item="product"/>
        </div>

        <div class="product-price-container">
          <IncreasingNumber :number="product.price" class="product-price"/>
          €
        </div>

        <div class="model-height">
          <img src="/santa_guasoneada.png" alt="Model" class="model-image"/>
          <p>This model is 1'80m tall</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-details {
  padding: 20px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}

.back-to-catalog {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.product-title {
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.back-arrow {
  height: 100%;
  margin-right: 8px;
}

.product-content {
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  height: 100%;
}

.product-info {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  height: 100%;

}

.product-description, .product-fabric, .product-measurements, .product-size {
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
}

.product-description {
  text-align: justify;
}

.product-price-container {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  flex-grow: 1;
}

.product-price {
  margin-right: 5px;
}

.product-measurements {
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 10px;
}

.product-measurements p {
  margin-right: 4px;
}

.separator {
  margin: 20px auto;
  border: 0;
  border-top: 4px solid #ccc;
  border-radius: 4px;
  width: 98%;
}

.label {
  color: black;
}

.model-height {
  display: flex;
  align-items: center;
  margin-top: 65px;
}

.model-image {
  width: 25px;
  height: auto;
  border-radius: 5px;
}

.model-height p {
  align-self: flex-end;
}

@media (max-width: 600px) {
  .product-title {
    font-size: 1.8rem;
  }

  .product-description, .product-fabric, .product-measurements, .product-size {
    font-size: 0.8rem;
  }

  .product-price-container {
    font-size: 1rem;
  }

  .model-height p {
    font-size: 0.6rem;
  }
}
</style>