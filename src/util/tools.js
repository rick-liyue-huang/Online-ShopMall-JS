/*
* @Author: RickHuang
* @Date:   2019-10-15 17:44:47
* @Last Modified by:   RickHuang
* @Last Modified time: 2019-10-16 10:37:43
*/

const Hogan = require('hogan.js');
const conf   = {
  serverHost: ''
};

const _tools = {

  /**
   * 网络请求
   * @param  {[type]} param [description]
   * @return {[type]}       [description]
   */
  
  request: function(param) {
    const _this = this; // 在ajax里面会取不到对象，因此需要_tools对象缓存一下
    $.ajax({
      type      : param.method  || 'get',
      url       : param.url     || '',
      dataType  : param.type    || 'json',
      data      : param.data    || '',
      success   : function(res) {

        // 请求成功
        if(0 === res.status) {
          typeof param.success === 'function' && param.success(res.data, res.msg);
        } 
        // 没有登录状态，强制登录
        else if (10 === res.status) {
          _this.doLogin();
        }
        // 接口正确但是数据有问题，比如参数错误
        else if (1 === res.status) {
          typeof param.error === 'function' && param.error(res.msg);
        }
      },
      error     : function(err) {
        // 请求真实的失败了
        typeof param.error === 'function' && param.error(err.statusText);
      } 
    })
  },

  /** 
   * 进行登录
   * @return {[type]} [description]
   */

  doLogin: function() {
    // 登录后在跳转到之前的页面，如果有特殊字符的话会截断，因此需要编码
    window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
  },

  /**
   * 得到后端服务器地址
   * @param  {[type]} path [description]
   * @return {[type]}      [description]
   */
  getServerUrl: function(path) {
    return conf.serverHost + path;
  },

  /**
   * 获取url参数
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  getUrlParam: function(name) {
    // test.happymmall.com/product/list?keyword=xxx&page=1
    // get keyword
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    const result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
  },

  /**
   * 渲染HTML模板，将数据和模板结合
   * @param  {[type]} htmlTemplate [description]
   * @param  {[type]} data         [description]
   * @return {[type]}              [description]
   */
  renderHTML: function(htmlTemplate, data) {
    // 编译
    const template = Hogan.compile(htmlTemplate);
    const result   = template.render(data);
    return result;
  },

  /**
   * 成功提示
   * @param  {[type]} msg [description]
   * @return {[type]}     [description]
   */
  successTips: function(msg) {
    alert(msg || 'success');
  },

  /**
   * 错误提示
   * @param  {[type]} msg [description]
   * @return {[type]}     [description]
   */
  errorTips: function(msg) {
    alert(msg || 'some wrong');
  },

  /** 
   * 字段验证，支持是否为空，包括手机邮箱
   * @param  {[type]} str  [description]
   * @param  {[type]} type [description]
   * @return {[type]}      [description]
   */
  validate: function(input, type) {
    const inputStr = $.trim(input);
    // 非空验证
    if('require' === type) {
      return !!inputStr;
    }
    // 手机号验证
    if('phone' === type) {
      return /^1\d{10}$/.test(inputStr);
    }
    // 邮箱验证
    if('email' === type) {
      return /^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$/.test(inputStr);
    }
  },

  /**
   * 跳转到主页
   * @return {[type]} [description]
   */
  goHome: function() {
    window.location.href = './index.html';
  }
  
};

module.exports = _tools;




















