<template>
    <div>
        <div class="p-2 grid grid-cols-8 gap-4">
      
          <AppBookmarkListItem  v-for="i in 30" :key="i" />
        </div>
      </div>
</template>



<script>

import AppBookmarkListItem from './AppBookmarkListItem.vue';
export default {

    components:{
        AppBookmarkListItem
    }
}
</script>