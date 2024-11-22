<template>
  <footer>
    <img src="../../../assets/png/cheese.png" alt="Cheese" class="cheese" />
    <p class="version-text">
      revy@
      <a :href="`https://github.com/revyval/revy`" target="_blank" class="version-link">
        {{ version }}
      </a>
    </p>
    <p>©2024 Revyval</p>
    <a href="#" @click.prevent="openModal">Contact</a>
  </footer>

  <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <button class="close-button" @click="closeModal">X</button>
      <div class="header">
        <h2>Contact Information</h2>
        <LogoInstagram @click="goToInstagram" class="instagram-icon" />
      </div>
      <div class="email-container">
        <p>Have questions? Reach out at: <strong>revyval.info@gmail.com</strong></p>
        <button @click="copyEmail">Copy Email</button>
      </div>
      <div class="info">
        <p>Our team will respond as soon as possible.</p>
        <p>Hours: Monday - Saturday, 9:00 AM to 9:00 PM </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import pkg from '../../../../package.json';

const version = pkg.version;

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const copyEmail = () => {
  navigator.clipboard.writeText('revyval.info@gmail.com');
  alert('Email copied to clipboard');
};

const goToInstagram = () => {
  window.open('https://instagram.com/revyval.wear', '_blank');
};
</script>

<style scoped>
footer {
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  z-index: 2;
  margin-top: auto;
}

.cheese {
  margin-left: -28px;
  margin-right: -30px;
  width: 100px;
}

a {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  position: relative;
}

.close-button {
  position: absolute;
  top: -4px;
  right: 4px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-family: inherit;
  color: black;
}

.close-button:hover {
  color: black;
  background-color: transparent;
}

.header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.instagram-icon {
  cursor: pointer;
  transition: color 0.3s ease;
}

.instagram-icon:hover {
  color: gray;
}

.email-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.email-container button {
  font-family: inherit;
  background-color: var(--color-header);
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.email-container button:hover {
  background-color: var(--background-soft);
}

.email-container strong {
  font-weight: bold;
}

.info {
  margin-top: 20px;
}

.version-link {
  margin-left: -4px;
}
</style>