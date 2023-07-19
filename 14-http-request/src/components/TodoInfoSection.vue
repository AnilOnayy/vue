<template>
    <TodoList/>
    <TodoResultBar/>
</template>


<script>
    import TodoList from './TodoList.vue';
    import TodoResultBar from './TodoResultBar.vue';


     export default {
        components : {
            TodoList,
            TodoResultBar
        }
     }
</script>