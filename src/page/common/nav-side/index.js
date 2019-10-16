/*
* @Author: RickHuang
* @Date:   2019-10-16 14:13:36
* @Last Modified by:   RickHuang
* @Last Modified time: 2019-10-16 15:54:06
*/

"use strict";
require('./index.css');
const _tools = require('util/tools.js');
const templateIndex = require('./index.string');
// console.log(templateIndex)

/**
 * 侧边导航
 * @type {Object}
 */
const navSide = {
  option: {
    name: '',
    navList: [
      {name: 'user-center', desc: 'center', href: './user-center.html'},
      {name: 'order-list', desc: 'orders', href: './order-list.html'},
      {name: 'pass-update', desc: 'password', href: './pass-update.html'},
      {name: 'about', desc: 'about', href: './about.html'}
    ]
  },
  /**
   * 需要外部调用，根据外面的参数判断哪一个是active
   * @param  {[type]} option [description]
   * @return {[type]}        [description]
   */
  init: function(option) {
    // 合并选项
    $.extend(this.option, option); // 浅拷贝
    this.renderNav();
  },
  /**
   * 渲染导航菜单
   * @return {[type]} [description]
   */
  renderNav: function() {
    // 计算active数据
    for(var i = 0, iLen = this.option.navList.length; i < iLen; i++) {
      if(this.option.navList[i].name === this.option.name) {
        // 如果和选中的相同，就加入isActive
        this.option.navList[i].isActive = true;
      }
    }
    // 将list数据渲染出来
    const navHtml = _tools.renderHTML(templateIndex, {
      navList: this.option.navList
    });
    // 把HTML放入容器
    $('.nav-side').html(navHtml);
  }
}

module.exports = navSide;















