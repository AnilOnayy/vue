<template>
    <div>
        <div class="p-2 grid grid-cols-8 gap-4">
          <AppBookmarkListItem  :bookmark="bookmark" v-for="bookmark in bookmarkList" :key="bookmark" />
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