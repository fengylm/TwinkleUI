import * as React from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import { Row, Col, Button, Popconfirm } from 'antd'
import { Page } from '../../components'
import queryString from 'query-string'

export class User extends React.Component<{}, {}>{
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    public render() {
        return (
            <Page inner>
                哇哈哈
            </Page>
        )
    }
}

export default connect(({ userModel, loginModel, loading }) => ({ userModel, loginModel, loading }))(User)
