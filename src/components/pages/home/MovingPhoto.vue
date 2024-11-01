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
        <div class="content">
          <p v-html="$t('slogan')"></p>
        </div>
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
      this.offsetY = window.scrollY * -0.4;
    }
  }
}
</script>

<style scoped>
@import url(https://fonts.bunny.net/css?family=lacquer:400);
.hero-outer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
  height: 100vh;
  will-change: transform;
}

.parallax-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  position: absolute;
  bottom: 24%;
  right: 0;
  margin-right: 8%;
  z-index: 1;
}

.content p {
  font-size: 2rem;
  color: white;
  font-family: 'Lacquer', display, sans-serif;
  transform: rotate(-5deg) rotateX(10deg) rotateY(-17deg) rotateZ(3deg);
}

@media (max-width: 1200px) {
  .content {
    margin-right: 5%;

  }
}

@media (max-width: 1100px) {
  .content {
    bottom: 65px;
    margin-right: 10%;
  }

  .content p {
    font-size: 1.5rem;
    transform: rotateX(5deg) rotateY(-17deg) rotateZ(3deg);

  }
}
</style>