# 路由配置目录

## aiplat.js是当前项目aiplat所有的路由
 - 因为这已经是适配pc和mobile，所有只有一个aiplat.js

## authRoute.js是登录控制路由

## bundle.js是用于按需加载页面

## combineRoutes.js用于合并aiplat.js中的路由为switch->route

## index.js是项目所有的路由集合
 - 比如项目中可能有pc和mobile，样式都不一样，不能用同一套代码时
 - 分开多个如aiplat_pc.js、aiplat_mobile.js子路由，打包时区分
 - 多个子路由共用开发环境与组件等等

#登录控制问题 在 ‘新增登录控制，待优化’ 这后一版本已经解决，点击首页的logo图可验证