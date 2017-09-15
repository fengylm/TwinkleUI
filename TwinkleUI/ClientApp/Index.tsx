import * as React from "react";
import dva, { connect } from "dva";
import { Router, Route } from "dva/router";
import LoginModels from "./models/Login";
import router from "./Router";
//import { AppContainer } from 'react-hot-loader';

const app = dva();

app.model(LoginModels);

app.router(router);

app.start("#root"); 

//if (module.hot) {
//    module.hot.accept('./Router', () => {
//        app.start("#root"); 
//    });
//}