<script setup>
import { useRouter } from 'vue-router';
import MainHeader from "@/components/pages/home/MainHeader.vue";
import CatalogButton from "@/components/pages/home/CatalogButton.vue";
import Introduction from "@/components/pages/home/Introduction.vue";
import ClothingCarrousel from "@/components/pages/home/ClothingCarousel.vue";
import EnteringText from "@/components/animations/EnteringText.vue";
import MainFooter from "@/components/pages/home/MainFooter.vue";
import MovingPhoto from "@/components/pages/home/MovingPhoto.vue";

const router = useRouter();

function goToCatalog() {
  router.push('/catalog');
}
</script>

<template>
  <MainHeader/>
  <MovingPhoto/>

  <!-- Main content container -->
  <main>
    <div class="hero-spacer"></div>
    <div class="content-container">
      <Introduction class="introduction"/>

      <CatalogButton class="catalog-button"/>
      <ClothingCarrousel/>
    </div>
  </main>
</template>

<style scoped>
.hero-spacer {
  height: 75vh;
  width: 100%;
}

.content-container {
  position: relative;
  z-index: 1;
  background-color: var(--color-background);
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 40px 140px;
}

.introduction {
  margin-bottom: 140px;
}

.catalog-button {
  margin-bottom: 130px;
  margin-top: 90px;
}

@media (max-width: 768px) {
  .content-container {
    padding: 40px 20px;
  }
}
</style>