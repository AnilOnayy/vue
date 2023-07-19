<template>
    <div class="bg-red text-white">{{msg}}</div>
</template>


<script>

export default {
    props :["msg"],


    mounted () {
        console.log("Red Mounted");
    },
    unmounted () {
        console.log("Red Is Unmounted");
    },

       // Lifecyle hooks for keep-alive components
    activated() {
        console.log("Red Is Activated");
    },
    deactivated(){
        console.log("Red Is Deactivated");
    }
}

</script>