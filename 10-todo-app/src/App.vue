<template>
  <div class="container">
    <h3 class="text-center">Todo App</h3>

    <!-- <AddTodo  @add-new-todo="addTodo" /> -->
    <AddTodo  :addTodo="addTodo" />
  
    <TodoSection  :delete-todo="deleteTodo" />
    
 
  </div>
</template>

<script>

import AddTodo  from '@/components/AddTodoComponent.vue';
import TodoSection from '@/components/TodoSection.vue';

export default {
    created () {
      setTimeout(() => {
        this.provideData.todos = [
          { id: 1, text: "Bootcamp #2" },
          { id: 2, text: "Bootcamp #2.1 " },
          { id: 3, text: "Bootcamp #2.2 " },
          { id: 4, text: "Bootcamp #2.3 " },
          { id: 5, text: "Bootcamp #2.4 " },
        ];
      }, 1000);
      
    },

  data() {
   
    return {
      provideData :{
        todos :[]
      },
      
    }

  },
  provide () {
    return {
      provideData : this.provideData,
      deleteItem : this.deleteTodo
    }
  },

  methods: {

    deleteTodo(todo) {
      this.provideData.todos = this.provideData.todos.filter(todos => todos.id != todo.id);
    },

    addTodo(event) {
      this.provideData.todos.push({
        id: new Date().getTime() + Math.ceil(Math.random() * 1000000),
        text: event.target.value
      });
      event.target.value = "";
    },
   
  },
  components : {
     AddTodo,
     TodoSection,
  }
}
</script>
