<script setup>
import { useRouter } from 'vue-router';
import MainHeader from "@/components/pages/home/MainHeader.vue";
import Slogan from "@/components/pages/home/Slogan.vue";
import Introduction from "@/components/pages/home/Introduction.vue";
import ClothingCarrousel from "@/components/pages/home/ClothingCarrousel.vue";
import EnteringText from "@/components/animations/EnteringText.vue";
import MainFooter from "@/components/pages/home/MainFooter.vue";

const router = useRouter();

function goToCatalog() {
  router.push('/catalog');
}
</script>

<template>
  <MainHeader/>
  <Introduction/>

  <Slogan/>
  <div class="button-container">
    <button class="button" @click="goToCatalog">Catalog</button>
  </div>

  <ClothingCarrousel/>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: 30px;
}

.button {
  background-color: var(--background-soft);
  color: var(--color-text);
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease, transform 0.1s ease;
}

.button:hover {
  background-color: var(--background-lighter);
}
.button:active {
  transform: scale(0.95);
}
</style>
