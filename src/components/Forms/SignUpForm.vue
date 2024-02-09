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

  console.log({
    firstName,
    lastName,
    email,
    phone,
    password,
    confirmPassword
  });
};


</script>

<template>
  <form @submit="handleOnSubmit" class="flex flex-col border-2 rounded-md p-4 gap-3 m-auto max-w-xs sm:max-w-xl">
    <input 
      type="text"
      name="firstName"
      id="firstName"
      placeholder="First Name"
      required
      class="p-2 rounded-md  bg-gray-100"
    />
    <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Last Name"
      required
      class="p-2 rounded-md  bg-gray-100"
    />
    <input
      type="email"
      name="email" 
      id="email"
      placeholder="Email"
      required
      class="p-2 rounded-md  bg-gray-100"
    />
    <input
      type="tel"
      id="phone"
      name="phone"
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      placeholder="xxx-xxx-xxxx"
      required
      class="p-2 rounded-md  bg-gray-100"
    />
    <input 
      type="password"
      name="password"
      id="password" 
      placeholder="Password"
      required
      class="p-2 rounded-md  bg-gray-100"
    />
    <input
      type="confirmPassword"
      name="confirmPassword"
      id="confirmPassword"
      placeholder="Confirmed Password"
      required
      class="p-2 rounded-md  bg-gray-100"
    />
    <button 
      class="rounded-md p-2  font-bold text-white bg-blue-500 hover:bg-blue-700 transition-all"
      type="submit"
    >
      Sign Up
    </button>
  </form>
</template>
