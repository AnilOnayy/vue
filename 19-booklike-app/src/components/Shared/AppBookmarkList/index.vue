<template>
    <div>
        <div  v-if=" bookmarkList.length > 0 "  class="p-2 grid grid-cols-8 gap-4 bookmark-grid">
          <AppBookmarkListItem  :bookmark="bookmark" v-for="bookmark in bookmarkList" :key="bookmark" />
        </div>
        <div v-else style="padding:10px">
           Bo bookmark has been added this category.
      </div>
      </div>
     
     
</template>



<script>

import AppBookmarkListItem from './AppBookmarkListItem.vue';
export default {
  
    props : {
      bookmarkList :{
        type : Array,
        required :true,
        default : () => []
      }
    },

    components:{
        AppBookmarkListItem
    }
}
</script>


<style scoped>
@media screen and (max-width: 992px) {
  .bookmark-grid{
    grid-template-columns: repeat(2,1fr);
  }
}
</style>

