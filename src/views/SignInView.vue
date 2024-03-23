<script>
import { RouterLink } from 'vue-router';
import { toast } from 'vue3-toastify';
import store from '@/store';
import router from '@/router';
import AuthService from '@/services/AuthService';
import SignInForm from '@/components/Forms/SignInForm.vue';

export default {
    name: 'SignInView',
    components: {
        SignInForm,
        RouterLink
    },
    methods: {
        signInUser(user) {
            if (user.email === '') {
                toast.error("Email is required");
            }
            else if (user.password === '') {
                toast.error("Password is required");
            }
            else {
                toast.promise(this.signin(user), {
                    loading: 'Signing in...',
                    success: {
                        render() {
                            store.commit('setLoggedInState', true);
                            router.push('/');
                            return 'Signed in successfully';
                        }
                    },
                    error: 'Unable to sign in. Please try again later'
                });
            }
        },
        async signin(user) {
            await AuthService.login(user).then((response) => {
                return new Promise((resolve) => resolve(response));
            }).catch((error) => {
                return new Promise((resolve, reject) => reject(error));
            });
        }
    }
}
</script>

<template>
    <div class="max-w-7xl mx-auto">
        <div class="my-7">
            <p class="text-xl sm:text-3xl font-bold text-center text-blue-400">Welcome back!</p>
            <p class=" text-xs sm:text-lg font-semibold text-center">Sign into your account</p>
        </div>

        <SignInForm @signInUser="signInUser"/>

        <div class="my-4 text-center">
            Not a member? <RouterLink to="/signup" class="text-blue-400"><b>Sign up</b></RouterLink>
        </div>
    </div>
</template>

<style scoped>
</style>