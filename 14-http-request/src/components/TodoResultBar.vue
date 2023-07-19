<template>
    <span class="d-flex justify-content-end">  {{ todos().length || 0  }} Adet Todo Var. </span>
</template>


<script>
export default {
    inject : ["todos"]
}
</script>