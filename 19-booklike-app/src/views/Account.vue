<template>
    <div class="flex flex-row">
        <side-bar />
        <AppBookmarkList :bookmarkList="bookmarkList" />
    </div>
</template>



<script>
import SideBar from '@/components/Account/SideBar.vue'
import AppBookmarkList from '@/components/Shared/AppBookmarkList';
export default {
    data() {
        return {
            bookmarkList: []
        }
    },

    created() {
        this.$appAxios.get(`/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}`)
        .then(response => {
            this.bookmarkList = response?.data || [];
        })
    }

    components: {
        SideBar,
        AppBookmarkList
    }
}
</script>