<script>
export default {
    data() {
        return {
            userFirstName: this.firstName,
            userLastName: this.lastName,
            userPhoneNumber: this.phoneNumber,
            userProgram: JSON.stringify(this.userCurrentProgram), // convert to string to avoid reactivity issues
            userInstitution: JSON.stringify(this.userCurrentInstitution), // convert to string to avoid reactivity issues
            userHobbies: this.userCurrentHobbies,
            inputHobby: ''
        }
    },
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
        // Input fields props for the user's personal information
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
        },
        userCurrentProgram: {
            type: Object,
            required: true
        },
        userCurrentInstitution: {
            type: Object,
            required: true
        },
        userCurrentHobbies: {
            type: Array,
            required: true,
        }
    },
    methods: {
        addHobby(event) {
            if (this.userHobbies.length >= 3) {
                alert('You can only add up to 3 hobbies');
            } else {
                if (event.key === 'Enter' && this.inputHobby) {
                    if (!this.userHobbies.includes(this.inputHobby) && !this.userHobbies.includes(this.inputHobby.toLowerCase())) {
                        this.userHobbies.push(this.inputHobby);
                    }
                }
            }
            this.inputHobby = '';
        },
        removeHobby(hobbyToRemove) {
            this.userHobbies = this.userHobbies.filter((hobby) => hobby !== hobbyToRemove);
        },
        handleSubmit() {
            this.$emit('updateUser', {
                firstName: this.userFirstName,
                lastName: this.userLastName,
                phoneNumber: this.userPhoneNumber,
                program: this.userProgram,
                institution: this.userInstitution,
                hobbies: this.userHobbies
            });
        }
    }
}
</script>

<!-- 
  @keypress.enter.prevent is left blank because 
  we want to prevent accidental form submission when the user 
  press enter to add their hobbies
-->
<template>
    <form @keypress.enter.prevent="() => {}" class="flex flex-col border-2 rounded-md p-4 gap-3 m-auto max-w-xs sm:max-w-xl">
        <div>
            <h2 class="text-lg font-semibold leading-5 text-gray-900">Personal Information</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">These information are visible to other users.</p>

            <div class="mt-2 flex flex-row flex-wrap w-full gap-x-4 gap-y-2">
                <div class="sm:flex-grow w-fit">
                    <label for="firstName" class="block font-medium leading-6 text-gray-900">First name</label>
                    <input 
                        type="text"
                        v-model="userFirstName"
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
                        v-model="userLastName"
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
                        v-model="userPhoneNumber"
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
                    <select 
                        name="programs"
                        id="programs"
                        class="p-2.5 rounded-lg bg-gray-100 block w-full appearance-none border-0 mt-1"
                        v-model="userProgram"
                    >
                        <option v-for="program in programs" :value="JSON.stringify(program)">{{ program.title }}</option>
                    </select>
                </div>

                <div>
                    <label for="institutions" class="block font-medium leading-6 text-gray-900">Academic Institution</label>
                    <select 
                        name="institutions"
                        id="institutions"
                        class="p-2.5 rounded-lg bg-gray-100 block w-full appearance-none border-0 mt-1"
                        v-model="userInstitution"
                    >
                        <option v-for="institution in institutions" :value="JSON.stringify(institution)">{{ institution.name }}</option>
                    </select>
                </div>

                <div>
                    <label for="hobbies" class="block font-medium leading-6 text-gray-900">Hobbies</label>
                    <input
                        type="text"
                        name="hobbies"
                        id="hobbies"
                        placeholder="Enter your hobbies (up to 3)"
                        class="p-2.5 rounded-md bg-gray-100 border-0 w-full mt-1"
                        v-model="inputHobby"
                        @keyup.enter="addHobby"
                    />

                    <div class="flex flex-row flex-wrap gap-2 mt-4">
                        <div
                            class="py-2 px-4 no-underline rounded-full text-white font-semibold bg-indigo-600 hover:bg-indigo-500 cursor-pointer"
                            v-for="hobby in userHobbies" 
                            :key="hobby"
                            @click.prevent="removeHobby(hobby)"
                        >
                        {{ hobby }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button
            class="rounded-md p-2.5 font-bold text-white bg-blue-500 hover:bg-blue-700 transition-all w-full"
            type="submit"
            @click.prevent="handleSubmit"
        >
            Save
        </button>
    </form>
</template>

<style scoped>
</style>