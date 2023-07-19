<template>
  <div class="container">
    <h3>Todo List</h3>
    <TodoAdd/>
    <TodoInfoSection/>
  </div>

</template>


<script>
import axios from 'axios';
import TodoAdd from './components/TodoAdd.vue';
import TodoInfoSection from './components/TodoInfoSection.vue';


export default {

  data () {
    return {
      provideData : {
        todos : []
      }
    }
  },

  mounted() {
    this.getAll();
  },

  provide (){
    return {
      todos :() => this.provideData.todos,
      onSave : this.onSave,
      onTaskDelete : this.onTaskDelete
    }
  },


  methods : {
    onTaskDelete(todo){
      axios.delete(`http://localhost:3000/todos/${todo.id}`)
      .then(() => {
        this.provideData.todos = this.provideData.todos.filter(todos => todos.id != todo.id);
      })
      
    },
    getAll(){
      axios.get("http://localhost:3000/todos")
      .then(res => {
        this.provideData.todos =res.data;
      })
    },
    onSave(e)
    {
      let newTodo = {
        id : new Date().getTime(),
        title : e.target.value,
        created_at :new Date(),
        completed : false
      };

      axios.post("http://localhost:3000/todos",newTodo)
      .then(res => {
        this.provideData.todos.push(res.data);
      })
     

      e.target.value = "";
      e.target.focus();
    }
  },

  components: {
    TodoAdd,
    TodoInfoSection
  }
}

</script>