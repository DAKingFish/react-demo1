//import logo from './logo.svg' 导入本地资源,要将其变成对象
// ps:看案例觉得简单,但是自己根据案例思维去敲,相当的模糊
//1.明确一点 所有其他组件都是在app.组件里,所以在这里要导入各个组件
//2.重点,在这里要学会怎么使用antd组件生成,
//ps:先自己随便写,看看会出现哪些问题,还有组件显示的问题,每个页面都是一个组件,但是app
//只有一个,不记得案例是怎么切换(axios),代码果然要敲,毕竟不熟,就算看得懂,但是不一定敲得的出来
import './App.css'
//ps:我明明知道要把router抽取抽成组件,但是不会抽,只能再看一遍案例
//3.导入路由包
import { BrowserRouter as Router, Rout, Link, Switch } from 'react-router-dom'
import LayoutHome from './pages/Layout'
import Login from './pages/Login'

function App() {
  return (
    // 路由也是要有容器包裹
    <Router>
      <div className="App">
        <Link to="/login">登录</Link>
        <Link to="/home">主页</Link>
        {/* 不敲不知道,一敲吓一跳,我基本就是不会 
        switch当时听案例的时候还在想游戏机,结果自己一敲,不知怎么包裹数据
        */}
        <Switch>{/* 配置路由规则,路由不经常敲,又没有基础,太容易忘了 */}
        {/*  */}
        <Rout to=''>首页</Rout>
        <Rout>登录</Rout>
        </Switch>
        <LayoutHome></LayoutHome>
        <Login></Login>
      </div>
    </Router>
  )
}

export default App
