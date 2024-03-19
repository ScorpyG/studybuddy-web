<script>
import Popup from "@/components/Popup.vue";
import MatchedPairList from "@/components/MatchedPairList.vue";

export default {
  name: "HomeView",
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  components: {
    Popup,
    MatchedPairList,
  },
  data() {
    return {
      showPopup: false, // Flag to control visibility of Popup
      selectedMatchedUser: null,
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
};
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <h1>This is an home page</h1>

    <div>
      <p>Welcome back, {{ isLoggedIn }}</p>
    </div>
  </div>

  <!-- below button shows the popup when clicked. Use the onclick function in the matched list 
  <button
    class="bg-blue-300 rounded p-4"
    @click="displayPopup(selectedMatchedUser)"
  >
    Show Popup
  </button>-->
  <MatchedPairList @openPopup="displayPopup" />

  <Popup
    v-if="showPopup"
    @close="showPopup = false"
    :user="selectedMatchedUser"
    :showPopup="showPopup"
  />
</template>
