/*
* @Author: RickHuang
* @Date:   2019-10-16 13:29:51
* @Last Modified by:   RickHuang
* @Last Modified time: 2019-10-16 14:01:03
*/

'user strict';
require('./index.css');

const _tools = require('util/tools.js');

/** 
 * 通用页面的头部
 * @type {Object}
 */
const header = {
  init: function() {
    this.bindEvent()
  },
  /**
   * 在搜索框中填入关键字
   * @return {[type]} [description]
   */
  onload: function() {
    const keyword = _tools.getUrlParam('keyword');
    if(keyword) {
      // keyword存在回填输入框
      $('#search-input').val(keyword)
    }
  },
  /**
   * 绑定按钮事件
   * @return {[type]} [description]
   */
  bindEvent: function() {
    const _this = this; // jquery 选择器不生效
    // 点击搜索按钮后，搜索提交
    $('#search-btn').click(function() {
      _this.searchSubmit();
    });

    // 输入回车后也做搜索提交的
    $('#search-input').keyup(function(e) {
      if(13 === e.keyCode) { // 13 是回车键
        _this.searchSubmit();
      }
    });
  },

  /**
   * 搜索提交
   * @return {[type]} [description]
   */
  searchSubmit: function() {
    const keyword = $.trim($('#search-input').val());
    // 如果提交的时候有keyword，跳转到list页面
    if(keyword) {
      window.location.href = './list.html?keyword=' + keyword;
    } else {
      // 否则就跳转到首页
      _tools.goHome();
    }
  }
}

header.init();














