import * as React from 'react';
import { Layout } from 'antd';
//import './style/index.less';
import { SiderCustom, HeaderCustom } from '../components';
//import { receiveData } from './action';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
const { Content, Footer } = Layout;
import "../styles/app.less"

class App extends React.Component<any, {}>{
    constructor(props) {
        super(props);
    }

    state = {
        collapsed: false,
    };
    componentWillMount() {
        const { receiveData } = this.props;
        const user = JSON.parse(localStorage.getItem('user'));
        user && this.props.dispatch({ type: "appModel/auth", payload: { user } });

        this.getClientWidth();
        window.onresize = () => {
            this.getClientWidth();
        }
    }
    getClientWidth = () => {    // 获取当前浏览器宽度并设置responsive管理响应式
        const clientWidth = document.body.clientWidth;
        this.props.dispatch({ type: "appModel/responsive", payload: { isMobile: clientWidth <= 992 } });
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        const { auth, router, responsive } = this.props;
        return (
            <Layout className="ant-layout-has-sider">
                {!responsive.data.isMobile && <SiderCustom path={this.props.location.pathname} collapsed={this.state.collapsed} />}
                <Layout>
                    <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                        {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        React-Admin ©2017 Created by 865470087@qq.com
                </Footer>
                </Layout>
                {
                    responsive.data.isMobile && (   // 手机端对滚动很慢的处理
                        <style>
                            {`
                            #root{
                                height: auto;
                            }
                        `}
                        </style>
                    )
                }
            </Layout>
        );
    }
}
const mapStateToProps = state => {
    return { ...state.appModel }
};
export default withRouter(connect(mapStateToProps)(App))
