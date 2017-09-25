import { message } from "antd";
import dva from "dva";
import createLoading from "dva-loading";
import createHistory from "history/createBrowserHistory";
import router from "./Router";
import appModel from "./models/app";



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
    app.model(appModel)

    app.router(router);

    app.start("#root");
}

startApp();
