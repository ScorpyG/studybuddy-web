<script>
import { onBeforeMount, onMounted, ref } from 'vue';
import axios from 'axios';
import SignUpForm from '@/components/Forms/SignUpForm.vue';

const programs = ref([]);
const institutions = ref([]);
const hobbies = ref([]);

export default {
    components: {
        SignUpForm
    },
    beforeMount() {
        axios.get('http://localhost:8080/api/programs').then(response => {
            this.programs = response.data;
        });
        axios.get('http://localhost:8080/api/institutions').then(response => {
            this.institutions = response.data;
        });
        axios.get('http://localhost:8080/api/hobbies').then(response => {
            this.hobbies = response.data;
        });
    },
    setup() {
        return {
            programs,
            institutions,
            hobbies
        }
    }
} 
</script>

<template>
    <div class="max-w-7xl mx-auto">
        <div class="my-7">
            <p class="text-xl md:text-3xl font-bold text-center text-blue-400">Welcome,</p>
            <p class=" text-xs md:text-lg font-semibold text-center">Let's find you a study<b>buddy</b></p>
        </div>  
        
        <SignUpForm :programs="programs" :institutions="institutions" :hobbies="hobbies"/>

        <div class="my-4 text-center">
            Already a member? <RouterLink to="/signin" class="text-blue-400"><b>Sign in</b></RouterLink>
        </div>
    </div>
</template>

<style scoped>
</style>