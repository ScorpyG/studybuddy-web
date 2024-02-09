<script setup>
import { defineProps } from 'vue';

const user = defineProps({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    required: true,
    institutionId: Number,
    programId: Number
});

// TODO: handle form submission + API call
const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(
        e.target.firstName.value,
        e.target.lastName.value,
        e.target.phone.value,
        e.target.programs.value,
        e.target.institutions.value
    );
}

// TODO: implement fetch programs from API
const programs = [
    {
        id: 1,
        name: "Computer Science"
    },
    {
        id: 2,
        name: "Business"
    },
    {
        id: 3,
        name: "Accounting"
    }
];

// TODO: implement fetch institutions from API
const institutions = [
    {
        id: 1,
        name: "Simon Fraser University"
    },
    {
        id: 2,
        name: "University of British Columbia"
    },
    {
        id: 3,
        name: "Victoria University"
    }
];
</script>

<template>
    <form @submit="handleOnSubmit" class="flex flex-col border-2 rounded-md p-4 gap-3 m-auto max-w-xs sm:max-w-xl">
        <div>
            <h2 class="text-lg font-semibold leading-5 text-gray-900">Personal Information</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">These information are visible to other users.</p>

            <div class="mt-2 flex flex-row flex-wrap w-full gap-x-4 gap-y-2">
                <div class="sm:flex-grow w-fit">
                    <label for="firstName" class="block font-medium leading-6 text-gray-900">First name</label>
                    <input 
                        type="text"
                        v-model="user.firstName"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        required
                        class="p-2.5 rounded-md bg-gray-100 border-0 mt-1 w-full"
                    >
                </div>  

                <div class="sm:flex-grow w-fit">
                    <label for="lastName" class="block font-medium leading-6 text-gray-900">Last name</label>
                    <input
                        type="text"
                        v-model="user.lastName"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        required
                        class="p-2.5 rounded-md bg-gray-100 border-0 mt-1 w-full"
                    >
                </div>

                <div class="col-span-full">
                    <label for="phoneNumber" class="block font-medium leading-6 text-gray-900">Phone Number</label>
                    <input
                        type="tel"
                        v-model="user.phoneNumber"
                        id="phone"
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="xxx-xxx-xxxx"
                        required
                        class="p-2.5 rounded-md bg-gray-100 border-0 mt-1"
                    >
                </div>
            </div>
        </div>

        <div class="mt-2">
            <h2 class="text-lg font-semibold leading-5 text-gray-900">Profile Information</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">We use these information to find your study<b>buddies</b>.</p>

            <div class="mt-2 flex flex-col w-full gap-x-4 gap-y-2">
                <div>
                    <label for="programs" class="block font-medium leading-6 text-gray-900">Academic major / program</label>
                    <select name="programs" id="programs" class="p-2.5 rounded-lg bg-gray-100 block w-full appearance-none border-0 mt-1" v-model="user.programId">
                        <option selected>Select your program</option>
                        <option v-for="program in programs" :value="program.id" >{{ program.name }}</option>
                    </select>
                </div>

                <div>
                    <label for="institutions" class="block font-medium leading-6 text-gray-900">Academic Institution</label>
                    <select name="institutions" id="institutions" class="p-2.5 rounded-lg bg-gray-100 block w-full appearance-none border-0 mt-1" v-model="user.institutionId">
                        <option selected>Select your institution</option>
                        <option v-for="institution in institutions" :value="institution.id">{{ institution.name }}</option>
                    </select>
                </div>
            </div>
        </div>

        <button
            class="rounded-md p-2.5 font-bold text-white bg-blue-500 hover:bg-blue-700 transition-all w-full mt-2"
            type="submit"
        >
            Save
        </button>
    </form>

</template>

<style scoped>
</style>