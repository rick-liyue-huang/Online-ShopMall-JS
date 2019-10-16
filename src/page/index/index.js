/*
* @Author: RickHuang
* @Date:   2019-10-15 11:56:46
* @Last Modified by:   RickHuang
* @Last Modified time: 2019-10-16 15:57:07
*/

"use strict";

const _tools = require('util/tools.js');
require('page/common/header/index.js');
require('page/common/nav/index.js');
const navSide = require('page/common/nav-side/index.js');

navSide.init({name: 'order-list'});

/*
_tools.request({
  url: '/product/list.do?keyword=1',
  success: function(res) {
    console.log(res); 
  },
  error: function(errMsg) {
    console.log(errMsg);
  }
})
*/

// console.log(_tools.getUrlParam('test'));
















