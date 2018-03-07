//import { routerRedux } from 'dva/router';
//import { parse } from 'qs';
//import queryString from 'query-string';
//import { request } from "../utils";

export default {
    namespace: 'appModel',

    state: {
        auth: { data: {} },
        responsive: { data: {} }
    },
    reducers: {
        responsive(state, { payload }) {
            return {
                ...state,
                responsive: {
                    data: {
                        ...state.responsive.data,
                        ...payload
                    }
                }
            }
        },
        auth(state, { payload }) {
            return { ...state, ...payload }
        }
    },
    effects: {

    }
}
