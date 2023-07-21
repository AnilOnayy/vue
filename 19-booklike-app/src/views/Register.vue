<template>
    <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Register</h3>
      <input  v-model="userData.fullName" type="text"  placeholder="Full Name" class="input mb-3" />
      <input  v-model="userData.userName" type="text" placeholder="Username" class="input mb-3" />
      <input  v-model="userData.password" type="password" placeholder="Password" class="input mb-3" />
      <button @click="register" class="default-button">Sign Up</button>
      <span class="text-center mt-3 text-sm">
        I'm already a member,
        <router-link :to="{name :'Login'}"  class="text-red-900 hover:text-black">Login</router-link>
      </span>
    </div>
</template>


<script>

import CryptoJs  from 'crypto-js'
import { mapGetters } from 'vuex';

export default {
  data(){
    return{
      userData :{
        fullName : "",
        userName : "",
        password :""
      }
    }
  },
  computed :{
    ...mapGetters({
      saltKey : "_saltKey"
    })
  },

  methods :{
    register(){
      const password = CryptoJs.HmacSHA1(this.userData.password,this.saltKey).toString();
      const decryptedPassword = CryptoJs.AES.decrypt(password,this.saltKey).toString();

      console.log("Şifrelenmiş => ",password);
      console.log("Şifre Çözülmüş => ",decryptedPassword);



      this.$appAxios.post("/users",{...this.userData,password})
      .then(res => {
        console.log("Login Success! => ",res);
        this.$router.push({name :'Home'})
      })
    }
  }
}
</script>