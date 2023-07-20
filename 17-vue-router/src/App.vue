<template>

  <div class="container">
  <div>
    <router-link to="/" active-class="active"  class="nav-link"> Home Page </router-link>
    <router-link to="/about" active-class="active" class="nav-link"> About Page </router-link>
    <router-link to="/detail/12" active-class="active" class="nav-link"> Detail Page </router-link>
  </div>

    <div>
      <router-view></router-view>
    </div>
  </div>


</template>


<style>
  .nav-link{
    padding: 5px 10px;
    text-decoration: none;
    border:1px solid #fa6558;
    color:#fa6558;
    margin:5px;
    display:inline-block;
  }

  .active{
    background-color: #fa6558;
    color:#fff;
  }
</style>