<script setup>
import { defineProps, useAttrs } from 'vue';
import EnteringText from "@/components/animations/EnteringText.vue";

const props = defineProps({});
const attrs = useAttrs();
</script>

<template>
  <div v-bind="attrs">
    <h3>
      {{ $t('introduction1') }}
    </h3>
    <br/>
    <h3 class="quote">
      {{ $t('introduction2') }}
    </h3>
  </div>
</template>

<style scoped>
h3 {
  text-align: center;
  font-size: 1.5rem;
  color: var(--color-text);
}

.quote {
  font-style: italic;
  text-align: justify;
  position: relative;
  padding-left: 10px;
}

.quote::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: gray;
  border-radius: 3px;
  margin-left: -20px;
}
</style>