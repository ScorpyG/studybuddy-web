<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

// TODO: implement auth
export default {
  components: {
    RouterLink,
    RouterView,
    Navbar
  }
}
</script>

<template>
  <Navbar />

  <RouterView />
</template>

<style scoped>
</style>
