/*
* @Author: RickHuang
* @Date:   2019-10-16 13:03:09
* @Last Modified by:   RickHuang
* @Last Modified time: 2019-10-16 13:07:52
*/

'use strict';
const _tools = require('util/tools.js');

const _cart = {
  /**
   * 获取购物车数量
   * @param  {[type]} resolve [description]
   * @param  {[type]} reject  [description]
   * @return {[type]}         [description]
   */
  getCartCount: function (resolve, reject) {
    _tools.request({
      url: _tools.getServerUrl('./cart/get_cart_product_count.do'),
      success: resolve,
      error: reject
    });
  }
}

module.exports = _cart;
