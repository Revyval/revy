<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  images: Array
});

const mainImage = ref(props.images[0]);
const loadedImages = ref(new Set());
const isLoading = ref(true);
const videoEnded = ref(false);

function selectImage(image) {
  mainImage.value = image;
}

function handleImageLoad(image) {
  loadedImages.value.add(image);
  if (loadedImages.value.size === props.images.length && videoEnded.value) {
    isLoading.value = false;
  }
}

function handleVideoEnded() {
  videoEnded.value = true;
  if (loadedImages.value.size === props.images.length) {
    isLoading.value = false;
  }
}

// Preload images while the video is playing
onMounted(() => {
  props.images.forEach(image => {
    const img = new Image();
    img.src = `/clothes/images/${image}`;
    img.onload = () => handleImageLoad(image);
  });
});
</script>

<template>
  <div class="image-selector">
    <!-- Thumbnails on the left -->
    <div class="thumbnail-images" v-if="!isLoading">
      <div
          v-for="(image, index) in images"
          :key="index"
          class="thumbnail-container"
      >
        <img
            :src="`/clothes/images/${image}`"
            :alt="`Thumbnail ${index + 1}`"
            class="thumbnail-image"
            :class="{ selected: mainImage === image }"
            @mouseover="selectImage(image)"
        />
      </div>
    </div>
    <div class="main-container">
      <!-- Loading animation, ensures video plays fully before switching to images -->
      <video
          v-if="isLoading"
          class="loading-animation"
          autoplay
          muted
          playsinline
          @ended="handleVideoEnded"
      >
        <source src="/loading.webm" type="video/webm">
        Your browser does not support the video tag.
      </video>
      <!-- Placeholder to maintain space while loading -->
      <div v-if="isLoading" class="placeholder"></div>
      <!-- Main image, hidden while loading animation plays -->
      <img
          v-if="!isLoading"
          :src="`/clothes/images/${mainImage}`"
          :alt="mainImage"
          class="main-image"
      />
    </div>
  </div>
</template>


<style scoped>
.image-selector {
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  overflow: hidden;
  max-width: 43%;
  gap: 20px;
}

.thumbnail-images {
  display: flex;
  flex-direction: column; /* Stack thumbnails vertically */
  flex-shrink: 0;
  margin-right: 20px; /* Space between thumbnails and main image */
}

.main-container {
  position: relative;
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-image, .loading-animation, .placeholder {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.loading-animation, .placeholder {
  width: 70vw;
}

.placeholder {
  background-color: #f0f0f0;
}

.thumbnail-container {
  position: relative;
  width: 80px;
  margin-bottom: 10px;
}

.thumbnail-image {
  width: 80px;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
}

.thumbnail-image.selected {
  border: 2px solid #000;
}

.loading-animation {
  object-fit: contain;
  border-radius: 10px;
  width: 100%; /* Ensure it takes the full width */
  height: auto; /* Keep height responsive */
}

/* Mobile responsive styles */
@media (max-width: 756px) {
  .image-selector {
    flex-direction: column;
    max-width: 100%;
    align-items: center;
  }

  .main-container {
    width: 100%;
    margin-bottom: 20px;
  }

  .thumbnail-images {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .thumbnail-container {
    margin-bottom: 0;
  }
}
</style>
