/*
* @Author: RickHuang
* @Date:   2019-10-15 15:42:43
* @Last Modified by:   RickHuang
* @Last Modified time: 2019-10-15 17:44:47
*/

'user strict';

const conf = {
  serverHost: ''
}

const _tools = {
  /**
   * [web request tool]
   * @param  {[type]} param [description]
   * @return {[type]}       [description]
   */
  request: function(param) {
    var _this = this;
    $.ajax({
      type: param.method || 'get',
      url: param.url || '',
      dataType: param.type || 'json',
      data: param.data || '',
      success: function(res) {
        if(res.status === 0) {
          // request success
          typeof param.success === 'function' && param.success(res.data, res.msg)
        } else if (res.status === 10) {
          // no login, and need to login
          _this.doLogin();

        } else if(res.status === 1) {
          // request data error
          typeof param.error === 'function' && param.error(res.msg);
        }
      },
      error: function(err) {
        // request error
        typeof param.error === 'function' && param.error(err.statusText)
      }
    })
  },

  /**
   * jump to login page and then return to the previous page
   * @return {[type]} [description]
   */
  doLogin: function() {
    window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
  },

  /**
   * 获取服务器后端的接口地址
   */
  getServerUrl: function(path) {
    return conf.serverHost + path;
  },

  /** 
   * 获取url参数
   */
  getUrlParam: function(name) {
    // happymmall.com/product/list?keyword=xxx&page=1
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var result = window.location.search.substring(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
  },
};

module.exports = _tools;



















