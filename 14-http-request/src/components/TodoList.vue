<template>
    <ul v-if="todos().length > 0">
        
        <TodoListItem
            v-for="todo in todos()"
            :key="todo"
            :todo = "todo"
        />
        
    </ul>
    <span v-else class="bg-blue d-flex justify-content-center my-3"  style="padding:10px"> Henüz hiçbir todo eklenmedi. </span>
</template>


<script>

import TodoListItem from './TodoListItem.vue';

export default {
    components : {
        TodoListItem
    },
    inject : ["todos"]
}
</script>