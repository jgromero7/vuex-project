import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        message: ''
    },
    mutations: {
        increment(state, value) {
            state.message = value
        }
    },

    getters: {
        getMessage: (state) => {
            return state.message
        }
    },

    strict: process.env.NODE_ENV !== 'production'
})

export default store