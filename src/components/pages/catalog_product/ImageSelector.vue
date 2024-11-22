<script setup>
import {ref, onMounted} from 'vue';

const props = defineProps({
  images: Array
});

const mainImage = ref(props.images[0]);
const loadedImages = ref(new Set());
const isLoading = ref(true);

function selectImage(image) {
  mainImage.value = image;
}

function handleImageLoad(image) {
  loadedImages.value.add(image);
  if (loadedImages.value.size === props.images.length) {
    setTimeout(() => {
      isLoading.value = false;
    }, 2000); // Ensure the loading animation is shown for at least 1 second
  }
}

onMounted(() => {
  props.images.forEach(image => {
    const img = new Image();
    img.src = `https://revyval.store/images/${image}`;
    img.onload = () => handleImageLoad(image);
    img.onerror = () => handleImageLoad(image); // Handle error case
  });

  // Ensure the loading animation is shown for at least 1 second
  setTimeout(() => {
    if (loadedImages.value.size === props.images.length) {
      isLoading.value = false;
    }
  }, 2000);
});
</script>

<template>
  <div class="image-selector-wrapper">
    <div class="image-selector">
      <!-- Thumbnails on the left -->
      <div class="thumbnail-images">
        <div
            v-for="image in images"
            :key="image"
            class="thumbnail-container"
        >
          <img
              :src="`https://revyval.store/images/${image}`"
              :class="['thumbnail-image', { selected: mainImage === image }]"
              @click="selectImage(image)"
              :alt="image"
          />
        </div>
      </div>

      <div class="main-container">
        <!-- Loading animation wrapper -->
        <div class="loading-wrapper" v-if="isLoading">
          <img
              src="/loading.png"
              class="loading-animation"
              alt="Loading..."
          />
        </div>

        <!-- Main image, hidden while loading animation plays -->
        <img
            v-show="!isLoading"
            :src="`https://revyval.store/images/${mainImage}`"
            class="main-image"
            :alt="mainImage"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

.image-selector-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.image-selector {
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
  gap: 20px;
  box-sizing: border-box;
}

.thumbnail-images {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 10px;
}

.main-container {
  flex-grow: 1;
  min-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-animation {
  width: 50%;
  max-width: 300px;
  height: auto;
}

.main-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: contain;
}

.thumbnail-container {
  width: 80px;
}

.thumbnail-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
}

.thumbnail-image.selected {
  border: 2px solid #000;
}

@media (max-width: 756px) {
  .main-image {
    width: 100vw;
  }

  .image-selector {
    flex-direction: column;
    align-items: center;
  }

  .main-container {
    width: 100%;
    margin-bottom: 20px;
    justify-content: center;
  }

  .thumbnail-images {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    order: 1;
    margin-top: 20px;
  }

  .loading-animation {
    width: 70%;
  }
}
</style>