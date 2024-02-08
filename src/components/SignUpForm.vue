<script setup>
</script>

<template>
  <form>
    <input 
      type="text"
      name="firstName"
      id="firstName"
      placeholder="First Name"
      required
    >
    <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Last Name"
      required
    >
    <input
      type="email"
      name="email" 
      id="email"
      placeholder="Email"
      required
    >
    <input
      type="tel"
      id="phone"
      name="phone"
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      placeholder="xxx-xxx-xxxx"
      required
    >
    <input 
      type="password"
      name="password"
      id="password" 
      placeholder="Password"
      required
    >
    <input
      type="confirmPassword"
      name="confirmPassword"
      id="confirmPassword"
      placeholder="Confirmed Password"
      required
    >
    <button 
      type="submit"
    >
      Sign Up
    </button>
  </form>
</template>

<style scoped>
</style>