<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('signInUser', {
                email: this.email,
                password: this.password
            });
        }
    }
}
</script>

<template>
    <form class="flex flex-col border-2 rounded-md p-4 gap-3 m-auto max-w-xs sm:max-w-xl">
        <div>
            <label for="email" class="block font-medium leading-6 text-gray-900">Email</label>
            <input
                v-model="email"
                type="email"
                name="email" 
                id="email"
                placeholder="Email"
                required
                class="p-2.5 rounded-md bg-gray-100 border-0 mt-1 w-full"
            />
        </div>

        <div>
            <label for="password" class="block font-medium leading-6 text-gray-900">Password</label>
            <input 
                v-model="password"
                type="password"
                name="password"
                id="password" 
                placeholder="Password"
                required
                class="p-2.5 rounded-md bg-gray-100 border-0 mt-1 w-full"
            />
        </div>
        <button 
            class="rounded-md p-2.5 font-bold text-white bg-blue-500 hover:bg-blue-700 transition-all mt-2 w-full"
            type="submit" 
            @click.prevent="handleSubmit"
        >
            Sign In
        </button> 
    </form>
</template>

<style scoped>
</style>