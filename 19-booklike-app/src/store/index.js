import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

export default createStore({
    state: {
        user :null,
        saltKey : "booklik123!456?"
    },

    mutations : {
        setUser(state,user)
        {
            state.user = user || {};
        },
        logoutUser(state)
        {
            state.user = null;
        }
    },

    getters :{
        _getCurrentUser(state){
            const user = state.user;
            delete user?.password;
            return user;
        } ,
        _isAuthenticated : state => state.user !== null,
        _saltKey : state => state.saltKey
        
    },

    plugins : [createPersistedState({
        // key : "user" // spesific key name for local sto
        storage: {
            getItem: (key) => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: (key) => ls.remove(key),
          }
    })]
});