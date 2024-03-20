<script>
import Popup from "@/components/Popup.vue";
import MatchedPairList from "@/components/MatchedPairList.vue";
import PairService from "@/services/PairService";
import { toast } from "vue3-toastify";

export default {
  name: "HomeView",
  components: {
    Popup,
    MatchedPairList,
  },
  data() {
    return {
      showPopup: false, // Flag to control visibility of Popup
      selectedMatchedUser: null,

      matchedPairs: [],
      curatedPairs: [],
    };
  },
  methods: {
    getUserFromSession() {
      return JSON.parse(sessionStorage.getItem("user"));
    },
    displayPopup(user) {
      // Set the selectedMatchedUser to the user passed as an argument
      this.selectedMatchedUser = user;

      // Set showPopup to true when the button is clicked
      this.showPopup = true;
    },
    getAllMatchedPairs(userId) {
      PairService.getAllMatchedPairs(userId).then((response) => {
        this.matchedPairs = response.data;
      }).catch((error) => {
        toast.error(`${error}, Error fetching matched pairs`);
      });
    },
    getCuratedPairs(userId) {
      PairService.getAllPairs(userId).then((response) => {
        this.curatedPairs = response.data;
      }).catch((error) => {
        toast.error(`${error}, Error fetching curated pairs`);
      });
    },
    blockUser(userToBeBlocked) {
      const currentUser = this.getUserFromSession();
      const pairRequestData = {
        userId: currentUser.id,
        interestUserId: userToBeBlocked.id,
        blocking: true,
        interesting: false
      }

      PairService.updatePair(pairRequestData).then(() => {
        toast.success("User blocked successfully");
        this.getAllMatchedPairs(currentUser.id);
        this.showPopup = false;
      }).catch((error) => {
        toast.error(`${error}, Error blocking user`);
      });
    },
    likeUser(userToBeLiked) {
      const currentUser = this.getUserFromSession();
      const pairRequestData = {
        userId: currentUser.id,
        interestUserId: userToBeLiked.id,
        blocking: false,
        interesting: true
      }

      PairService.updatePair(pairRequestData).then(() => {
        toast.success("Pairing request sent successfully");
        this.getCuratedPairs(currentUser.id);
      }).catch((error) => {
        toast.error(`${error}, Error liking user`);
      });
    },
  },
  created() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    this.getAllMatchedPairs(user.id);
    this.getCuratedPairs(user.id);
  }
};
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <MatchedPairList @displayPopup="displayPopup" :matchedPairs="matchedPairs" />
  </div>

  <Popup
    v-if="showPopup"
    @close="showPopup = false"
    @blockUser="blockUser"
    :user="selectedMatchedUser"
    :showPopup="showPopup"
  />
</template>
