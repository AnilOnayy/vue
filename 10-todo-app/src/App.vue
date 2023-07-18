<template>
  <div class="container">
    <h3 class="text-center">Todo App</h3>

    <AddTodo  @test-event="addTodo" />
    <TodoList :todos="this.todos"/>
    Hello World :D
  </div>
</template>

<script>

import AddTodo  from '@/components/AddTodoComponent.vue';
import TodoList from '@/components/TodoList.vue';

export default {
    created () {
      setTimeout(() => {
        this.todos = [
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
      todos : [],
    }

  },

  methods: {

    deleteTodo(todo) {
      this.todos = this.todos.filter(todos => todos.id != todo.id);
    },

    addTodo(event) {
      this.todos.push({
        id: new Date().getTime() + Math.ceil(Math.random() * 1000000),
        text: event.target.value
      });
      event.target.value = "";
    },
   
  },
  components : {
     AddTodo,
     TodoList
  }
}
</script>
