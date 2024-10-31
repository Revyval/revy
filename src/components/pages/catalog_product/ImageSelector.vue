<script setup>
import { ref } from 'vue';

const props = defineProps({
  images: Array
});

const mainImage = ref(props.images[0]);

function selectImage(image) {
  mainImage.value = image;
}
</script>

<template>
  <div class="image-selector">
    <img :src="`/clothes/images/${mainImage}`" :alt="mainImage" class="main-image"/>
    <div class="thumbnail-images">
      <img
          v-for="(image, index) in images"
          :key="index"
          :src="`/clothes/images/${image}`"
          :alt="`Thumbnail ${index + 1}`"
          class="thumbnail-image"
          @click="selectImage(image)"
      />
    </div>
  </div>
</template>

<style scoped>
.image-selector {
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  overflow: hidden; /* Prevents extra space */
  max-width: 50%;
}

.main-image {
  width: 50%;
  flex-grow: 1; /* Ensures it only takes needed width */
  height: auto;
  border-radius: 10px;
}

.thumbnail-images {
  display: flex;
  flex-direction: column;
  flex-shrink: 0; /* Prevents it from taking extra space */
  margin-left: 20px;
}

.thumbnail-image {
  width: 100px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
</style>
