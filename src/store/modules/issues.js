// import store            from '../'
// import {router}         from '../../router/router.js'

// initial state

const state = {
    example: ''
}

// getters

const getters = {
    getExample:    (state) => state.example
}

// actions
const actions = {
    setExaple({commit}, example){
        commit('SET_EXAMPLE', example)
    }
}

// mutations
const mutations = {
    SET_EXAMPLE(state, example) {
        state.example = example
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}