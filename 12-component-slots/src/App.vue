<template>
  <!-- <ModelComponent :onSave="onSave"  :title="'Model Title'" :content=" 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente in eos expedita sunt aliquam laboriosam ipsa! Aspernatur, odit rem quaerat amet, velit facilis explicabo ullam recusandae, minus quisquam earum in.' "  /> -->
 
  <ModelComponent>
      <!-- <h3>Title info from slots</h3>  -->

      <template #title>
          <h3>Title info from slots</h3>
      </template>
<!-- 
      <template #content>
         <p class="text-green">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos excepturi veritatis distinctio dolorum eius velit laboriosam accusamus voluptatibus cupiditate vero.
         </p>
      </template> -->

      <template v-slot:content>
         <p class="text-green">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos excepturi veritatis distinctio dolorum eius velit laboriosam accusamus voluptatibus cupiditate vero.
         </p>
      </template>

      <template #default>
        This will be show by default.
      </template>
  </ModelComponent>
</template>


<script>
  import ModelComponent from './components/ModelComponent.vue';

  export default {

    
    methods : {
        onSave(){
            alert ( "Saved!!");
        }
    },

    components:{
      ModelComponent
    }
  }

</script>