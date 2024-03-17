<script>
import { toast } from 'vue3-toastify';
import { PHONE_NUMBER_REGEX } from '@/helper/helpers';
import ProgramService from '@/services/ProgramService';
import InstitutionService from '@/services/InstitutionService';
import ProfileForm from '@/components/Forms/ProfileForm.vue';
import ProfileFormSkeleton from '@/components/Forms/ProfileFormSkeleton.vue';
import UserService from '@/services/UserService';

export default {
  name: 'ProfileView',
  data() {
    return {
      loading: false,
      programs: [],
      institutions: [],
      hobbies: [],
      user: {}
    }
  },
  components: {
    ProfileForm,
    ProfileFormSkeleton
  },
  methods: {
    getAllPrograms() {
      ProgramService.getAllPrograms().then((response) => {
          this.programs = response.data;
      }).catch((error) => {
          toast.error(`${error}. Please try again later.`);
      });
    },
    getAllInstitutions() {
      InstitutionService.getAllInstitutions().then((response) => {
        this.institutions = response.data;
      }).catch((error) => {
        toast.error(`${error}. Please try again later.`);
      });
    },
    getUser() {
      this.loading = true;

      // safe to assume if session storage doesn't contain user data, then user is not logged in
      const userSessionData = JSON.parse(sessionStorage.getItem('user'));
      if (userSessionData !== null) {
        this.user = userSessionData;
        this.loading = false;
      }
    },
    updateUser(userData) {
      if (userData.firstName === '') {
        toast.error("First name is required");
      }
      else if (userData.lastName === '') {
        toast.error("Last name is required");
      }
      else if (!userData.phoneNumber.match(PHONE_NUMBER_REGEX) || userData.phoneNumber === '') {
        toast.error("Please enter the phone number in specified format");
      } 
      else if (userData.program === '' || userData.program === null || userData.program === undefined) {
        toast.error("Select your Program");
      } 
      else if (userData.institution === '' || userData.institution === null || userData.institution === undefined) {
        toast.error("Select your Institution");
      } 
      else {
        toast.promise(this.updateUserRequest(userData), {
          pending: "Updating your profile...",
          success: "Profile updated successfully",
          error: "Something went wrong"
        });
      }

    },
    async updateUserRequest(userData) {
      const userDataParse = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        phoneNumber: userData.phoneNumber,
        program: JSON.parse(userData.program),
        institution: JSON.parse(userData.institution),
        hobbies: userData.hobbies
      }

      await UserService.updateUserAccount(userDataParse, this.user.id).then((response) => {
        return new Promise((resolve) => {
          resolve(response);
        });
      }).catch((error) => {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      });
    }
  },
  created() {
    this.getAllPrograms();
    this.getAllInstitutions();
    this.getUser();
  },
}
</script>

<template>
    <div class="max-w-7xl mx-auto">
        <h1 class="text-xl md:text-3xl font-bold text-center my-7">Profile</h1>
        
        <ProfileForm v-if="!loading"
          :firstName="user.firstName"
          :lastName="user.lastName"
          :phoneNumber="user.phoneNumber"
          :userCurrentProgram="user.program"
          :userCurrentInstitution="user.institution"
          :userCurrentHobbies="user.hobbies"

          :programs="programs"
          :institutions="institutions"
          :hobbies="hobbies"

          @updateUser="updateUser"
        />

        <ProfileFormSkeleton v-else />
    </div>
</template>

<style>
</style>