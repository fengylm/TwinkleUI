import * as React from "react";
import { Switch, Route, Redirect, routerRedux } from 'dva/router'

import Login from "./routes/login/index";

import LoginModels from "./models/Login";

const { ConnectedRouter } = routerRedux;


function routerConfig({ history }) {

    const routes = [
        {
            path: '/Login',
            models: () => [LoginModels],
            component: () => Login
        }
    ]
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact  path="/" component={Login} />
            </Switch>
        </ConnectedRouter>
    );
}

export default routerConfig;