// pages/wallet/card_problem/card_problem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: -1,
    lists: [
      { "title": "可以绑定多张银行卡吗？", "msg": "可以可以绑定多张银行卡，限制3张" },
      { "title": "可以绑定多张银行卡吗？", "msg": "可以可以绑定多张银行卡，限制3张" },
      { "title": "可以绑定多张银行卡吗？", "msg": "可以可以绑定多张银行卡，限制3张" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  up: function (e) {
    var id = e.currentTarget.id;
    if (e.currentTarget.id == this.data.num) {
      this.setData({
        num: -1
      })
    } else {
      this.setData({
        num: id
      })
    }

  }

})