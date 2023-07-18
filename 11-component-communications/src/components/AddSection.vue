<template>
    <button   @click="addUser(new Date().getTime())" >Set New Value</button>
</template>


<script>
export default {
    inject :["addUser"]
}
</script>