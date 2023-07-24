<template>
  <h3>{{ title }} </h3>
  <input v-model="title" type="text">
  {{ titleLengthMessage }}
  <!-- <button @click="show = !show">Paragraph Toggle</button> -->
  <button @click="toggleShow">Paragraph Toggle</button>

  <p v-if="show">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et explicabo possimus exercitationem voluptatum iure, maiores pariatur facere ipsa recusandae!
  </p>


<hr>
<button @click="counter++">{{ counter }} {{ oddOrEven }} </button>
<hr>
<input type="text" v-model="searchText">
<p v-if="isTyping">Şu an yazıyor...</p>
</template>


<script>

import { ref,computed ,watch, watchEffect } from "vue"; // * Reactive Effect

// options api with composition api hybrid
export default {
  // data(){
  //   return{
  //     title : "bu bir başlık"
  //   };
  // },

  // beforeCreate()
  // {
  //    console.log("Before Create");
  // },
  // created()
  // {
  //   console.log("Created");
  // },
  setup(){


    //  console.log("Setup");
    // ! const title = "Bu Bir Setup Başlığıdır."; Reactivity'e gerek duymayan versiyon.
     const title = ref("Bu Bir Setup Başlığıdır."); // Reactive version.
     const show  = ref(false);
 
    //  function toggleShow(){ }
     const toggleShow = () => {
        show.value =  !show.value;
     };
     
     const titleLengthMessage = computed(() =>  `${title.value.length} adet karakter vardır`);

     // ***********************************************************************************************************

     const counter = ref(0);
     const oddOrEven = computed(() => counter.value % 2 === 0 ? "Even" :"Odd" );

     watch([counter,oddOrEven],([newCounter,newOddOrEven],[oldCounter,oldOddOrEven]) => {
        console.log('Counter Old Value =>', oldCounter)
        console.log('Counter New Value =>', newCounter)


        console.log('OddOrEven Old Value =>', oldOddOrEven)
        console.log('OddOrEven New Value =>', newOddOrEven)
     })
     // ***********************************************************************************************************
     const searchText = ref("");
     const isTyping = ref(false);

    //  watch(searchText,(oldValue,newValue) => {

    //   if(searchText.value.length > 0)
    //   {
    //     isTyping.value = true;
    //     setTimeout(() => {
    //       isTyping.value = false;
    //     }, 1500);  
    //   }
    //  })

     const stop = watchEffect((onInvalidate) => {
      if(searchText.value.length > 0)
      {
        isTyping.value = true;

        const typing = setTimeout(() => {
          isTyping.value = false;
          stop();
        }, 1500);

        onInvalidate(() => {
          clearTimeout(typing);
        })

      }
     })

     return{
      title,
      show,
      toggleShow,
      titleLengthMessage,
      counter,
      oddOrEven,
      searchText,
      isTyping
     };
  }
}
</script>