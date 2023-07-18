<template>
        <li class="d-flex justify-content-between">
            <span>{{ todo.text }} </span> 
           <!-- <button class="sm red" @click="$emit('delete-todo-item',todo)">Sil</button> -->
           <button class="sm red" @click="deleteTodo(todo)">Sil</button>
        </li>
</template>


<script>
    export default {
       props : {
            todo : {
                type : Object
            },
            deleteTodo : {
                type : Function
            }

       },

    //    methods:{
    //     deleteTodo (todo){
    //         this.$emit("delete-todo",todo);
    //     }
    //    }
    }
</script>