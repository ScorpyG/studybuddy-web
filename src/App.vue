<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

// TODO: implement auth
export default {
  components: {
    RouterLink,
    RouterView,
    Navbar,
    Footer,
  },
};
</script>

<template>
  <Navbar />

  <RouterView />
  <Footer />
</template>

<style scoped></style>
