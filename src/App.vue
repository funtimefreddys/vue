<template>
  <header>
    <MyBar />
  </header>
  <main>
    <router-view />
  </main>
</template>
<script setup>
import MyBar from './components/MyBar.vue'
</script>
<script>
export default {
  name : 'App',
  components : {
    MyBar
  },
};

</script>
<style scoped>
.grid-container {
  display: grid;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  justify-content: center;
}

@media (min-width: 576px) {
  .grid-container {grid-template-columns: repeat(1, 1fr);}
  }
  @media (min-width: 992px) {
  .grid-container {grid-template-columns: repeat(3, 1fr);}
  }

</style>
