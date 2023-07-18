<template>
     <span class="mt-2 d-flex justify-content-end"> {{provideData.todos.length}} adet todo var. </span>
</template>


<script>
    export default{
        inject :["provideData"]
    }
</script>