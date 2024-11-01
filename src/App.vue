<template>
  <div class="app-container">
    <router-view />
    <MainFooter />
  </div>
</template>

<script setup>
import MainFooter from "@/components/pages/home/MainFooter.vue";
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

</style>