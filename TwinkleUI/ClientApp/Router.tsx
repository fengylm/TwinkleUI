import React from 'react';
import { Router, Switch, Route, routerRedux, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import { App } from "./components"

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {

    //处理动态加载model,获取不到namespace的问题
    function resolveModel(models: Array<Promise<any>>) {

        let newArray: Array<Promise<any>> = [];

        models.map((value, index) => {
            newArray.push(value.then(v => v.default));
        });

        return () => newArray;
    }

    const error = dynamic({
        app,
        component: () => import('./routes/error'),
    })

    const routes = [
        {
            path: "/login",
            models: () => [import("./models/Login")],
            component: () => import("./routes/login")
        },
        {
            path: "/user",
            models: () => [import("./models/user"), import("./models/Login")],
            component: () => import("./routes/user")
        }
    ];

    return (
        <ConnectedRouter history={history}>
            <App>
                <Switch>
                    {/*<Route exact path="/" render={() => (<Redirect to="/dashboard" />)} />*/}
                    {
                        routes.map(({ path, models, component }, key) => (
                            <Route key={key}
                                exact
                                path={path}
                                component={dynamic({
                                    app,
                                    models: resolveModel(models()),
                                    component
                                })}
                            />
                        ))
                    }

                </Switch>
            </App>
        </ConnectedRouter>
    );
}

export default RouterConfig;