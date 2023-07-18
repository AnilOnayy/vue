<template>
    <ul>
        <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo"   />
    </ul>

</template>



<script>
import TodoListItem from './TodoListItem.vue';
    export default {
        props : ["todos"],
        components :{
            TodoListItem
        }
    }
</script>