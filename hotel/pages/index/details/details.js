// pages/index/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    show:false,
    lists:[
      {'title':'经济舒爽型','price':160},
      { 'title': '经济舒爽型', 'price': 160 },
      { 'title': '经济舒爽型', 'price': 160 }
    ],
    num:-1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  down:function(e){
    var id = e.currentTarget.id;
    if (this.data.num==id){
      this.setData({
        num: -1
      })
    }else{
      this.setData({
        num: id
      })
    }
  },
  show:function(){
    this.setData({
      show: true
    })
  },
  hide:function(){
    this.setData({
      show: false
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})