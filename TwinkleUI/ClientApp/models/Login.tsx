import { routerRedux, Router, RouteProps } from 'dva/router';

const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));

export interface LoginState {
    loginName: string,
    password: string,
    accountCode: string,
    rememberMe: boolean,
    checkCode: string,
    dispatch: any
}

export default {
    namespace: 'login',
    state: {
        loginName: "",
        password: "",
        accountCode: "",
        rememberMe: false,
        checkCode: "",

    },
    reducers: {
        Login(state) {
            return { ...state, accountCode:'12312312313'}
        }
    }
}
