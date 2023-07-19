const app = Vue.createApp({
    data () {
        return {
            showContainer :true,
            counter  : 0
        };
    },
    computed:{
        bgStatement(){
            return{
                "bg-danger ": this.counter < 0,
                "bg-info ": this.counter > 0,
                "bg-warning ": this.counter === 0,
                "text-white p-2" : true
            }
        }
    }

}).mount("#app");