import * as React from 'react';
import NProgress from 'nprogress';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import "./App.less";
import { Loader } from "../../components";

let lastHref;

interface AppProps {
    loading,
    dispatch,
    children,
    app,
    location
}


class App extends React.Component<AppProps, {}>{
    constructor(props) {
        super(props);
    }

    public render() {

        const href = window.location.href;
       
        if (lastHref !== href) {
            NProgress.start()
            if (!this.props.loading.global) {
                NProgress.done()
                lastHref = href
            }
        }

        return (<div>
            <Loader fullScreen spinning={this.props.loading.effects['appModel/query']} loaderText="加载中.." />
            哇哈哈 我是框架部分的页面
            {this.props.children}
        </div>);
    }


}
//appModel 是注入的model的namespace loading是全局注入对象
export default withRouter(connect(({ appModel, loading }) => ({ appModel, loading }))(App))
