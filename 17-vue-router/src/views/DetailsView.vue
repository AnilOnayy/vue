<template>
    <h1>Details</h1>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum animi, amet autem nam sapiente odit obcaecati facere neque sint.
    </p>

    {{ $route.params.id }}

    <div>
        params :{{ $route.query }}
    </div>
    <button class="button" @click="goBack"  >Geri Dön</button>
</template>


<script>
export default {

    

    created(){
        console.log(this.$route);
    },


    methods :{
        goBack()
        {
            this.$router.push("/");
        }
    }
}
</script>