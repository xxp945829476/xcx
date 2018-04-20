// pages/customer/customer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    lists: ["全部", "报备", "看房", "认购", "结佣", "无效"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  tab:function(e){
    this.setData({
      num: e.currentTarget.id
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  }
})