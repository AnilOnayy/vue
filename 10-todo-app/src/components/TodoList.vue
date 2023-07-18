<template>
    <ul>
        <!-- <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @delete-todo-item="$emit('delete-todo-item',$event)"   /> -->
        <TodoListItem v-for="todo in provideData.todos" :key="todo.id" :todo="todo"    />
    </ul>
</template>



<script>
import TodoListItem from './TodoListItem.vue';
    export default {

        inject : ["provideData"],
        components :{
            TodoListItem
        },

        

    }
</script>