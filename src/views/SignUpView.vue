<script>
import ProgramService from '@/services/ProgramService';
import SignUpForm from '@/components/Forms/SignUpForm.vue';
import InstitutionService from '@/services/InstitutionService';

export default {
    name: 'SignUpView',
    components: {
        SignUpForm
    },
    data() {
        return {
            programs: [],
            institutions: [],
            hobbies: []
        }
    },
    components: {
        SignUpForm
    },
    methods: {
        getAllPrograms() {
            ProgramService.getAllPrograms().then((response) => {
                this.programs = response.data;
            }).catch((error) => {
                console.log(error);
            });
        },
        getAllInstitutions() {
            InstitutionService.getAllInstitutions().then((response) => {
                this.institutions = response.data;
            }).catch((error) => {
                console.log(error);
            });
        },
        createNewUser(newUser) {
            console.log('Form submitted');
            console.log(newUser);
        }
    },
    created() {
        this.getAllPrograms();
        this.getAllInstitutions();
    }
} 
</script>

<template>
    <div class="max-w-7xl mx-auto">
        <div class="my-7">
            <p class="text-xl md:text-3xl font-bold text-center text-blue-400">Welcome,</p>
            <p class=" text-xs md:text-lg font-semibold text-center">Let's find you a study<b>buddy</b></p>
        </div>  
        
        <SignUpForm :programs="programs" :institutions="institutions" :hobbies="hobbies" @createNewUser="createNewUser"/>

        <div class="my-4 text-center">
            Already a member? <RouterLink to="/signin" class="text-blue-400"><b>Sign in</b></RouterLink>
        </div>
    </div>
</template>

<style scoped>
</style>