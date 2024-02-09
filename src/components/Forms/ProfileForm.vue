<script setup>
import { defineProps } from 'vue';

const user = defineProps({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    required: true,
});

// TODO: handle form submission + API call
const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.firstName.value);
    console.log(e.target.lastName.value);
    console.log(e.target.phone.value);
}

</script>

<template>
    <form @submit="handleOnSubmit" class="flex flex-col border-2 rounded-md p-4 gap-3 m-auto max-w-xs sm:max-w-xl">
        <input 
            type="text"
            v-model="user.firstName"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            required

            class="p-2 rounded-md bg-gray-100"
        >
        <input
            type="text"
            v-model="user.lastName"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            required

            class="p-2 rounded-md bg-gray-100"
        >
        <input
            type="tel"
            v-model="user.phoneNumber"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="xxx-xxx-xxxx"
            required

            class="p-2 rounded-md bg-gray-100"
        >
        <button
            class="rounded-md p-2 font-bold text-white bg-blue-500 hover:bg-blue-700 transition-all"
            type="submit"
        >
            Save
        </button>
    </form>

</template>

<style scoped>
</style>