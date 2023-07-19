import {createStore} from 'vuex'
import contact from './modules/contact';
import taskManager from './modules/taskManager';


const store  = createStore({
    
    state : {
        mainName : "Reksnomq"
    },
    modules :{
        contact,
        taskManager
    }
})


export default store;