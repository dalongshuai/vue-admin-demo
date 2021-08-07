import {
    USER_LOGOUT,
    USER_LOGOUT_SUCCESS
} from './mutations-types';

export const action = {
    logout ({ commit }) {
        commit(USER_LOGOUT);
        return new Promise((resolve, reject) => {
            commit(USER_LOGOUT_SUCCESS);
            resolve();
        });
    }
};
