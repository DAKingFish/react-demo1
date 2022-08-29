import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App' //根组件
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
/* react18 render() 改了 不能再由ReactDOM创建的,而是ReactDOM的creatRoot()的对象调用 */

reportWebVitals()
