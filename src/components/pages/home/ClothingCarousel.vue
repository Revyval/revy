<template>
  <div>
    <div class="carousel-wrapper">
      <Flicking
          ref="flickingTop"
          :options="{ circular: true, align: 'center' }"
          :plugins="forwardsPlugins"
          class="carousel"
          @ready="onFlickingReady"
      >
        <div
            class="panel"
            v-for="(item, index) in displayItemsTop"
            :key="index"
            @click="handlePanelClick(item.id)"
        >
          <img :src="item.image" :alt="item.title" class="carousel-image" draggable="false" />
        </div>
      </Flicking>
    </div>
    <div class="carousel-wrapper">
      <Flicking
          ref="flickingBottom"
          :options="{ circular: true, align: 'center' }"
          :plugins="backwardsPlugins"
          class="carousel"
          @ready="onFlickingReady"
      >
        <div
            class="panel"
            v-for="(item, index) in displayItemsBottom"
            :key="index"
            @click="handlePanelClick(item.id)"
        >
          <img :src="item.image" :alt="item.title" class="carousel-image" draggable="false" />
        </div>
      </Flicking>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import Flicking from '@egjs/vue3-flicking';
import '@egjs/vue3-flicking/dist/flicking.css';
import { AutoPlay } from '@egjs/flicking-plugins';
import { useRouter } from 'vue-router';
import clothes from '@/clothes.json';

const router = useRouter();
const clothingItems = ref([]);
const flickingTop = ref(null);
const flickingBottom = ref(null);
const forwardsPlugins = [new AutoPlay({ duration: 1000, direction: 'NEXT', stopOnHover: false, animationDuration: 4000})];
const backwardsPlugins = [new AutoPlay({ duration: 1000, direction: 'PREV', stopOnHover: false, animationDuration: 4000})];
onMounted(() => {
  clothingItems.value = clothes.map(item => {
    const image = item.images.find(img => img.endsWith('1.webp'));
    return {
      id: item.id,
      title: item.title,
      image: image ? `https://revyval.store/images/${image}` : ''
    };
  });
});

const displayItemsTop = computed(() => clothingItems.value.filter(item => item.id < 9 || item.id > 16));
const displayItemsBottom = computed(() => {
  const items = clothingItems.value.filter(item => item.id >= 9 && item.id <= 16);
  return [...items, ...items, ...items, ...items];
});

const onFlickingReady = () => {
  setTimeout(() => {
    flickingTop.value.align = 'prev';
    flickingBottom.value.align = 'prev';
  }, 200);
};

const navigateToCatalog = (id) => {
  router.push(`/catalogue/${id}`);
};

const handlePanelClick = (id) => {
  setTimeout(() => {
    navigateToCatalog(id);
  }, 200); // Delay to ensure drag event is not mistaken for click
};
</script>

<style scoped>
.carousel-wrapper {
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
}

.carousel {
  width: 100%;
  white-space: nowrap;
}

.panel {
  display: inline-block;
  height: min(70vw, 30vh);
  margin: 0 2px;
}

.panel:hover {
  transform: scale(1.03);
  cursor: pointer;
}

.carousel-image {
  object-fit: contain;
  image-rendering: pixelated;
  user-select: none;
  width: 100%;
  height: 100%;
}
</style>