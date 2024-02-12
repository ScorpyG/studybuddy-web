<script setup>
import SignInForm from '@/components/Forms/SignInForm.vue';
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="max-w-7xl mx-auto">
        <div class="my-7">
            <p class="text-xl sm:text-3xl font-bold text-center text-blue-400">Welcome back!</p>
            <p class=" text-xs sm:text-lg font-semibold text-center">Sign into your account</p>
        </div>

        <SignInForm />

        <div class="my-4 text-center">
            Not a member? <RouterLink to="/signup" class="text-blue-400"><b>Sign up</b></RouterLink>
        </div>
    </div>
</template>

<style scoped>
</style>