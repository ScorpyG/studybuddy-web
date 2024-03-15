<script>
export default {
    props: {
        // List of programs, institutions, and hobbies to be displayed in the form
        programs: {
            type: Array,
            required: true
        },
        institutions: {
            type: Array,
            required: true
        },
        hobbies: {
            type: Array,
            required: true
        },
        // Input fields for the user's personal information
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        }
    },
}
</script>

<template>
    <form @submit.prevent="handleOnSubmit" class="flex flex-col border-2 rounded-md p-4 gap-3 m-auto max-w-xs sm:max-w-xl">
        <div>
            <h2 class="text-lg font-semibold leading-5 text-gray-900">Personal Information</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">These information are visible to other users.</p>

            <div class="mt-2 flex flex-row flex-wrap w-full gap-x-4 gap-y-2">
                <div class="sm:flex-grow w-fit">
                    <label for="firstName" class="block font-medium leading-6 text-gray-900">First name</label>
                    <input 
                        type="text"
                        :value="firstName"      
                        @input="$emit('update:firstName', $event.target.value)"
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
                        :value="lastName"
                        @input="$emit('update:lastName', $event.target.value)"
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
                        :value="phoneNumber"
                        @input="$emit('update:phoneNumber', $event.target.value)"
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
                    <select name="programs" id="programs" class="p-2.5 rounded-lg bg-gray-100 block w-full appearance-none border-0 mt-1">
                        <!-- <option selected>{{ userValue.program.title }}</option> -->
                        <option v-for="program in programs" :value="JSON.stringify(program)" >{{ program.title }}</option>
                    </select>
                </div>

                <div>
                    <label for="institutions" class="block font-medium leading-6 text-gray-900">Academic Institution</label>
                    <select name="institutions" id="institutions" class="p-2.5 rounded-lg bg-gray-100 block w-full appearance-none border-0 mt-1">
                        <!-- <option selected>{{ userValue.institution.name }}</option> -->
                        <option v-for="institution in institutions" :value="JSON.stringify(institution)">{{ institution.name }}</option>
                    </select>
                </div>

                <div>
                    <label for="hobbies" class="block font-medium leading-6 text-gray-900">Hobbies</label>
                    <select name="hobbies" id="hobbies" class="p-2.5 rounded-lg bg-gray-100 block w-full appearance-none border-0 mt-1">
                        <!-- <option selected>{{ userValue.hobbies[0].name }}</option> -->
                        <option v-for="hobby in hobbies" :value="JSON.stringify(hobby)">{{ hobby.name }}</option>
                    </select>
                </div>
            </div>
        </div>

        <button
            class="rounded-md p-2.5 font-bold text-white bg-blue-500 hover:bg-blue-700 transition-all w-full mt-2"
            type="submit"
            @click.prevent="$emit('updateUser', {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber
                // program:
                // institution:
                // hobbies:
            })"
        >
            Save
        </button>
    </form>

</template>

<style scoped>
</style>