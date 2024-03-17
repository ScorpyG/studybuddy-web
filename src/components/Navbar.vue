<script>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import store from '@/store';
import IconHamburgerMenu from './Icons/IconHamburgerMenu.vue';
import IconUser from './Icons/IconUser.vue';
import IconStudyBuddyLogo from './Icons/IconStudyBuddyLogo.vue';
import AuthService from '@/services/AuthService';
import router from '@/router';

const isMenuOpen = ref(false);

export default {
    components: {
        RouterLink,
        IconHamburgerMenu,
        IconUser,
        IconStudyBuddyLogo
    },
    data() {
        return {
            isMenuOpen: false,
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.isLoggedIn;
        }
    },
    methods: {
        logout() {
            store.commit('setLoggedInState', false);
            router.push('/signin');
            AuthService.logout();
        }
    }
}
</script>

<template>
    <nav class="mb-4 border border-t-0 border-l-0 border-r-0 border-b-2 drop-shadow-md">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center text-base">
                <!-- logo -->
                <div >
                    <RouterLink to="/" class="flex justify-center items-center gap-1 py-5 px-2">
                        <IconStudyBuddyLogo class=" text-blue-500" />

                        <span class="text-lg">Study<b>Buddy</b></span>
                    </RouterLink>
                </div>

                <!-- nav links -->
                <div class="hidden md:flex items-center space-x-3">
                    <RouterLink to="/about" class="py-5 px-2 text-base">About</RouterLink>
                    <RouterLink to="/contact" class="py-5 px-2 text-base">Contact</RouterLink>
                </div> 

                <!-- auth links -->
                <div class="hidden md:flex items-center space-x-3">
                    <RouterLink 
                        to="/signin" 
                        class="py-5 px-2 font-bold" 
                        v-if="isLoggedIn === false"
                    >
                        Sign In
                    </RouterLink>
                    <RouterLink 
                        to="/signup" 
                        class="py-4 px-2 bg-blue-600 hover:bg-blue-700 transition-all font-bold text-white rounded-md" 
                        v-if="isLoggedIn === false"
                    >
                        Sign Up
                    </RouterLink>

                    <div class="py-5 px-2 font-bold cursor-pointer hover:font-semibold" v-if="isLoggedIn === true" @click="logout">Logout</div>
                    <RouterLink to="/profile" class="py-4 px-2 flex space-x-2 justify-center items-center bg-blue-600 hover:bg-blue-700 rounded-md" v-if="isLoggedIn === true">
                        <IconUser class="rounded-ful text-white"/>
                        <span class="text-white">Profile</span>
                    </RouterLink>
                </div>

                <!-- burger button -->
                <div class="md:hidden flex items-center">
                    <button @click="isMenuOpen = !isMenuOpen">
                        <IconHamburgerMenu />
                    </button>
                </div>
            </div>  
        </div>

        <!-- mobile menu -->
        <div v-if="isMenuOpen">
            <!-- <RouterLink v-for="item in navLinks" :key="item.text" :to="item.path" class="block py-2 px-4 text-md hover:bg-gray-200">{{ item.text }}</RouterLink> -->

            <RouterLink to="/signin" class="block py-2 px-4 text-md hover:bg-gray-200" v-if="isLoggedIn === false">Sign In</RouterLink>
            <RouterLink to="/signup" class="block py-2 px-4 text-md hover:bg-gray-200" v-if="isLoggedIn === false">Sign Up</RouterLink>

            <RouterLink to="/profile" class="block py-2 px-4 text-md hover:bg-gray-200" v-if="isLoggedIn === true">Profile</RouterLink>

            <RouterLink to="/about" class="block py-2 px-4 text-md hover:bg-gray-200">About</RouterLink>
            <RouterLink to="/contact" class="block py-2 px-4 text-md hover:bg-gray-200">Contact</RouterLink>
        </div>
    </nav>
</template>