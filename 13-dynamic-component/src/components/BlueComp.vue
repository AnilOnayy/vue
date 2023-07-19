<template>
    <div class="bg-blue text-white">Blue Component</div>
    <input type="text" >
</template>


<script>
export default {
    mounted () {
        console.log("Blue Mounted");
    },
    unmounted () {
        console.log("Blue Is Unmounted");
    },

    // Lifecyle hooks for keep-alive components
    activated() {
        console.log("Blue Is Activated");
    },
    deactivated(){
        console.log("Blue Is Deactivated");
    }
}
</script>