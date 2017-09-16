import { routerRedux } from 'dva/router';

export default {
    namespace: 'login',

    state: {},

    effects: {
        * login({ payload }, { put, call, select }) {
            const data = yield call(null, payload)

            if (data.success) {
                yield put(routerRedux.push('/login'))
            }
        },
    },

}
