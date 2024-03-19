<script>
import IconMatching from "@/components/Icons/IconMatching.vue";
import IconConnection from "@/components/Icons/IconConnection.vue";
import IconBestMatch from "@/components/Icons/IconBestMatch.vue";

export default {
  components: {
    IconMatching,
    IconConnection,
    IconBestMatch,
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
};
</script>

<template>
  <div class="landing-page max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="about-component flex flex-wrap items-center mb-8">
      <div class="text-el flex-1 mr-4 mb-4 sm:mb-0">
        <h1 id="heading" class="text-3xl md:text-4xl lg:text-5xl font-bold">
          Study<b class="text-blue-600">Buddy</b>
        </h1>
        <p
          id="txt-el"
          class="text-base md:text-lg lg:text-xl leading-relaxed mb-4 text-gray-700"
        >
          Find study partners who share your academic interests and goals.
          Collaborate on projects, join study groups, or connect with mentors to
          excel in your academic pursuits with Study<b class="text-blue-600"
            >Buddy</b
          >.
        </p>
        <router-link
          v-if="!isLoggedIn"
          to="/signup"
          class="btn-get-started bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </router-link>
        <router-link
          v-if="isLoggedIn"
          to="/home"
          class="btn-get-started bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition duration-300"
        >
          Continue
        </router-link>
      </div>
      <div class="image-container flex-1">
        <img
          id="image"
          src="/src/img/groupStudy.jpg"
          alt="Studying Process"
          class="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </div>

    <div class="features flex flex-wrap justify-center -mx-4">
      <div
        class="feature w-full sm:w-1/3 lg:w-1/4 mx-4 mb-8 mt-2 sm:mb-0 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
      >
        <IconMatching class="icons mb-4 text-blue-600" />
        <h2
          class="text-lg text-center md:text-xl lg:text-2xl font-bold text-gray-800 mb-2"
        >
          <b class="font-normal">Matching Algorithm:</b>
        </h2>
        <p class="text-base md:text-lg lg:text-xl text-center text-gray-700">
          Discover study partners who share your academic interests, study
          habits, and goals using our sophisticated matching algorithm.
        </p>
      </div>

      <div
        class="feature w-full sm:w-1/3 lg:w-1/4 mx-4 mb-8 mt-2 sm:mb-0 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
      >
        <IconConnection class="icons mb-4 text-blue-600" />
        <h2
          class="text-lg text-center md:text-xl lg:text-2xl font-bold text-gray-800 mb-2"
        >
          <b class="font-normal">Connection with Matched Partners:</b>
        </h2>
        <p class="text-base md:text-lg lg:text-xl text-center text-gray-700">
          Easily connect with your ideal study partners once you find them
          through our platform.
        </p>
      </div>

      <div
        class="feature w-full sm:w-1/3 lg:w-1/4 mx-4 mb-8 mt-2 sm:mb-0 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
      >
        <IconBestMatch class="icons mb-4 text-blue-600" />
        <h2
          class="text-lg md:text-xl text-center lg:text-2xl font-bold text-gray-800 mb-2"
        >
          <b class="font-normal">Sorting by Best Match:</b>
        </h2>
        <p class="text-base md:text-lg lg:text-xl text-center text-gray-700">
          Find the best study partners ranked by compatibility to enhance your
          collaborative learning experience.
        </p>
      </div>
    </div>
  </div>
</template>
