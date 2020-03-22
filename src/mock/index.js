// 引入mockjs
import Mock from 'mockjs'

// 引入模块home
import home from './home'

// 设置200-2000毫秒延时
Mock.setup({
  timeout: '200-2000'
})


// 1. 拦截的是 /api/goodslist
// 2. get 请求
// 3. home.getHomeData 返回响应数据为对象格式：home模块响应属性 getHomeData
Mock.mock('/api/goodslist', 'get', home.getHomeData)
