<template>
    <button @click="updateName">Add New User</button>
</template>


<script>
    export default{
        methods :{
            updateName()
            {
                this.$store.state.userList.push("İrem - "+ new Date().getTime());
            } 
        }
    }
</script>