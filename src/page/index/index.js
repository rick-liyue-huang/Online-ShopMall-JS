/*
* @Author: RickHuang
* @Date:   2019-10-15 11:56:46
* @Last Modified by:   RickHuang
* @Last Modified time: 2019-10-16 10:20:55
*/

"use strict";

const _tools = require('util/tools.js');
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

const html = '<div>{{text}}</div>';
const data = {
  text: 123
}
console.log(_tools.renderHTML(html, data));















