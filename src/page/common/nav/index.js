/*
* @Author: RickHuang
* @Date:   2019-10-16 12:06:52
* @Last Modified by:   RickHuang
* @Last Modified time: 2019-10-16 13:03:50
*/

"use strict";
require('./index.css');
const _tools = require('util/tools.js');
const _user = require('service/user-service.js');
const _cart = require('service/cart-service.js');
console.log(_user);

const nav = {
  init: function() {
    this.bindEvent();
    this.loadUserInfo();
    this.loadCartCount(); 
    return this;
  },
  bindEvent: function() {
    // 登录点击事件
    $('.js-login').click(function() {
      _tools.doLogin();
    });
    // 注册点击事件
    $('.js-register').click(function() {
      window.location.href = './register.html';
    });
    // 退出点击事件
    $('.js-logout').click(function() {
      _user.logout(function(res) {
        // resolve
        window.location.reload(); // 退出成功后，将会重新刷新页面，这样就需要重新登录
      }, function(errMsg) {
        // reject
        _tools.errorTips(errMsg); // 调动工具类方法给出错误提示
      });
    })
  },
  /**
   * 加载用户信息
   * @return {[type]} [description]
   */
  loadUserInfo: function() {
    _user.checkLogin(function(res) {
      // 如果有登录状态下，需要将需要登陆的框隐藏掉
      $('.user.not-login').hide().siblings('.user.login').show().find('.username').text(res.username)
    }, function(errMsg) {
      // 如果错不需要做什么
    });
  },
  /**
   * 加载购物车数量
   * @return {[type]} [description]
   */
  loadCartCount: function() {
    _cart.getCartCount(function(res) {
      // 调用购物车方法得到具体数量
      $('.nav .cart-count').text(res || 0);
    }, function(errMsg) {
      // 如果出错就为0
      $('.nav .cart-count').text(0);
    });
  }
}

module.exports = nav.init();















