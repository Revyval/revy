<script setup>

import MainHeader from "@/components/pages/home/MainHeader.vue";
import EnteringText from "@/components/animations/EnteringText.vue";

const openUrl = (url) => {
  window.open(url, '_blank');
};
</script>

<template>
  <MainHeader />
  <EnteringText class="title">Contact Us</EnteringText>

  <div class="container">
    <button @click="openUrl('https://www.instagram.com/revyval.wear/')">
      <h1>Instagram</h1>
      <LogoInstagram />
    </button>

    <button @click="openUrl('https://github.com/Revyval')">
      <h1>Github</h1>
      <LogoGithub />
    </button>

    <button @click="openUrl('https://discord.com/your-server')">
      <h1>Discord</h1>
      <LogoDiscord />
    </button>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  margin-top: 80px;
  font-size: 2.4rem;
}

.container {
  display: flex;
  align-items: center;
  gap: 80px;
  margin: 80px auto;
}

.container button {
  background-color: var(--background-soft);
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  padding: 10px 20px;
  border: black 3px solid;
  width: 200px;
  justify-content: center;
}

.container button:hover {
  background-color: var(--background-lighter);
  color: white;
  transform: scale(1.05);
}

.container button:active {
  transform: scale(0.95);
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}

</style>