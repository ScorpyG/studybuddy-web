<script>
import { toast } from 'vue3-toastify';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      userProgram: '',
      userInstitution: '',
      inputHobby: '',
      userHobbies: []
    }
  },
  props: {
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
    }
  },
  methods: {
    addHobby(event) {
      if (this.userHobbies.length >= 3) {
        toast.warning('You can only add up to 3 hobbies');
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
      this.$emit('createNewUser', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        password: this.password, 
        confirmPassword: this.confirmPassword,
        program: this.userProgram,
        institution: this.userInstitution,
        hobbies: this.userHobbies,
      });

      // clear the form fields
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.phoneNumber = '';
      this.password = '';
      this.confirmPassword = '';
      this.userProgram = '';
      this.userInstitution = '';
      this.userHobbies = [];
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
  <form @keypress.enter.prevent="() => {}" class="flex flex-col border-2 rounded-md p-4 gap-2 m-auto max-w-xs sm:max-w-xl">
    <div class="flex flex-row flex-wrap w-full gap-3">
      <div class="sm:flex-grow w-fit">
        <label for="firstName" class="block font-medium leading-6 text-gray-900">First Name &#42;</label>
        <input 
          v-model="firstName"
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          required
          class="p-2.5 rounded-md bg-gray-100 border-0 w-full mt-1"
        />
      </div>

      <div class="sm:flex-grow w-fit">
        <label for="lastName" class="block font-medium leading-6 text-gray-900">Last Name &#42;</label>
        <input
          v-model="lastName"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          required
          class="p-2.5 rounded-md bg-gray-100 border-0 w-full mt-1"
        />
      </div>

      <div class="sm:flex-grow w-fit">
        <label for="email" class="block text font-medium leading-6 text-gray-900">Email &#42;</label>
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
        <label for="phone" class="block font-medium leading-6 text-gray-900">Phone &#42;</label>
        <input
          v-model="phoneNumber"
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="xxx-xxx-xxxx"
          required
          class="p-2.5 rounded-md bg-gray-100 border-0 mt-1"
        />
      </div>
    </div>

    <div>
      <label for="password" class="block font-medium leading-6 text-gray-900">Password &#42;</label>
      <input 
        v-model="password"
        type="password"
        name="password"
        id="password" 
        placeholder="Password"
        required
        class="p-2.5 rounded-md bg-gray-100 border-0 w-full mt-1"
      />
    </div>

    <div>
      <label for="confirmPassword" class="block font-medium leading-6 text-gray-900">Confirm Password &#42;</label>
      <input
        v-model="confirmPassword"
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirmed Password"
        required
        class="p-2.5 rounded-md bg-gray-100 border-0 w-full mt-1"
      />
    </div>

    <div>
      <label for="programs" class="block font-medium leading-6 text-gray-900">Academic Program / Major &#42;</label>
      <select 
        name="programs"
        id="programs"
        class="p-2.5 rounded-lg bg-gray-100 block w-full appearance-none border-0 mt-1"
        v-model="userProgram"
      >
        <option disabled hidden value="">Select your program</option>
        <option v-for="program in programs" :value="JSON.stringify(program)">{{ program.title }}</option>
      </select>
    </div>
    
    <div>
      <label for="institutions" class="block font-medium leading-6 text-gray-900">Academic Institution &#42;</label>
      <select 
        name="institutions"
        id="institutions"
        class="p-2.5 rounded-lg bg-gray-100 block w-full appearance-none border-0 mt-1"
        v-model="userInstitution"
      >
        <option disabled hidden value="">Select your institution</option>
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
          class="py-2 px-4 no-underline rounded-full text-white font-semibold bg-blue-500 hover:bg-blue-400 cursor-pointer"
          v-for="hobby in userHobbies" 
          :key="hobby"
          @click.prevent="removeHobby(hobby)"
        >
          {{ hobby }}
        </div>
      </div>
    </div>

    <button 
      class="rounded-md p-2.5 font-bold text-white bg-blue-500 hover:bg-blue-700 transition-all w-full mt-2"
      type="submit"
      @click.prevent="handleSubmit"
    >
      Sign Up
    </button>
  </form>
</template>
