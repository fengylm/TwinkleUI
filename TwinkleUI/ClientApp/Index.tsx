import * as React from "react";
import { message } from 'antd'
import dva from "dva";
import createLoading from 'dva-loading'
import createHistory from 'history/createBrowserHistory'

import router from "./Router";
import LoginModels from "./models/Login";


function startApp() {
    // 1. Initialize
   const app = dva({
       ...createLoading({
           effects: true,
       }),
       history: createHistory(),
       onError(error) {
           message.error(error.message)
       }
   })
    // 2. Plugins
    // app.use({});

    // 3. Model
    app.model(LoginModels);

    // 4. Router
    app.router(router);

    // 5. Start
    app.start("#root"); 
}
startApp();

if (module.hot) {
    module.hot.accept('./Router', () => {
        startApp();
    });
}