//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      show:false,
      num:0,
      lastNum:0,
      address:false,
      average:false,
      huxing:false,
      lists:[
        { name:'不限'},
        {
          name: '北塘',
          street:[
            '不限',
            '北塘',
            '黄巷'
          ]
        },
        {
          name: '新区',
          street: [
            '不限',
            '洪山',
            '梅村'
          ]
        },
      ]
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
  },
  selectAddress:function(e){
        var id = e.currentTarget.id
        this.setData({
          num : id
        })
  },
  addresShow:function(){
    var that = this
    if (that.data.address==true){
      that.setData({
        address: false
      });
    }else{
      that.setData({
        address: true
      });
      that.setData({
        average: false
      });
      that.setData({
        huxing: false
      });
    }
  },
  averageShow: function () {
    var that = this
    if (that.data.average == true) {
      that.setData({
        average: false
      });
    } else {
      that.setData({
        average: true
      });
      that.setData({
        address: false
      });
      that.setData({
        huxing: false
      });
    }
  },
  huxingShow:function(){
    var that = this
    if (that.data.huxing == true) {
      that.setData({
        huxing: false
      });
    } else {
      that.setData({
        huxing: true
      });
      that.setData({
        address: false
      });
      that.setData({
        average: false
      })
    }
  }
  
})

