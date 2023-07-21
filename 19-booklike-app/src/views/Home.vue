<template>
   <div class="flex flex-row">
        <SideBar />
        <AppBookmarkList/>
   </div>
</template>


<script>

import SideBar from '@/components/Home/SidebarComp.vue'

export default {
    components:{
        SideBar
    }
}
</script>