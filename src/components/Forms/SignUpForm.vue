<script setup>
// TODO: handle form submission + API call
const handleOnSubmit = (event) => {
  event.preventDefault();
  const firstName = event.target.firstName.value;
  const lastName = event.target.lastName.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;
  const password = event.target.password.value;
  const confirmPassword = event.target.confirmPassword.value;
  const institution = event.target.institutions.value;
  const program = event.target.programs.value;

  console.log({
    firstName,
    lastName,
    email,
    phone,
    password,
    confirmPassword,
    institution,
    program
  });
};

// TODO: fetch programs from API
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

// TODO: fetch institutions from API
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
  <form @submit="handleOnSubmit" class="flex flex-col border-2 rounded-md p-4 gap-2 m-auto max-w-xs sm:max-w-xl">
    <div class="flex flex-row flex-wrap w-full gap-3">
      <div class="sm:flex-grow w-fit">
        <label for="firstName" class="block font-medium leading-6 text-gray-900">First Name</label>
        <input 
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          required
          class="p-2.5 rounded-md bg-gray-100 border-0 w-full mt-1"
        />
      </div>

      <div class="sm:flex-grow w-fit">
        <label for="lastName" class="block font-medium leading-6 text-gray-900">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          required
          class="p-2.5 rounded-md bg-gray-100 border-0 w-full mt-1"
        />
      </div>

      <div class="sm:flex-grow w-fit">
        <label for="email" class="block text font-medium leading-6 text-gray-900">Email</label>
        <input
          type="email"
          name="email" 
          id="email"
          placeholder="Email"
          required
          class="p-2.5 rounded-md bg-gray-100 border-0 mt-1 w-full"
        />
      </div>

      <div>
        <label for="phone" class="block font-medium leading-6 text-gray-900">Phone</label>
        <input
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
      <label for="password" class="block font-medium leading-6 text-gray-900">Password</label>
      <input 
        type="password"
        name="password"
        id="password" 
        placeholder="Password"
        required
        class="p-2.5 rounded-md bg-gray-100 border-0 w-full mt-1"
      />
    </div>

    <div>
      <label for="confirmPassword" class="block font-medium leading-6 text-gray-900">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirmed Password"
        required
        class="p-2.5 rounded-md bg-gray-100 border-0 w-full mt-1"
      />
    </div>

    <div>
      <label for="programs" class="block font-medium leading-6 text-gray-900">Academic Program / Major</label>
      <select name="programs" id="programs" class="p-2.5 rounded-lg bg-gray-100 block w-full appearance-none border-0 mt-1">
        <option selected>Select your program</option>
        <option v-for="program in programs" :value="program.id">{{ program.name }}</option>
      </select>
    </div>
    
    <div>
      <label for="institutions" class="block font-medium leading-6 text-gray-900">Academic Institution</label>
      <select name="institutions" id="institutions" class="p-2.5 rounded-lg bg-gray-100 block w-full appearance-none border-0 mt-1">
        <option selected>Select your institution</option>
        <option v-for="institution in institutions" :value="institution.id">{{ institution.name }}</option>
      </select>
    </div>
  
    <button 
      class="rounded-md p-2.5 font-bold text-white bg-blue-500 hover:bg-blue-700 transition-all w-full mt-2"
      type="submit"
    >
      Sign Up
    </button>
  </form>
</template>