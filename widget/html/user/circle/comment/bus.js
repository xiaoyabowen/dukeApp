
Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        obj:{
            c_id: '',
            company_c_id: '',
            cirId: '',
            cir_suggest: '',
            job_type: '',
            c_name: '',
            logo_icon: '',
            magicCom: 'magicAll',
            type: '',
            id: '',
            title: '',
        }
    },
    mutations: {

        isPage: function(state, page) {
            //console.log(state)
        },
        upData: function(state, obj) {
            //console.log("upDatmutationsa",obj)
            state.obj = {
                ...obj
            }
            state.obj.c_id = obj.magicComCid1
            state.obj.c_name = obj.magicCom1Text
            state.obj.logo_icon = obj.magicCom1Img
            state.obj.magicCom =  obj.magicCom
        }
    }
})
