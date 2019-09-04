
Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        obj:{
            job_id: '',
            job_name: '',
            job_icon: '',
            job_type: '',
            magicCom: 'magicComAll'
        }
    },
    mutations: {

        isPage: function(state, page) {
            console.log(state)
        }
    }
})
