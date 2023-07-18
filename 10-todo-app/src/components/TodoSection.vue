<template>
        <!-- <TodoList :todos="this.todos"  @delete-todo-item="deleteTodo" /> -->
        <TodoList />
        <TodoResultBar  />
</template>



<script>
import TodoResultBar from '@/components/TodoResultBar.vue';
import TodoList from '@/components/TodoList.vue';

    export default({

        components :{
            TodoList,
            TodoResultBar,
        }
    });
</script>