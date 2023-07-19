const app = Vue.createApp({

    data () {
        return {
            itemList : ["elma","armut","ayva","çilek"],
            search : ""
        }
    },
    computed: {
        filteredList()
        {
            return  this.itemList.filter( (v) => v.includes(this.search));
        }
    }
}).mount("#app");