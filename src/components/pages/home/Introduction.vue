<script setup>

import EnteringText from "@/components/animations/EnteringText.vue";
</script>

<template>
  <EnteringText class="introduction">
    <h3>
      {{ $t('introduction') }}
    </h3>
  </EnteringText>
</template>

<style scoped>
h3 {
  text-align: center;
  font-size: 1.5rem;
  color: var(--color-text);
}
</style>