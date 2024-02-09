<script setup>
import SignUpForm from '@/components/Forms/SignUpForm.vue';

</script>

<template>
    <div class="max-w-7xl mx-auto">
        <div class="my-7">
            <p class="text-xl md:text-3xl font-bold text-center text-blue-400">Welcome,</p>
            <p class=" text-xs md:text-lg font-semibold text-center">Let's find you a study<b>buddy</b></p>
        </div>  
        
        <SignUpForm />

        <div class="my-4 text-center">
            Already a member? <RouterLink to="/signin" class="text-blue-400"><b>Sign in</b></RouterLink>
        </div>
    </div>
</template>

<style scoped>
</style>