<template>
  <div class="container">
     <UserSection />
  </div>
</template>


<script>

import UserSection from './components/UserSection.vue';

  export default {
    data() {
      return {
         provideData : {
            userList : ["Anıl","İrem","Cengizhan","Mert","Fatma"]
         }
      }
    },

    provide() {
        return {
          userList :this.provideData.userList,
          addUser : this.addUser,
        }
    },

    methods :{
        addUser(name) {
          this.provideData.userList.push(name);
        }
    },



    components :{
      UserSection
    }
  }
</script>
