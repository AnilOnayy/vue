<template>
  <div class="bg-green text-white">Green Component</div>

  <slot/>
</template>


<script>
export default {
  mounted () {
        console.log("Green Mounted");
    },
    unmounted () {
        console.log("Green Is Unmounted");
    },

    // Lifecyle hooks for keep-alive components
    activated() {
        console.log("Green Is Activated");
    },
    deactivated(){
        console.log("Green Is Deactivated");
    }
}
</script>