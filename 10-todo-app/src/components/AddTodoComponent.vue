<template>
    <label for="">Task</label>
    <input @keydown.enter="addTodo"  type="text" id="todo" placeholder="Bir şeyler yazınız." />
</template>



<script>
    export default {
        props : {
            addTodo : {
                type : Function
            }
        }
        // methods :{
        //     addTodo(e) {
        //         this.$emit("add-new-todo",e);
        //     }
        // }
    };
</script>