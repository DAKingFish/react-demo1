import React from 'react' //都是组件1.导入react包
import ReactDOM from 'react-dom' //2.react17 导入react-dom react18 导入react-dom/client
import './index.css'
import App from './App' //根组件
//import reportWebVitals from './reportWebVitals' //未知

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
//React.StrictMode是react开发严格模式,使用react过期语法会报错
/* const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
) */
/* react18 render() 改了 不能再由ReactDOM创建的,而是ReactDOM的creatRoot()的对象调用 */

// reportWebVitals() 传入参数,测量网页性能的,其实我懒得百度,
