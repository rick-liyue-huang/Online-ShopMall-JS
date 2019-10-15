## Online-ShoppingMall-JS

#### Introduction

It is a online shopping system

#### Construction

在 逻辑层： 
  主模块：包括很多子模块，每个子模块和数据层联系
在 数据层：
  提供service 用于和服务器联系
在 服务器：
  就是提供网站支持
并且还有一个工具层：
  提供各种工具

#### Rules

单个迭代不宜太大
需求可交付，能够形成功能闭环
有意识成本，遵循二八原则
有预期的价值体现

#### Processes

##### 1st

用户端： 展示， 购物车， 下单， 支付， 订单， 用户
后台管理： 商品管理，品类管理，订单管理， 管理员登录

##### 2nd

用户端：
商品： 首页， 商品列表， 商品详情
购物车： 购物车数量， 添加删除商品， 购物车提交
订单： 订单确认（地址管理）， 订单提交， 订单列表， 订单详情
支付： 支付（接口调用）
用户： 登录，注册，个人信息，找回密码， 修改密码

管理后台：
商品管理： 添加、编辑商品， 查看商品， 下架
品类管理： 添加品类，查看品类
订单管理： 订单列表， 订单详情， 发货
权限： 管理员登录

#### 架构设计

就是分层架构：
定义： 把功能相似，抽象级别相近的实现进行分层隔离
优势： 松散耦合，易于维护，复用和扩展
常见的分层方式： MVC， MVVM

模块化：
解决一个复杂问题时候，自上而下逐层把系统划分为若干模块的过程。
意义： 解耦，可并行开发
实现方案： commonJS(node.js)

#### 技术选型

软件过程： 敏捷开发，以用户的需求金华为核心，采用迭代，循序渐进的方式进行软件开发，就是，先和客户商量好，随时和客户联系，先满足最基本的，在进一步完善

前后端分离： 方案一：velocity, 发送的时候同步到后端 Java； 方案二：纯静态html, 完全通过接口做数据交互，不太利于seo，优化方案就是server render/蜘蛛定制页面；

构建工具: webpack；

框架：用户端：要求稳定，用户类型多样，有SEO要求，多页应用 因此 选择jQuery 和原生CSS； 管理系统：要求求快，用户单一，无SEO要求， 因此用 React.js 和 Sass;

版本控制: git;

发布方式: 拉取待发布的代码， 编译打包， 发布到线上机器上；

域名分布： HTML -> www./admin. js+css -> s. image -> img.

#### 职能划分

后端：
数据存储， 文件服务， 数据接口
前端：
数据请求，数据处理， 页面展示
注意接口文档规范

关于 Git：
在用户根目录创建 .gitconfig 文件

#### Develop

首先需要切换到其他分支开发 `git checkout -b onlineshope_v1.0` 





notes:
1. 因为本电脑安装了 nvm node版本管理工具，因此我这里使用了 6.17.1 版本，而 npm 使用了 3.10 全局安装目录: “/Users/mac/.nvm/versions/node/v6.17.1/lib”, 本地安装目录: "/Users/mac/Documents/gitgarden/Online-ShopMall-JS"
具体配置: "https://github.com/webpack/docs/wiki/contents"
webpack -- 使用 1.15.0版本
设计思想 -- require anything
加载方式 -- 各种 loader 插件
编译方式 -- commonjs模块 -> function 类型模块

2. fileHeader 插件 用于处理文件创建时候的说明文字 by `command+option+a`


















