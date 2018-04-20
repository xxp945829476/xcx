// pages/select_city/select_city.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      show:false,
      num:'',
      currentCity: '' 
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getLocation(); 
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight,
        })
      }
    })
  },
  tap:function(){
    
    this.setData({
      num:'C'
    });
    console.log(this.data.num)
  },
  searchShow: function () {
        this.setData({
          show:true
        })
  },
  searchHide: function () {
    this.setData({
      show: false
    })
  },
  getLocation: function () {
    var page = this
    wx.getLocation({
      type: 'wgs84', 
      success: function (res) {
        // success    
        var longitude = res.longitude
        var latitude = res.latitude
        page.loadCity(longitude, latitude)
      }
    })
  },
  loadCity: function (longitude, latitude) {
    var page = this;
    wx.request({
      url: 'https://api.map.baidu.com/geocoder/v2/?ak=DsuF7U9f3GLkTvaH7CtD1jGKef6zgW2q&location=' + latitude + ',' + longitude + '&output=json',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success    
        console.log(res);
        var city = res.data.result.addressComponent.city;
        page.setData({ currentCity: city });
      },
      fail: function () {
        page.setData({ currentCity: "获取定位失败" });
      },

    })
  } 
})