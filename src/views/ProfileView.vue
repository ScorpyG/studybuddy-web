<script setup>
import { ref } from 'vue'
import ProfileForm from '@/components/Forms/ProfileForm.vue';

// TODO: implement auth ensure only authenticated user can access this page

// TODO: implement auth to get the user's profile data
const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@email.com',
  phoneNumber: '123-456-7890',
};

</script>

<template>
    <div class="max-w-7xl mx-auto">
        <h1 class="text-xl md:text-3xl font-bold text-center my-7">This is an profile page</h1>
        
        <ProfileForm v-bind="user"/>
    </div>
</template>

<style>
</style>