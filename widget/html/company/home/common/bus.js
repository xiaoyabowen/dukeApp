
Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        obj:{
            job_id: '',
            job_name: '',
            job_icon: '',
            magicCom: 'magicAll'
        }
    },
    mutations: {

        isPage: function(state, page) {
            console.log(state)
        }
    }
})
