<script>
import { toast } from 'vue3-toastify';
import { PHONE_NUMBER_REGEX } from '@/helper/helpers';
import ProgramService from '@/services/ProgramService';
import InstitutionService from '@/services/InstitutionService';
import ProfileForm from '@/components/Forms/ProfileForm.vue';
import UserService from '@/services/UserService';

export default {
  name: 'ProfileView',
  data() {
    return {
      programs: [],
      institutions: [],
      hobbies: [],

      user: {
        id: 1,
        firstName: "user",
        lastName: "tester",
        phoneNumber: "111-111-1111",
        program: {
          id: 1,
          code: "CSCI",
          title: "Computer Science"
        },
        institution: {
          id: 1,
          institutionCode: "AJAE",
          name: "Douglas College",
          address: "700 Royal Ave",
          city: "New Westminster",
          state: "British Columbia",
          country: "Canada"
        },
        hobbies: ["Basketball", "Soccer", "Volleyball"]
      }
    }
  },
  components: {
    ProfileForm
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

      await UserService.updateUserAccount(userDataParse).then((response) => {
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
  },
}

// TODO: implement auth ensure only authenticated user can access this page
// TODO: implement auth to get the user's profile data
</script>

<template>
    <div class="max-w-7xl mx-auto">
        <h1 class="text-xl md:text-3xl font-bold text-center my-7">This is an profile page</h1>
        
        <ProfileForm 
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
    </div>
</template>

<style>
</style>