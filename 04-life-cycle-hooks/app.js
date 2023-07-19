const app = Vue.createApp({
    data(){
        return {
            title : "Test Title",
            itemList :[]
        }
    },

    beforeCreate(){
        console.log("beforeCreate Worked");
    },
    created(){
        console.log("created Worked");
        setTimeout(() => {
            this.itemList = [1,2,3,4,5,6]
            
        }, 2000);

        setTimeout(() => {
            this.title = "New Title";
        }, 2000);
    },
    beforeMount(){
        console.log("beforeMount Worked");
    },
    mounted(){
        console.log("mounted Worked");
    },
    beforeUpdate(){
        console.log("beforeUpdate Worked");
    },
    updated(){
        console.log("updated Worked");
    },
    beforeUnmount(){
        console.log("beforeUnmount Worked");
    },
    unmounted(){
        console.log("unmounted Worked");
    }
});

app.mount("#app");

setTimeout(() => {
    app.unmount();
}, 5000);