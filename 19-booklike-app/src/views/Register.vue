<template>
    <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Register</h3>
      <input  v-model="userData.fullName" type="text"  placeholder="Full Name" class="input mb-3" />
      <input  v-model="userData.userName" type="text" placeholder="Username" class="input mb-3" />
      <input  v-model="userData.password" type="password" placeholder="Password" class="input mb-3" />
      <button @click="onSave" class="default-button">Sign Up</button>
      <span class="text-center mt-3 text-sm">
        I'm already a member,
        <router-link :to="{name :'Login'}"  class="text-red-900 hover:text-black">Login</router-link>
      </span>
    </div>
</template>


<script>
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

  methods :{
    onSave(){
      console.log(this.userData);
    }
  }
}
</script>