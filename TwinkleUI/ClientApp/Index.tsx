import { message } from 'antd'
import dva from "dva";
import createLoading from 'dva-loading'
import createHistory from 'history/createBrowserHistory'
import router from "./Router";



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

    app.router(router);

    app.start("#root");
}

startApp();
