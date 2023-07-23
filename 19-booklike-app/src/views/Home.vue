<template>
   <div class="flex flex-row">
        <SideBar @category-change="updateBookMarkList" />
        <AppBookmarkList  :bookmarkList="bookmarkList" />
   </div>
</template>


<script>

import SideBar from '@/components/Home/SidebarComp.vue'
import { mapGetters } from 'vuex';

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
        this.$socket.on("NEW_BOOKMARK_ADDED",(bookmark) => {
            this.bookmarkList.push(bookmark);
        })
        this.fetchData();

    },
    computed :{ 
        ...mapGetters(["_getCurrentUser"])
    },
    methods:{
        updateBookMarkList(categoryId)
        {
            if(categoryId==null)
            {
                this.fetchData();
            }
            else{
                this.$appAxios.get(`/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}`)
                .then(response => {
                    this.bookmarkList = response?.data || [];
                })
            }
           
        },
        fetchData()
        {
            this.$appAxios.get("/bookmarks?_expand=category&_expand=user")
            .then(response => {
                this.bookmarkList = response?.data || [];
            });
            
            this.$appAxios.get(`/user_likes?userId=${this._getCurrentUser.id}`)
            .then(response => {
                this.$store.commit("setLikes",response.data);
            });

            this.$appAxios.get(`/user_bookmarks?userId=${this._getCurrentUser.id}`)
            .then(response => {
                this.$store.commit("setBookmarks",response.data);
            })
        }
    }
}
</script>