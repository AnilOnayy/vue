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