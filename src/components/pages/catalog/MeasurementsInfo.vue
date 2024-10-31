<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const showInfo = ref(false);

// Function to hide info with delay
let hideTimeout;
function hideInfo() {
  hideTimeout = setTimeout(() => (showInfo.value = false), 200);
}

// Function to cancel the hide delay
function keepInfoVisible() {
  clearTimeout(hideTimeout);
}
</script>

<template>
  <div v-if="item.information" class="info-container">
    <Information
        @mouseenter="showInfo = true"
        @mouseleave="hideInfo"
    />
    <div
        v-if="showInfo"
        class="info-popup"
        @mouseenter="keepInfoVisible"
        @mouseleave="hideInfo"
    >
      {{ item.information }}
    </div>
  </div>
</template>

<style scoped>
.info-container {
  position: relative;
  padding-top: 7px;
}

.info-popup {
  position: absolute;
  bottom: 100%; /* Position the popup above the icon */
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 250px;
  z-index: 1000;
}
</style>