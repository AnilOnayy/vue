<template>
   <input type="text"  @keydown.enter="onSave" >
</template>


<script>
export default {
    inject : ["onSave"]
}
</script>