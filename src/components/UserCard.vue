<script>
import IconBlock from './Icons/IconBlock.vue';
import IconEmail from './Icons/IconEmail.vue';
import IconHeart from './Icons/IconHeart.vue';
import IconHobbies from './Icons/IconHobbies.vue';
import IconInstitution from './Icons/IconInstitution.vue';
import IconPhone from './Icons/IconPhone.vue';
import IconProgram from './Icons/IconProgram.vue';

export default {
    name: 'UserCard',
    components: {
        IconHeart,
        IconBlock,
        IconInstitution,
        IconProgram,
        IconHobbies,
        IconPhone,
        IconEmail
    },
    props: {
        user: {
            type: Object,
            required: true
        },
        isMatchedUser: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        getInstitutionImage(institutionCode) {
            return `/images/institutions/${institutionCode}.jpg`;
        },
        getProfileImage() {
            const profileAddress = Math.floor(Math.random() * (7 - 1 + 1) + 1);
            return `/images/profiles/profile${profileAddress}.jpeg`;
        },
        handleBlock() {
            this.$emit('blockUser', this.user);
        },
        handlePair() {
            this.$emit('likeUser', this.user);
        },
        makePhoneCall() {
            window.location.href = `tel:${this.user.phoneNumber}`;
        },
        sendEmail() {
            window.location.href = `mailto:${this.user.email}`;
        },
    }
}
</script>

<template>
    <div class="flex flex-col max-w-sm min-w-96 bg-white border border-gray-200 rounded-2xl shadow">
        <div>
            <img :src="getInstitutionImage(user.institution.institutionCode)" alt="institution background" class="rounded-t-2xl aspect-video w-full after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full">
            <img :src="getProfileImage()" alt="user profile" class="relative -top-20 -mb-16 w-36 border-4 border-white rounded-full my-0 m-auto bg-contain overflow-hidden">
        </div>

        <div class="px-5">
            <h3 class="text-2xl font-semibold text-center leading-6">{{ user.firstName }} {{ user.lastName }}</h3>
            <div class="mt-4">
                <p class="text-md text-gray-900 flex items-center font-bold">
                    <IconInstitution />
                    {{ user.institution.name }}
                </p>
            </div>
            <div class="mt-4">
                <p class="text-md text-gray-900 flex items-center font-bold">
                    <IconProgram />
                    {{ user.program.title }}
                </p>
            </div>
            <div class="mt-4">
                <p class="text-md text-gray-900 flex items-center font-bold">
                    <IconHobbies />
                    Hobbies:
                </p>

                <div class="mt-3 flex flex-row flex-wrap gap-2 justify-start">
                    <div class="py-2 px-4 no-underline rounded-full text-white font-semibold bg-blue-500 "
                        v-for="hobby in user.hobbies"
                        :key="hobby"
                    >
                    {{ hobby }}
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isMatchedUser" class="pt-4 pb-5 px-5 flex flex-col gap-5 justify-evenly items-center mt-auto">
            <button class="flex flex-row gap-3 justify-center items-center border-2 border-red-400 bg-red-400 bg-opacity-20 rounded-lg px-6 py-3 w-full"
                @click="handleBlock"
            >
                <IconBlock class="text-red-500"/>
                <span class="font-bold text-red-600">Block</span>
            </button>
            <button class="flex flex-row gap-3 justify-center items-center border-2 border-purple-400 bg-purple-400 bg-opacity-20 rounded-lg px-6 py-3 w-full"
                @click="makePhoneCall"
            >
                <IconPhone class=" text-purple-500"/>
                <span class="font-bold text-purple-600">Contact by Phone</span>
            </button>
            <button class="flex flex-row gap-3 justify-center items-center border-2 border-teal-400 bg-teal-400 bg-opacity-20 rounded-lg px-6 py-3 w-full"
                @click="sendEmail"
            >
                <IconEmail class=" text-teal-500"/>
                <span class="font-bold text-teal-600">Contact by Email</span>
            </button>

        </div>
        <div v-else class="pt-4 pb-5 px-5 flex flex-row gap-5 justify-evenly items-center mt-auto">
            <button class="flex flex-row gap-3 justify-center items-center border-2 border-red-400 bg-red-400 bg-opacity-20 rounded-lg px-6 py-3 w-1/2"
                @click="handleBlock"
            >
                <IconBlock class="text-red-500"/>
                <span class="font-bold text-red-600">Block</span>
            </button>
            <button class="flex flex-row gap-3 justify-center items-center border-2 border-green-400 bg-green-400 bg-opacity-20 rounded-lg px-6 py-3 w-1/2"
                @click="handlePair"
            >
                <IconHeart  class="text-green-400"/>
                <span class="font-bold text-green-600">Pair</span>
            </button>
        </div>
    </div>
</template>