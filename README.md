# Vue-FriendShip

> webapp social-module based on vue-cli

 **没有使用任何UI组件库**
 (图片很大...clone会慢些，以后再修改)
 
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 说明
    
### 1) 已加入mockjs

### 2） 发现的问题有
        1.性能问题，主页渲染左右共渲染100个列表（大概3000个dom），页面切换动画就不流畅。
          这个从timeline上看，大部分花在了生成dom上，渲染并不花太多时间。（可能会改为分页的方式）
        2.进入profie页面再从侧边栏进入我的资料，因为是同个组件，页面不会有切换动画
        3.后期再加入下拉刷新和底部刷新功能
        4.mockjs是不是被拦截的请求是不是无法在network上查看？
