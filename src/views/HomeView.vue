<script>
export default {
  name: 'HomeView',
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    }
  },
}
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <h1>This is an home page</h1>

    <div>
      <p>Welcome back, {{ isLoggedIn }}</p>
    </div>  
  </div>
</template>

<style>
</style>