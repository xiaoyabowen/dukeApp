
Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        count: []
    },
    mutations: {
        add(state) {
            state.count++
        },
        isPage: function(state, page) {
            state.page = page;
        }
    }
})