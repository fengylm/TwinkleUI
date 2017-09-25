import { routerRedux } from 'dva/router';
import { parse } from 'qs';
import queryString from 'query-string';
import { request } from "../utils";

export default {
    namespace: 'appModel',
    state: {
        user: {},
        permissions: {
            visit: [],
        },
        locationPathname: '',
        locationQuery: {},
    },
    subscriptions: {
        setupHistory({ dispatch, history }) {
            history.listen((location) => {
                dispatch({
                    type: 'updateState',
                    payload: {
                        locationPathname: location.pathname,
                        locationQuery: queryString.parse(location.search),
                    },
                })
            })
        },
        setup({ dispatch }) {
            dispatch({ type: 'query' })
            let tid
            window.onresize = () => {
                clearTimeout(tid)
                tid = setTimeout(() => {
                    dispatch({ type: 'changeNavbar' })
                }, 300)
            }
        },

    },
    effects: {

        * query({payload}, { call, put, select }) {
            const { locationPathname } = yield select(_ =>_.appModel)
            const { data } = yield request("Home/fetchData", payload);

            if (false) {
               
            } else if (true) {
                //yield put(routerRedux.push({
                //    pathname: '/login',
                //    search: queryString.stringify({
                //        from: "",
                //    }),
                //}))
            }
        }
    },
    reducers: {
        updateState(state, { payload }) {
            return {
                ...state,
                ...payload,
            }
        }
    }
}
