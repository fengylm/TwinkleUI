import { routerRedux } from 'dva/router';
import request from '../utils/request';


export default {
    namespace: 'loginModel',

    state: {
        title:'企明星'
    },
    reducers: {
        login1(state, { payload }) {
            return { ...state }
        }
    },
    effects: {
        * login({ payload }, { put, call, select }) {
            const { data } = yield request("Home/fetchData", payload);

            if (data.success) {
                yield put({ type: "login1", payload: { ...payload } });
                yield put({ type: "appModel/updateState", payload: { a:"bbb" } });
             //   yield put(routerRedux.push('/login'))
            }
        },
    }
}
