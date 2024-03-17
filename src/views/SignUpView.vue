<script>
import ProgramService from '@/services/ProgramService';
import SignUpForm from '@/components/Forms/SignUpForm.vue';
import InstitutionService from '@/services/InstitutionService';
import AuthService from '@/services/AuthService';
import { toast } from 'vue3-toastify';
import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from '@/helper/helpers'; 

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
                toast.error(`${error}. \nUnable to fetch programs. Please try again later.`);
            });
        },
        getAllInstitutions() {
            InstitutionService.getAllInstitutions().then((response) => {
                this.institutions = response.data;
            }).catch((error) => {
                toast.error(`${error}. \nUnable to fetch institutions. Please try again later.`);
            });
        },
        createNewUser(newUser) {
            if (newUser.firstName === '') {
                toast.error("First name is required");
            } 
            else if (newUser.lastName === '') {
                toast.error("Last name is required");
            } 
            else if (!newUser.email.match(EMAIL_REGEX) || newUser.email === '') {
                toast.error("Please enter a valid email address");
            } 
            else if (!newUser.phoneNumber.match(PHONE_NUMBER_REGEX) || newUser.phoneNumber === '') {
                toast.error("Please enter the phone number in specified format");
            } 
            else if (newUser.password !== newUser.confirmPassword) {
                toast.error("Passwords must be match");
            } 
            else if (newUser.program === '' || newUser.program === null || newUser.program === undefined) {
                toast.error("Select your Program");
            } 
            else if (newUser.institution === '' || newUser.institution === null || newUser.institution === undefined) {
                toast.error("Select your Institution");
            } 
            else {
                toast.promise(this.signup(newUser), {
                    pending: "Creating your account...",
                    success: "Account created successfully",
                    error: "Something went wrong"
                });
            }
        },
        async signup(userData) {
            const userDataParse = {
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                phoneNumber: userData.phoneNumber,
                password: userData.password,
                program: JSON.parse(userData.program),
                institution: JSON.parse(userData.institution),
                hobbies: userData.hobbies
            }

            await AuthService.register(userDataParse).then((response) => {
                return new Promise((resolve) => {
                    resolve(response);
                });
            }).catch((error) => {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            });
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