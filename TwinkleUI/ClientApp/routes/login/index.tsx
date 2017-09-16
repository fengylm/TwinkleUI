import * as React from 'react';
import { connect } from 'dva';
import { Button, Row, Form, Input } from 'antd';
import "./index.css";

const FormItem = Form.Item

interface LoginProps {
    loading,
    dispatch,
    form: {
        getFieldDecorator,
        validateFieldsAndScroll,
    },
}



class Login extends React.Component<LoginProps, {}>{
    constructor(props) {
        super(props);

        console.log(this.props.loading);
        this.handleOk = this.handleOk.bind(this);
    }
    public handleOk() {
        this.props.form.validateFieldsAndScroll((errors, values) => {
            if (errors) {
                return
            }
            this.props.dispatch({ type: 'login/login', payload: values })
        })
    }

    public render() {
        return (
            <div className="form">
                <div className="logo">
                    <img alt={'logo'} src="#" />
                    <span>Twinkle</span>
                </div>
                <form>
                    <FormItem hasFeedback>
                        {this.props.form.getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                },
                            ],
                        })(<Input size="large" onPressEnter={this.handleOk} placeholder="Username" />)}
                    </FormItem>
                    <FormItem hasFeedback>
                        {this.props.form.getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                },
                            ],
                        })(<Input size="large" type="password" onPressEnter={this.handleOk} placeholder="Password" />)}
                    </FormItem>
                    <Row>
                        <Button type="primary" size="large" onClick={this.handleOk} loading={this.props.loading.effects.login} >
                            Sign in
                        </Button>
                        <p>
                            <span>Username：guest</span>
                            <span>Password：guest</span>
                        </p>
                    </Row>

                </form>
            </div>
        );
    }
}
export default connect(({ loading }) => ({ loading }))(Form.create()(Login))
