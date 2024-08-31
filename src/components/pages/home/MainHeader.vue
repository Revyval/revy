<script setup>

import IncreasingNumber from "@/components/animations/IncreasingNumber.vue";

const boolean = true;
</script>

<template>
  <header>
    <h1>Revyval</h1>
    <IncreasingNumber v-if="boolean" number="12381238"/>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 40px;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: green;
  z-index: 100;
}
</style>