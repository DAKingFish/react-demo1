import React from 'react' //都是组件1.导入react包
import ReactDOM from 'react-dom' //2.react17 导入react-dom react18 导入react-dom/client
// 导入 antd 组件库的样式 ,这里导入 全局作用
//一步错,步步错,代码要掌握,不是看速度,囫囵吞枣,
//自己的,才是保命的
import 'antd/dist/antd.css'
import './index.css' //自己全局样式放在组件样式后面,防止被覆盖

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
