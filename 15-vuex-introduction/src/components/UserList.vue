<template>
    <div>
        {{ users }}
    </div>

</template>


<script>

import { mapGetters } from 'vuex';

export default {
    computed :{
        ...mapGetters({
            users : "_getUsers"
        })
    }
}
</script>