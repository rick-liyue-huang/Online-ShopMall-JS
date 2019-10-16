/*
* @Author: RickHuang
* @Date:   2019-10-16 12:31:55
* @Last Modified by:   RickHuang
* @Last Modified time: 2019-10-16 12:56:22
*/



'use strict';

const _tools = require('util/tools.js');

const _user = {
  
  /**
   * 调动通用方法类，在service中实现用户退出方法
   * @param  {[type]} resolve [description]
   * @param  {[type]} reject  [description]
   * @return {[type]}         [description]
   */
  logout: function (resolve, reject) {
    _tools.request({
      url    : _tools.getServerUrl('/user/logout.do'),
      method : 'POST',
      success: resolve,
      error  : reject
    });
  },

  /** 
   * 检查登录状态
   * @param  {[type]} resolve [description]
   * @param  {[type]} reject  [description]
   * @return {[type]}         [description]
   */
  checkLogin: function(resolve, reject) {
    _tools.request({
      url    : _tools.getServerUrl('/user/get_user_info.do'),
      method : 'POST',
      success: resolve,
      error  : reject
    }); 
  },

}

module.exports = _user;














