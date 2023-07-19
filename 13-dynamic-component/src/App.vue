<template>
  <div class="container">

    <div class="buttons d-flex justify-content-between">
      <button class="bg-red" @click="activeComponent = 'RedComp' ">Red</button>
      <button class="bg-green" @click="activeComponent = 'GreenComp' ">Green</button>
      <button class="bg-blue" @click="activeComponent = 'BlueComp' ">Blue</button>
    </div>

<!-- 
    <div class="components mt-4">
      <RedComp  v-if="activeComponent == 'RedComp' " />
      <GreenComp v-if="activeComponent == 'GreenComp' " />
      <BlueComp  v-if="activeComponent == 'BlueComp' " />
    </div> -->

    <keep-alive>
      <component  :is=" activeComponent" msg="RedComponent"  >
        <h5>DEFAULT SLOT</h5>
      </component>
    </keep-alive>



  </div>


  
</template>



<script>

import BlueComp from './components/BlueComp.vue';
import RedComp from './components/RedComp.vue';
import GreenComp from './components/GreenComp.vue';


export default {
  data() {
    return {
      activeComponent : 'RedComp'
    }
  },

  components :{
    BlueComp,
    GreenComp,
    RedComp,
  }
}

</script>