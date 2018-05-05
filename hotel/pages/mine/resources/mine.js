//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show:true,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    vipShow:false,
    "disabled": false,
    "time": "获取验证码",
    "currentTime": 60
  },
  
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          console.log(res.userInfo)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  tab:function(){
    this.setData({
      show: !this.data.show
    })
  },
  vShow:function(){
    this.setData({
      vipShow: true
    })
  },
  vHide:function(){
    this.setData({
      vipShow: false
    })
  },
  cutDown: function () {
    var that = this;
    var currentTimer = that.data.currentTime;
    var t = setInterval(function () {
      currentTimer--;
      that.setData({
        time: currentTimer + 's'
      });
      if (currentTimer >= 0) {
        that.setData({
          disabled: true
        });
      } else {
        clearInterval(t)
        that.setData({
          disabled: false,
          time: "重新发送"
        });
      }
    }, 1000)
  },
  getCode: function () {
    this.cutDown();
    this.setData({
      disabled: true
    });
  }
})
