<template>
  <div class="container">
      <!-- <ul>
        <li 
         v-for="permission in $store.state.permissions"
         :key="permission" 
        >
        {{ permission }}
        </li>
      </ul>

      <ul>
        <li 
         v-for="user in $store.state.userList"
         :key="user" 
        >
        {{ user }}
        </li>
      </ul> -->
      <!-- {{ $store.state.fullName  }} -->

      <!-- <button @click="$store.state.fullName = 'İrem Karagöz' " ></button> -->
      
      <!-- {{ $store.getters.activeUser }} -->

      <!-- <pre>
        {{ woodItems }}
        {{ activeUser }}
        {{ customComputed }}
      </pre> -->

      <UserList/>
      <NewUser/>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import UserList from './components/UserList';
import NewUser from './components/NewUser';


export default {

  created () {
    // console.log(this.$store);
    // console.log(this.$store.state.person);
    // console.log(this.$store.state.theme);
    // console.log(this.$store.state.itemList.filter(item => item.type=="mobilya"))
    console.log(this.$store.getters._woodItems);
  },
  // computed : mapGetters(["_woodItems","_activeUser"]),
  computed :{
    // ...mapGetters(["woodItems","activeUser"]),
    ...mapGetters({
      woodItems : "_woodItems",
      activeUser :  "_activeUser"
    }),
    customComputed()
    {
      return "Custom Computed Value";
    }
  },


  components: {
    UserList,
    NewUser
  }
}
</script>

