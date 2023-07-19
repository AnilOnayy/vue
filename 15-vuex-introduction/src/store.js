import {  createStore } from 'vuex'

const store = createStore({
    state: {
        user :{
            name : 'John',
            lname : 'Onay',
            age :21,
            address:{},
            password : 1231212,
            tc : 11111111111
        },
        fullName : "Anıl Onay",
        theme :"dark",
        permissions :  [1,2,3,4,5],
        userList : [
            "Cengizhan",
            "Anıl",
            "İrem",
            "Mert",
            "Fatma"
        ],
        itemList :[
            {id :1 , title : "Masa",  type : "mobilya"},
            {id :2 , title : "Sandalye",  type : "mobilya"},
            {id :3 , title : "Tv",  type : "elektronik"},
            {id :4 , title : "Monitör",  type : "elektronik"},
            {id :5 , title : "Bardak",  type : "plastik"},
        ]
    },

    mutations : { //  all of the operations working in here.
                 // but mutations are  sync , for this reason we using mutations in actions.
        newUser(state,user){
            state.userList.push(user);
        }
    },

    actions : { // working async better than mutations
        // newUser(context,item){ // first parameter  context is working like instance a vuex.
        //     setTimeout(() => {
        //         context.commit("newUser",item);
        //     }, 2000);
        // },
        newUser({commit},item){ // first parameter  context is working like instance a vuex.
            setTimeout(() => {
                commit("newUser",item);
            }, 2000);
        },
    },

    getters :{
        _woodItems : state => state.itemList.filter(i => i.type=="mobilya"),
        
        _activeUser(state) {
            const user = { ...state.user };
            delete user.password;

            return user;
        },
        _getUsers: state =>  state.userList,

    }
})


export default store;