<template>
  <footer>
    <img src="../../../assets/png/cheese.png" alt="Cheese" class="cheese" />
    <p>© 2024 Revyval</p>
    <router-link to="contact">Contact</router-link>
  </footer>
</template>

<style scoped>
footer {
  gap: 20px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-top: auto;
  z-index: 2;
}

.cheese {
  margin-right: -30px;
  width: 100px;
}

</style>
