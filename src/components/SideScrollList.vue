<script>
import UserCard from '@/components/UserCard.vue';
import PairService from "@/services/PairService";
import { toast } from 'vue3-toastify';

export default {
    name: 'SideScrollList',
    components: {
        UserCard,
    },
    props: {
        listTitle: {
            type: String,
            required: false
        },
        isMatchedList: {
            type: Boolean,
            required: true
        },
        userList: {
            type: Array,
            required: true
        }
    },
    methods: {
        getUserFromSession() {
            return JSON.parse(sessionStorage.getItem("user"));
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
              this.$emit("getAllMatchedPairs", currentUser.id);
              this.$emit("getCuratedPairs", currentUser.id);
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
              this.$emit("getCuratedPairs", currentUser.id);
            }).catch((error) => {
              toast.error(`${error}, Error liking user`);
            });
        },
    }
}
</script>

<template>
    <div>
        <h1 class="font-bold text-2xl">{{ listTitle ?? 'Horizontal List'}}</h1>
        <div v-if="userList.length > 0" class="mt-3 overflow-x-auto flex flex-row gap-x-10 pb-4">
            <UserCard v-for="user in userList" :user="user" :isMatchedUser="isMatchedList" @likeUser="likeUser" @blockUser="blockUser"/>
        </div>

        <div v-else class="mt-3 border-2 rounded-xl h-96 w-full m-auto flex justify-center items-center">
            <p class="text-center align-middle text-gray-500 font-bold text-2xl ">No users found</p>
        </div>
    </div>
</template>