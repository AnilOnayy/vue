<template>
    <ul>
        <!-- <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @delete-todo-item="$emit('delete-todo-item',$event)"   /> -->
        <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" :deleteTodo="deleteTodo"   />
    </ul>
    <span class="mt-2 d-flex justify-content-end"> {{todos.length}} adet todo var. </span>
</template>



<script>
import TodoListItem from './TodoListItem.vue';
    export default {
        props :{
            todos : {
                type : Array,
            },
            deleteTodo : {
                type : Function
            }
        },
        components :{
            TodoListItem
        },

    }
</script>