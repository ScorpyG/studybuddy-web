<script>
export default {
    methods: {
        handleOnSubmit(e) {
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
    }
}
</script>

<template> 
    <form @submit.prevent="handleOnSubmit"  class="flex flex-col border-2 rounded-md p-4 gap-3 m-auto max-w-xs sm:max-w-xl">
        <div>
            <label for="firstName" class="block font-medium leading-6 text-gray-900">First Name</label>
            <input 
                type="text"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                required
                class="p-2.5 rounded-md bg-gray-100 border-0 w-full mt-1"
            />
        </div>

        <div>
            <label for="lastName" class="block font-medium leading-6 text-gray-900">Last Name</label>
            <input 
                type="text"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                required
                class="p-2.5 rounded-md bg-gray-100 border-0 w-full mt-1"
            />
        </div>
        
        <div>
            <label for="email" class="block font-medium leading-6 text-gray-900">Email</label>
            <input 
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                class="p-2.5 rounded-md bg-gray-100 border-0 w-full mt-1"
            />
        </div>
      
        <div>
            <label for="message" class="block font-medium leading-6 text-gray-900">Message</label>
            <textarea 
                name="message"
                id="message"
                placeholder="Your message"
                required
                class="p-2.5 rounded-md resize-none bg-gray-100 border-0 w-full mt-1"
                cols="30"
                rows="10"
            ></textarea> 
        </div>
        <button
            class="rounded-md p-2.5 font-bold text-white bg-blue-500 hover:bg-blue-700 transition-all w-full mt-2"
            type="submit"
        >
            Send
        </button>
    </form>
</template>

<style scoped></style>