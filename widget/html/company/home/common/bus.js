
Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        obj:{
            c_id: '',
            c_name: '',
            logo_icon: '',
            magicCom: 'magicAll'
        }
    },
    mutations: {

        isPage: function(state, page) {
            console.log(state)
        }
    }
})
