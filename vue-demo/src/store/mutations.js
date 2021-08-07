import {
    ADD_COUNT,
    SET_TOKEN
} from './mutations-types';
import { session } from '@/utils';

export const mutations = {
    [ADD_COUNT] (state, data) {
        state.count++;
    },
    [SET_TOKEN] (state, data) {
        state.token = data;
        session.set('token', data);
    }
};
