//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      show:false
  },
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
          that.setData({
            winHeight:res.windowHeight - 40
          })
      }
    })
  },
  searchShow:function(){
    this.setData({
      show:true
    })
  },
  searchHide: function () {
    this.setData({
      show: false
    })
  }
  
})

