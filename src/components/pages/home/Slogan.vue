// src/components/pages/home/Slogan.vue
<script setup>
import EnteringText from "@/components/pages/home/EnteringText.vue";
</script>

<template>
  <EnteringText name="text-transition" mode="out-in">
    <h3 class="slogan">{{ $t('slogan') }}</h3>
  </EnteringText>
</template>

<style scoped>
.slogan {
  text-align: center;
  font-size: 1.5rem;
  color: var(--color-text);
}
</style>