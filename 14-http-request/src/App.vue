<template>
  <div class="container">
    <h3>Alışveriş Listesi</h3>
    <div>
      <input type="text" placeholder="Ne Alacaksın?"  @keydown.enter="onSave" >
    </div>
    

    <ul v-if="todoList.length > 0">
      <li 
      v-for="todo in todoList"
      :key ="todo"
      class="d-flex align-items-center justify-content-between">
        <span> {{ todo.title }} </span>
        <button class="sm red"  @click="onDelete(todo)" >Sil</button>
      </li>
      
    </ul>
    <div v-else class="bg-blue p-4 text-center my-2" style="padding:10px">
        Henüz hiçbir ürün yok.
    </div>
    <small class="text-blue text-right d-flex justify-content-end mt-4">{{ todoList.length || 0  }} adet alınacak ürün vardır.</small>
  </div>
</template>


<script>

import axios from 'axios'

export default {
  data(){
    return {
      todoList : []
    }
  },

  mounted () {
    axios.get("http://localhost:3000/items")
    .then(response => {
      this.todoList  = response.data || [];
    })
  },
 
  methods :{
    onSave(e){
      axios.post("http://localhost:3000/items",{
        title :e.target.value,
        created_at  :new Date(),
        completed : false 
      })
      .then(response => {
        this.todoList.push(response.data);
        e.target.value = "";
        e.target.focus();
      })
    },
    onDelete(todo){
      axios.delete(`http://localhost:3000/items/${todo.id}`)
      .then(response => {
          console.log(response);
          this.todoList = this.todoList.filter(t => t.id !== todo.id);
      })
    }
  }
}

</script>