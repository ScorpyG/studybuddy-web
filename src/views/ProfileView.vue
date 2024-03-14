<script>
import ProgramService from '@/services/ProgramService';
import InstitutionService from '@/services/InstitutionService';
import HobbyService from '@/services/HobbyService';
import ProfileForm from '@/components/Forms/ProfileForm.vue';

export default {
  name: 'ProfileView',
  components: {
    ProfileForm
  },
  data() {
    return {
      programs: [],
      institutions: [],
      hobbies: [],
      user: {
        id: 1,
        email: "testinguser1@test.com",
        firstName: "user 1",
        lastName: "testing",
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
        hobbies: [
          {
            id: 3,
            name: "Poetry writing",
            category: "Creative Hobbies"
          },
          {
            id: 1,
            name: "Basketball",
            category: "Active Hobbies"
          },
          {
            id: 2,
            name: "Swimming",
            category: "Active Hobbies"
          }
        ]
      }
    }
  },
  methods: {
    getAllPrograms() {
      ProgramService.getAllPrograms().then((response) => {
        this.programs = response.data;
      }).catch((error) => {
        console.log(error);
      });
    },
    getAllInstitutions() {
      InstitutionService.getAllInstitutions().then((response) => {
        this.institutions = response.data;
      }).catch((error) => {
        console.log(error);
      });
    },
    updateUser(updatedUser) {
      console.log(updatedUser);
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
          v-model:firstName="user.firstName"
          v-model:lastName="user.lastName"
          v-model:phoneNumber="user.phoneNumber"

          :programs="programs"
          :institutions="institutions"
          :hobbies="hobbies"
          @updateUser="updateUser"
        />

        {{ user }}
    </div>
</template>

<style>
</style>