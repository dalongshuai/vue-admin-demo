import {
    LOGINOUT,
    SET_TOKEN,
    CHECK_LANGUAGE
} from './mutations-types';
import { session, storage } from '@/utils';
import router from '@/router';

export const mutations = {
    [LOGINOUT] (state, data) {
        state.token = '';
        session.remove('token');
        router.push('/login');
    },
    [SET_TOKEN] (state, data) {
        state.token = data;
        session.set('token', data);
    },
    [CHECK_LANGUAGE] (state, data) {
        state.local = data;
        storage.set('lang', data);
        window.location.reload();
    }
};
