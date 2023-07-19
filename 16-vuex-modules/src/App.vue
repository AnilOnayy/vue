<template>
  <p>
    {{ $store.state.mainName }}
    
  </p>
  <p>
    <!-- {{ $store.state.contact.contactName }} -->
    {{ musteriAdi }}

  </p>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  created()
  {
      console.log(this.$store.getters["contact/_getContactName"]);
  },
  computed : {
    ...mapGetters({
      musteriAdi : "contact/_getContactName",
    })
  }
}
</script>
