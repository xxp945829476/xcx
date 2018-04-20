// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      title: options.title
    });
    wx.setNavigationBarTitle({
      title: that.data.title//页面标题为路由参数
    })
  },
  call:function(){
    wx.makePhoneCall({
      phoneNumber: '13814254278' //仅为示例，并非真实的电话号码
    })
  },
  calling:function(){
    wx.makePhoneCall({
      phoneNumber: '13814254278' //仅为示例，并非真实的电话号码
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      path: '/page/details/details'
    }
  }
})