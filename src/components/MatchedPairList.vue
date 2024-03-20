<script>
export default {
  data() {
    return {
      isSmallScreen: false,
    };
  },
  props: {
    matchedPairs: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth > 770;
    },
    openUserPopup(user) {
      this.$emit('displayPopup', user);
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen w-72 m-auto">
    <div
      class="w-full max-w-md p-4 border border-gray-300 rounded-lg shadow-md mb-4"
      :style="{ overflowX: isSmallScreen ? 'auto' : 'hidden' }"
    >
      <h2 class="font-bold text-xl mb-4 text-center">Matched Users</h2>

      <div
        class="flex overflow-auto"
        :class="{ 'flex-col': isSmallScreen, 'flex-row': !isSmallScreen }"
      >
        <div v-for="user in this.matchedPairs" :key="user.id">
          <button
            type="button"
            class="m-1 w-60 ml-2 bg-gray-100 border border-gray-300 rounded-lg p-3 text-left hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
            @click="openUserPopup(user)"
          >
            <span class="font-semibold">{{ user.firstName }} {{ user.lastName }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
