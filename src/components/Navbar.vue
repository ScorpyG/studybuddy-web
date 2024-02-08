<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isMenuOpen = ref(false);

// TODO: implement auth
const isLoggedIn = false;

const navLinks = isLoggedIn === false ? [
    { path: '/about', text: 'About', current: false },
    { path: '/contact', text: 'Contact', current: false },
    { path: '/signin', text: 'Sign In', current: false },
    { path: '/signup', text: 'Sign Up', current: false },
] : [
    { path: '/about', text: 'About', current: false },
    { path: '/contact', text: 'Contact', current: false },
    { path: '/profile', text: 'Profile', current: false },

];
</script>

<template>
    <nav class="bg-gray-100">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center text-base">
                <!-- logo -->
                <div >
                    <RouterLink to="/" class="flex justify-center items-center gap-1 py-5 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                        </svg>

                        <span>Study<b>Buddy</b></span>
                    </RouterLink>
                </div>

                <!-- nav links -->
                <div class="hidden md:flex items-center space-x-3">
                    <RouterLink to="/about" class="py-5 px-2">About</RouterLink>
                    <RouterLink to="/contact" class="py-5 px-2">Contact</RouterLink>
                </div>  

                <!-- auth links -->
                <div class="hidden md:flex items-center space-x-3">
                    <RouterLink to="/signin" class="py-5 px-2 font-bold" v-if="isLoggedIn === false">Sign In</RouterLink>
                    <RouterLink to="/signup" class="py-4 px-2 bg-blue-600 hover:bg-blue-500 hover:text-gray-50 font-bold text-white rounded-md" v-if="isLoggedIn === false">Sign Up</RouterLink>
                    <RouterLink to="/profile" class="py-5 px-2" v-else="isLoggedIn === true">Profile</RouterLink>
                </div>

                <!-- burger button -->
                <div class="md:hidden flex items-center">
                    <button @click="isMenuOpen = !isMenuOpen">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" 
                                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" 
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>  
        </div>  

        <!-- mobile menu -->
        <div v-if="isMenuOpen">
            <RouterLink v-for="item in navLinks" :key="item.text" :to="item.path" class="block py-2 px-4 text-sm hover:bg-gray-200">{{ item.text }}</RouterLink>
        </div>
    </nav>
</template>