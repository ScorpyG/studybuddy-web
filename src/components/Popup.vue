<script>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import IconPhone from './Icons/IconPhone.vue';
import IconEmail from './Icons/IconEmail.vue';
import IconInstitution from './Icons/IconInstitution.vue';
import IconProgram from './Icons/IconProgram.vue';
import IconHobbies from './Icons/IconHobbies.vue';


export default {
  name: 'Popup',
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    IconPhone,
    IconEmail,
    IconInstitution,
    IconProgram,
    IconHobbies
  },
  props: {
    showPopup: {
      type: Boolean,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    makePhoneCall() {
      window.location.href = `tel:${this.user.phoneNumber}`;
    },
    sendEmail() {
      window.location.href = `mailto:${this.user.email}`;
    },
    getInstitutionImage(institutionCode) {
      return `/images/institutions/${this.user.institution.institutionCode}.jpg`;
    }
  }
};
</script>

<template>
  <TransitionRoot as="template" :show="showPopup">
    <Dialog as="div" class="relative z-10" @close="showPopup = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
              <div>
                <!-- institution image -->
                <div class="mx-auto flex items-center justify-center">
                  <img :src="getInstitutionImage(user.institution.institutionCode)" alt="" class="w-full rounded-lg">
                </div>

                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-xl font-semibold leading-6 text-gray-900">{{ user.firstName }} {{ user.lastName }}</DialogTitle>
                  <div class="mt-4">
                    <p class="text-sm text-gray-900 flex justify-center font-bold">
                      <IconInstitution />

                      {{ user.institution.name }}
                    </p>
                  </div>

                  <div class="mt-4">
                    <p class="text-sm text-gray-900 flex justify-center">
                      <IconProgram />

                      {{ user.program.title }}
                    </p>
                  </div>


                  <div class="mt-4">
                    <p class="text-sm text-gray-900 flex justify-center">
                      <IconHobbies />
                      Hobbies:
                    </p>

                    <div class="flex justify-center">
                      <div
                          class="w-fit m-2 py-2 px-4 no-underline rounded-full text-white font-semibold bg-indigo-600"
                          v-for="hobby in user.hobbies"
                          :key="hobby"
                      >
                      {{ hobby }}
                      </div>
                    </div>
                  </div>

                  <div class="">
                    <button type="button" class="mt-4 w-full justify-center inline-flex items-center gap-x-2 rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                    @click="makePhoneCall"
                    >
                      <IconPhone />
                      Contact by phone
                    </button>

                    <button type="button" class="mt-2 w-full justify-center inline-flex items-center gap-x-2 rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                    @click="sendEmail"
                    >
                      <IconEmail />
                      Contact by email
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
