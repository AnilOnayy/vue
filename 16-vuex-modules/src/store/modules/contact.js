export default{
    namespaced : true,
    state :{
        contactName  : "puresol",
        contactAddress : "Canada"
    },
    
    mutations :{
        setContactName(state,contactName)
        {
            state.contactAddress = contactName;
        }
    },

    getters :{
        _getContactName: (state) => state.contactName
    }
}