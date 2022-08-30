import React, { Component } from 'react'
import './index.scss'
import { Card } from 'antd'
import Logo from '../../assets/images/logo.png'
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <Card className="login-container">
          <img src={Logo} alt="logo" className="login-logo"></img>
        </Card>
      </div>
    )
  }
}
