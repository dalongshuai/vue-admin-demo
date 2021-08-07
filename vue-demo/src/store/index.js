import Vue from 'vue';
import Vuex from 'vuex';
import { action } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { session } from '@/utils';

Vue.use(Vuex);

const token = session.get('token') || '';

export default new Vuex.Store({
    state: {
        count: 1,
        token: token
    },
    mutations: mutations,
    actions: action,
    getters: getters
});
