<template>
      <ListSection  />
      <AddSection  />
</template>



<script>

import ListSection from '@/components/ListSection.vue'
import AddSection from './AddSection.vue';
export default {
    
    components:{
        ListSection,
        AddSection
    }
}
</script>
