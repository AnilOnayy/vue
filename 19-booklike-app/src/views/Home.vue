<template>
   <div class="flex flex-row">
        <SideBar @category-change="updateBookMarkList" />
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
    mounted()
    {
        this.fetchAllCategories();

    },
    methods:{
        updateBookMarkList(categoryId)
        {
            if(categoryId==null)
            {
                this.fetchAllCategories();
            }
            else{
                this.$appAxios.get(`/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}`)
                .then(response => {
                    this.bookmarkList = response?.data || [];
                })
            }
           
        },
        fetchAllCategories()
        {
            this.$appAxios.get("/bookmarks?_expand=category&_expand=user")
            .then(response => {
                this.bookmarkList = response?.data || [];
            })
        }
    }
}
</script>