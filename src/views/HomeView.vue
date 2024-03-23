<script>
import { toast } from "vue3-toastify";
import PairService from "@/services/PairService";
import SideScrollList from "@/components/SideScrollList.vue";

export default {
  name: "HomeView",
  components: {
    SideScrollList,
  },
  data() {
    return {
      selectedMatchedUser: null,

      matchedPairs: [],
      curatedPairs: [],
    };
  },
  methods: {
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
  },
  created() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    this.getAllMatchedPairs(user.id);
    this.getCuratedPairs(user.id);
  }
};
</script>

<template>
  <div class="max-w-7xl mx-auto mb-14">
    <div class="flex flex-col gap-y-10">
      <SideScrollList 
        :isMatchedList="false" 
        :userList="curatedPairs" 
        listTitle="StudyBuddies with common interests"
        @getCuratedPairs="getCuratedPairs"
      />
      <SideScrollList 
        :isMatchedList="true" 
        :userList="matchedPairs" 
        listTitle="Your matched StudyBuddies"
        @getAllMatchedPairs="getAllMatchedPairs"
      />
    </div>
  </div>
</template>
