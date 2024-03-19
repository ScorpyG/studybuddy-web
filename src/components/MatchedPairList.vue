<template>
  <div class="flex flex-col items-center justify-center h-screen w-72">
    <div
      class="w-full max-w-md p-4 border border-gray-300 rounded-lg shadow-md mb-4"
      :style="{ overflowX: isSmallScreen ? 'auto' : 'hidden' }"
    >
      <h2 class="font-bold text-xl mb-4 text-center">Matched Users</h2>

      <div
        class="flex overflow-auto"
        :class="{ 'flex-col': isSmallScreen, 'flex-row': !isSmallScreen }"
      >
        <div v-for="user in pairs" :key="user.id">
          <button
            type="button"
            class="m-1 w-60 ml-2 bg-gray-100 border border-gray-300 rounded-lg p-3 text-left hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
            @click="displayPopup(user)"
          >
            <span class="font-semibold"
              >{{ user.firstName }} {{ user.lastName }}</span
            >
          </button>
        </div>
      </div>

      <button
        class="flex mt-4 mx-auto bg-blue-700 px-4 py-2 text-sm font-semibold text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
        @click="refreshPairs"
      >
        Refresh
      </button>
    </div>
  </div>
</template>
<script>
import axios from "@/http-common";

export default {
  data() {
    return {
      pairs: [],
      isSmallScreen: false,
    };
  },
  created() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user && user.id) {
      this.getUserPairs(user.id);
    } else {
      console.error("Missing id or user is null");
    }

    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  methods: {
    async getUserPairs(userId) {
      try {
        const response = await axios.get(`/paired/${userId}`);
        this.pairs = response.data;
      } catch (error) {
        console.error("Error fetching user pairs:", error);
      }
    },
    displayPopup(user) {
      this.$emit("openPopup", user);
    },
    refreshPairs() {
      // Re-fetch pairs with the user's ID
      const user = JSON.parse(sessionStorage.getItem("user"));
      if (user && user.id) {
        this.getUserPairs(user.id);
      } else {
        console.error("User data is null or missing 'id' property");
      }
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth > 770;
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>
