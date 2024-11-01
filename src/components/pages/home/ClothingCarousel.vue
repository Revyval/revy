<template>
  <div>
    <div class="carousel" @mouseover="stopScroll" @mouseleave="startScroll">
      <div class="carousel-track" :style="{ transform: `translateX(${-scrollPosition}px)` }">
        <div
            v-for="(item, index) in displayItemsTop"
            :key="index"
            class="carousel-item"
            @click="navigateToCatalog(item.id)"
        >
          <img :src="item.image" :alt="item.title" />
        </div>
      </div>
    </div>
    <div class="carousel" @mouseover="stopScrollReverse" @mouseleave="startScrollReverse">
      <div class="carousel-track" :style="{ transform: `translateX(${-scrollPositionReverse}px)` }">
        <div
            v-for="(item, index) in displayItemsBottom"
            :key="index"
            class="carousel-item"
            @click="navigateToCatalog(item.id)"
        >
          <img :src="item.image" :alt="item.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import clothes from '@/clothes.json';

const router = useRouter();
const clothingItems = ref([]);

onMounted(() => {
  clothingItems.value = clothes.map(item => {
    const image = item.images.find(img => img.endsWith('1.webp'));
    return {
      id: item.id,
      title: item.title,
      image: image ? `/clothes/images/${image}` : ''
    };
  });
  startScroll();
  startScrollReverse();
});

const itemWidth = 220; // 200px width + 20px margin
const totalWidthTop = computed(() => displayItemsTop.value.length * itemWidth);
const totalWidthBottom = computed(() => displayItemsBottom.value.length * itemWidth);

const displayItemsTop = computed(() => clothingItems.value.filter(item => item.id < 9 || item.id > 16));
const displayItemsBottom = computed(() => {
  const items = clothingItems.value.filter(item => item.id >= 9 && item.id <= 16);
  return [...items, ...items, ...items, ...items];
});

const scrollPosition = ref(0);
const scrollPositionReverse = ref(0);
let scrollInterval = null;
let scrollIntervalReverse = null;

const startScroll = () => {
  scrollInterval = setInterval(() => {
    scrollPosition.value += 2;
    if (scrollPosition.value >= totalWidthTop.value) {
      scrollPosition.value = 0;
    }
  }, 50);
};

const stopScroll = () => {
  clearInterval(scrollInterval);
};

const startScrollReverse = () => {
  scrollPositionReverse.value = totalWidthBottom.value / 2;
  scrollIntervalReverse = setInterval(() => {
    scrollPositionReverse.value -= 2;
    if (scrollPositionReverse.value <= 0) {
      scrollPositionReverse.value = totalWidthBottom.value / 2;
    }
  }, 50);
};

const stopScrollReverse = () => {
  clearInterval(scrollIntervalReverse);
};

const navigateToCatalog = (id) => {
  router.push(`/catalogue/${id}`);
};

onUnmounted(() => {
  stopScroll();
  stopScrollReverse();
});
</script>

<style scoped>
.carousel {
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
}

.carousel-track {
  display: flex;
  transition: transform 0.1s linear;
}

.carousel-item {
  min-width: 200px;
  margin: 0 10px;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.carousel-item:hover {
  transform: scale(1.05);
}

.carousel-item:active {
  transform: scale(0.95);
}

.carousel-item img {
  width: 100%;
  height: auto;
}
</style>