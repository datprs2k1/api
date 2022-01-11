import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import Auth from './modules/Auth';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        Auth
    },
    plugins: [createPersistedState()]
});

export default store;
