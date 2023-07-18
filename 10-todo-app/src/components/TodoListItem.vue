<template>
        <li class="d-flex justify-content-between">
            <span>{{ todo.text }} </span> 
           <button class="sm red" @click="deleteTodo(todo)">Sil</button>
        </li>
</template>


<script>
    export default {
       props :  ["todo"]
    }
</script>