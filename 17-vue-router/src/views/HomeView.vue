<template>
    <h1>Home</h1>

<input type="text" @keydown.enter="goToDetails">

</template>



<script>
export default {
    methods :{
        goToDetails(e)
        {
            // this.$router.push(`detail/${e.target.value}`);
            this.$router.push({
                name: "DetailPage",
                params : {
                    id :  e.target.value
                },
                query :{
                    type : "DetailAuth",
                    user : "anilonayy"
                }

            });
        }
    }
}
</script>