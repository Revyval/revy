<script setup>
import {ref, reactive, watch} from 'vue'
import gsap from 'gsap'

const props = defineProps({
  number: {
    type: Number,
    required: true
  },
  decimalPlaces: {
    type: Number,
    default: 0
  }
})

const tweened = reactive({
  number: 0
})

watch(
    () => props.number,
    (newNumber) => {
      gsap.to(tweened, {duration: 0.5, number: Number(newNumber) || 0})
    },
    {immediate: true}
)
</script>

<template>
  <div class="demo">
    <p class="big-number">{{ tweened.number.toFixed(props.decimalPlaces) }}</p>
  </div>
</template>

<style>
.big-number {
  font-weight: bold;
  font-size: 2em;
}
</style>