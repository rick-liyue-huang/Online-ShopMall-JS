/*
* @Author: RickHuang
* @Date:   2019-10-16 16:03:03
* @Last Modified by:   RickHuang
* @Last Modified time: 2019-10-16 16:31:01
*/

'use strict';
require('page/common/nav-simple/index.js');
require('./index.css');
const _tools = require('util/tools.js');

$(function() {
  const type     = _tools.getUrlParam('type') || 'default';
  const $element = $('.' + type + '-success').show();
});