import Vue from 'vue/dist/vue.min.js';
import Vuex from 'vuex';
import issues from './modules/issues.js'

Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        issues
    }
})