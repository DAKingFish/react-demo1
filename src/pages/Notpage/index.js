import React, { Component } from 'react'
import Log from '../../assets/images/404.png'
import './index.scss'
// 代码敲太少,导入index.scss 要查半天,没有用心啊
export default class Notpage extends Component {
  render() {
    return (
      <div className="notpage">
        <img src={Log} alt="404" />
      </div>
    )
  }
}
