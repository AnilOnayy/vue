const app = Vue.createApp({

    data (){
        return {
            inputName : "1231232"
        }
    },
    methods :{
        changeInput(event){
            let text = event.target.value;
            this.inputName =  text;
        }
    }

}).mount("#app");