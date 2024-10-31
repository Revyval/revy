<template>
  <div class="hero-outer">
    <div class="hero-section">
      <div
          class="parallax-image"
          :style="{
          transform: `translateY(${offsetY}px)`
        }"
      >
        <img
            src="/home_bg.webp"
            alt="Hero Background"
        />
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParallaxHero',
  data() {
    return {
      offsetY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.offsetY = window.scrollY * -0.3
    }
  }
}
</script>

<style scoped>
.hero-outer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  z-index: 0;
}

.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.parallax-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  will-change: transform;
}

.parallax-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  position: relative;
  height: 100%;
  z-index: 1;
}
</style>