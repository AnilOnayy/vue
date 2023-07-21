<template>
     <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Login</h3>
      <input type="text" placeholder="Username" class="input mb-3" />
      <input type="password" placeholder="Password" class="input mb-3" />
      <button class="default-button">Login</button>
      <span class="text-center mt-3 text-sm">
        I'm not registered,
        <router-link :to="{name :'Register'}" class="text-red-900 hover:text-black">
          Sign Up
        </router-link>
      </span>
    </div>
</template>