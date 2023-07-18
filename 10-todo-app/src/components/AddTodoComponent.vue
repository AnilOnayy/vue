<template>
    <label for="">Task</label>
    <input @keydown.enter="sendData"  type="text" id="todo" placeholder="Bir şeyler yazınız." />
</template>



<script>
    export default {
        methods :{
            sendData(e) {
                this.$emit("test-event",e);
            }
        }
    };
</script>