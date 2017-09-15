import * as React from "react"; 
import { Router, Route } from "dva/router";

import Login from "./components/Login";


function routerConfig({ history }) {
    return (
        <Router history={history}>
            <Route path="/" component={Login} />
        </Router>
    );
}

export default routerConfig;