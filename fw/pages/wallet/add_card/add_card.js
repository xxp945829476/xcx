// pages/wallet/add_card/add_card.js

var city = require("../../../utils/city.js");
var allCity = city.city;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['中国工商银行', '农业银行', '建设银行', '中国银行','中国邮政','招商银行','浦发银行','中信银行','光大银行','明生银行','广发银行','华夏银行','平安银行','兴业银行','北京银行'],
    index:0,
    citySrray: allCity,
    minIndex:0,
    cityIdex:0
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindProvinceChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      minIndex: e.detail.value,
      cityIdex:0
    });
  },
  bindCityChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      cityIdex: e.detail.value
    })
  },
  submit:function(){
    wx.navigateTo({
      url: '/pages/wallet/binding/binding'
    })
  }

  
})