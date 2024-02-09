<script setup>

// TODO: handle form submission + NodeMailer
const handleOnSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    console.log({
        firstName,
        lastName,
        email,
        message
    });
}
</script>

<template> 
    <form @submit.prevent="handleOnSubmit"  class="flex flex-col border-2 rounded-md p-4 gap-3 m-auto max-w-xs sm:max-w-xl">
        <input 
            type="text"
            placeholder="First Name"
            name="firstName"
            id="firstName"
            required
            class="p-2 rounded-md bg-gray-100"
        />
        <input 
            type="text"
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            required
            class="p-2 rounded-md bg-gray-100"
        />
        <input 
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            class="p-2 rounded-md bg-gray-100"
        />
        <textarea 
            name="message"
            id="message"
            placeholder="Your message"
            required
            class="p-2 rounded-md resize-none bg-gray-100"
            cols="30"
            rows="10"
        ></textarea> 
        <button
            class="rounded-md p-2  font-bold text-white bg-blue-500 hover:bg-blue-700 transition-all"
            type="submit"
        >
            Send
        </button>
    </form>
</template>

<style scoped></style>