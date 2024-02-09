<script setup>
// TODO: handle form submission + API call
const handleOnSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log({
        email,
        password
    });
};

</script>

<template>
    <form @submit="handleOnSubmit" class="flex flex-col border-2 rounded-md p-4 gap-3 m-auto max-w-xs sm:max-w-xl">
        <input
            type="email"
            name="email" 
            id="email"
            placeholder="Email"
            required
            class="p-2 rounded-md  bg-gray-100"
        />
        <input 
            type="password"
            name="password"
            id="password" 
            placeholder="Password"
            required
            class="p-2 rounded-md  bg-gray-100"
        />
        <button 
            class="rounded-md p-2 font-bold text-white bg-blue-500 hover:bg-blue-700 transition-all"
            type="submit" 
        >
            Sign In
        </button> 
    </form>
</template>

<style scoped>
</style>