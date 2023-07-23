<template>
    <AppHeader />
    <router-view></router-view>
</template>


<script>
export default {
    mounted()
    {
        this.$socket.on("NEW_BOOKMARK_ADDED",(data) => {
            console.log("NEW DATA FROM SOCKET",data);
        })
    }
}
</script>