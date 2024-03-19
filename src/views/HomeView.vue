<script>
import Popup from '@/components/Popup.vue';

export default {
  name: 'HomeView',
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    }
  },
  components: {
    Popup
  },
  data() {
    return {
      showPopup: false, // Flag to control visibility of Popup
      selectedMatchedUser: {
        "id": 1,
        "email": "testinguser2@test.com",
        "password": "123456",
        "firstName": "Chris",
        "lastName": "Alexander",
        "phoneNumber": "111-111-2222",
        "program": {
            "id": 2,
            "code": "PSCI",
            "title": "Computer Science"
        },
        "institution": {
            "id": 1,
            "institutionCode": "AJAE",
            "name": "Douglas College",
            "address": "700 Royal Ave",
            "city": "New Westminster",
            "state": "British Columbia",
            "country": "Canada"
        },
        "hobbies": [
            "Singing",
            "Swimming",
            "Chess"
        ]
      },
    };
  },
  methods: {
    displayPopup(user) {
      // Set the selectedMatchedUser to the user passed as an argument
      this.selectedMatchedUser = user;

      // Set showPopup to true when the button is clicked
      this.showPopup = true;
    },
  },
}
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <h1>This is an home page</h1>

    <div>
      <p>Welcome back, {{ isLoggedIn }}</p>
    </div>
  </div>


  <!-- below button shows the popup when clicked. Use the onclick function in the matched list -->
  <button class="bg-blue-300 rounded p-4" @click="displayPopup(selectedMatchedUser)">Show Popup</button>
  <Popup v-if="showPopup" @close="showPopup = false" :user="selectedMatchedUser" :showPopup="showPopup" />
</template>

<style>
</style>