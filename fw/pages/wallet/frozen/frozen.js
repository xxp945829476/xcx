// pages/wallet/frozen/frozen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      show:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  tab:function(e){
      var id = e.currentTarget.id;
      this.setData({
        show:id
      })
  },


  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },
})