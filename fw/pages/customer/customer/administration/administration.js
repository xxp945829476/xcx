// pages/customer/customer/administration/administration.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      num:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  tell:function(){
    wx.makePhoneCall({
      phoneNumber: '1340000'
    })
  }


})