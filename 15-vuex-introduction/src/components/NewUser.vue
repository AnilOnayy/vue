<template>
    <button @click="updateName">Add New User</button>
</template>


<script>
    export default{
        methods :{
            updateName()
            {
                const value = "İrem - "+ new Date().getTime();
                // this.$store.commit("newUser",value); // For mutations
                this.$store.dispatch("newUser",value); // For actions
                // this.$store.state.userList.push(value);
            } 
        }
    }
</script>