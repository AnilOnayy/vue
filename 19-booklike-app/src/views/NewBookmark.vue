<template>
     <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Add New</h3>
      <input  ref="title" v-model="data.title" type="text" placeholder="Title" class="input mb-3" />
      <input v-model="data.url" type="text" placeholder="URL" class="input mb-3" />
      <select v-model="data.category_id" class="input mb-3">
        <option disabled value="0"  selected>Select Category</option>
        <option 
        v-for="category in categories" 
        :value="category.id" 
        :key="category"
     
        >
            {{ category.name }}
        </option>
  
      </select>
      <textarea v-model="data.description" placeholder="Description" class="input mb-3" cols="30" rows="10"></textarea>
      <div class="flex items-center justify-end gap-x-1">
        <button @click="$router.push({name : 'Home' })" class="secondary-button">Cancel</button>
        <button @click="onSave" class="default-button">Submit</button>
      </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
    data()
    {
        return{
            data : {
                title : null,
                url : null,
                category_id : 0,
                description:null
            },
            categories :  []
        }
    },

    mounted()
    {
        this.$appAxios.get("/categories")
        .then(response => {
            this.categories = response?.data || [];
        });

        
        console.log(this.$refs.title); // sometimes this is not working , this is a bug of vue js

        // absoluetly working version
        this.$nextTick(() => {
            console.log(this.$refs.title);
            this.$refs.title.focus()
        })
    },

    computed : {
     ...mapGetters(["_getCurrentUser"])   
    },  

    methods :{
        onSave(){
            console.log(this.data);
            let requestBody  = {
                ...this.data,
                user_id : this._getCurrentUser.id,
                created_at : new Date()
            };
            this.$appAxios.post("/bookmarks",requestBody)
            .then(save_response => {
                console.log(save_response);
                Object.keys(this.data).forEach( field => this.data[field] = null ); // reset all fields
            })
        }
    }
}
</script>