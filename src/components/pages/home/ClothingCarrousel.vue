<template>
  <div class="carousel" @mouseover="stopScroll" @mouseleave="startScroll" @wheel="onWheel">
    <div class="carousel-track" :style="{ transform: `translateX(${-scrollPosition}px)` }">
      <div v-for="(item, index) in displayItems" :key="index" class="carousel-item">
        <img :src="item.image" :alt="item.name" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted, computed} from 'vue';

const clothingItems = ref([
  {name: 'Item 1', image: 'path/to/image1.jpg'},
  {name: 'Item 2', image: 'path/to/image2.jpg'},
  {name: 'Item 3', image: 'path/to/image3.jpg'},
  {name: 'Item 4', image: 'path/to/image4.jpg'},
  {name: 'Item 5', image: 'path/to/image5.jpg'},
  {name: 'Item 6', image: 'path/to/image6.jpg'},
]);

const itemWidth = 220; // 200px width + 20px margin
const totalWidth = computed(() => clothingItems.value.length * itemWidth);

const displayItems = computed(() => [
  ...clothingItems.value,
  ...clothingItems.value,
  ...clothingItems.value
]);

const scrollPosition = ref(0);
let scrollInterval = null;

const startScroll = () => {
  scrollInterval = setInterval(() => {
    scrollPosition.value += 2;
    if (scrollPosition.value >= totalWidth.value) {
      scrollPosition.value -= totalWidth.value;
    }
  }, 50);
};

const stopScroll = () => {
  clearInterval(scrollInterval);
};

const onWheel = (event) => {
  event.preventDefault();
  scrollPosition.value += event.deltaY;

  if (scrollPosition.value < 0) {
    scrollPosition.value += totalWidth.value;
  } else if (scrollPosition.value >= totalWidth.value) {
    scrollPosition.value -= totalWidth.value;
  }
};

onMounted(() => {
  startScroll();
});

onUnmounted(() => {
  stopScroll();
});
</script>

<style scoped>
.carousel {
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.1s linear;
}

.carousel-item {
  min-width: 200px;
  margin: 0 10px;
  text-align: center;
}

.carousel-item img {
  width: 100%;
  height: auto;
}
</style>