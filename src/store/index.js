import Vuex from 'vuex';
import Vue from 'vue';
import CategoryModule from './categoryModule';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        CategoryModule
    }
})