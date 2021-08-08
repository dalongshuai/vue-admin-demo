import router from '@/router';

export const getters = {
    language (state, getters) {
        return state.language[state.local][router.app._route.name];
    }
};
