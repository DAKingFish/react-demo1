import React, { Component } from 'react'
import './index.scss'
import { Card, Button, Checkbox, Form, Input } from 'antd'
import Logo from 'assets/images/logo.png'
let bl = true
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <Card className="login-container">
          <img src={Logo} alt="logo" className="login-logo"></img>
          <Form name="basic">
            <Form.Item
              name="mobile"
              rules={[
                { required: true, message: '手机号不能为空' },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: '手机号格式错误',
                },
              ]}
            >
              <Input placeholder="请输入手机号" />
            </Form.Item>

            <Form.Item name="code">
              <Input placeholder="请输入验证码" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox
                onChange={(e) => {
                  bl = !e.target.checked
                }}
              >
                我已阅读并同意[用户协议]和[隐私条款]
              </Checkbox>
            </Form.Item>

            <Form.Item>
              {/* 默认是不写,写了就是true */}
              <Button type="primary" htmlType="submit" block disabled={bl}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
