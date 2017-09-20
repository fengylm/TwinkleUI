import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import dynamic from 'dva/dynamic';
import LoginModels from "./models/Login";

function RouterConfig({ history, app }) {

    //处理动态加载model,获取不到namespace的问题
    function resolve(models: Array<Promise<any>>) {

        let newArray: Array<Promise<any>> = [];

        models.map((value, index) => {
            newArray.push(value.then(v => v.default));
        });

        return newArray;
    }

    const error = dynamic({
        app,
        component: () => import('./routes/error'),
    })

    const routes = [
        {
            path: "/",
            models: () => resolve([import("./models/Login")]),
            component: () => import("./routes/login")
        }
    ];

    return (
        <Router history={history}>
            <Switch>
                {
                    routes.map(({ path, ...dynamics }, key) => (
                        <Route key={key}
                            exact
                            path={path}
                            component={dynamic({
                                app,
                                ...dynamics
                            })}
                        />
                    ))
                }

            </Switch>
        </Router>
    );
}

export default RouterConfig;