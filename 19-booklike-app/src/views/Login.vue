<template>
     <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Login</h3>
      <input v-model="data.username" type="text" placeholder="Username" class="input mb-3" />
      <input v-model="data.password" type="password" placeholder="Password" class="input mb-3" />
      <button @click="login" class="default-button">Login</button>
      <span class="text-center mt-3 text-sm">
        I'm not registered,
        <router-link :to="{name :'Register'}" class="text-red-900 hover:text-black">
          Sign Up
        </router-link>
      </span>
    </div>
</template>



<script>

import CryptoJs  from 'crypto-js'
import {mapGetters} from 'vuex'

export default {
   data () {
    return {
      data :{
        username : null ,
        password : null
      }
    }
   },
   computed :{
    ...mapGetters({
      saltKey : "_saltKey"
    })
   },
   methods : {
    login(){

      const cryptedPass = CryptoJs.HmacSHA1(this.data.password,this.saltKey).toString();

      this.$appAxios.get(`/users?userName=${this.data.username}&password=${cryptedPass}`)
      .then(response => {

        if(response?.data?.length > 0)
        {
          this.$store.commit("setUser",response.data[0]);
          this.$router.push({name : 'Home'});
        }
        else{
          alert("There is no user with this datas!")
        }

      })
    }
   }
}
</script>