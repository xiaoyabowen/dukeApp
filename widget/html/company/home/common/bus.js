
Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        obj:{
            job_id: '',
            job_name: '',
            job_icon: '',
            job_type: '',
            magicCom: 'magicComAll',

        },
        newMagicList:[],

    },
    mutations: {

        isPage: function(state, page) {
            console.log(state)
        },
        updateMagicList: function(state,list,isFillter){
          //  console.log(json,'211111');
          console.log(state,'commit')
          state.newMagicList = list;
        }
    },
    actions:{
      loadMagicData({commit},payload){
          // console.log(payload,'222222')
          return new Promise((res,ret)=>{
            ajaxGetWithProgress(filterScreen, payload, function(data) {
                console.log(data, 'dispatch')
                commit('updateMagicList',data.list,payload.isFiltter);
                res();
            })
          })
      }
    }
})
