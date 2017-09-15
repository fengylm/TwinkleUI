import * as React from "react";
import { connect } from "dva";
import { Input, Button, DatePicker } from 'antd';
import * as LoginModel from "../models/Login"; 

class Login extends React.Component<LoginModel.LoginState, {}>{
    constructor(props) {

        super(props);
    }
    render() {
        return (
            <div>
                <Input addonBefore="登陆账号212" />
                <Input addonBefore="登陆密码132" />
                <DatePicker />

                <Button onClick={() => this.props.dispatch({
                    type: "login/Login",
                    payload: {
                        id: 444
                    }
                })}>登陆</Button>
            </div>
        )
    }

}
export default connect(({ login }) => login)(Login);