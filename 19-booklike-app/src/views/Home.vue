<template>
   <div class="flex flex-row">
        <SideBar />
        <AppBookmarkList  :bookmarkList="bookmarkList" />
   </div>
</template>


<script>

import SideBar from '@/components/Home/SidebarComp.vue'

export default {
    data() {
        return{
            bookmarkList :[]
        }
    },  
    components:{
        SideBar
    },

    created()
    {
        this.$appAxios.get("/bookmarks?_expand=category&_expand=user")
        .then(response => {
            this.bookmarkList = response?.data || [];
        })
    }
}
</script>