import * as React from "react";
import { connect } from "dva";
import { Input, Button, DatePicker } from 'antd';
import * as LoginModel from "../models/Login"; 

class Login extends React.Component<{}, {}>{
    constructor(props) {

        super(props);
    }
    render() {
        return (
            <div>
                <Input addonBefore="登陆账号in" />
                <Input addonBefore="登陆密码132" />
                <DatePicker />
            </div>
        )
    }

}
export default connect(({ login }) => login)(Login);