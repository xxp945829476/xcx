// pages/wallet/binding/binding.js
Page({
  data: {
    "disabled": false,
    "time": "获取验证码",
    "currentTime": 60
  },
  onLoad: function () {

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
