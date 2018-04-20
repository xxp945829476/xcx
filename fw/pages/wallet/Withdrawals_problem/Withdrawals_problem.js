// pages/wallet/Withdrawals_problem/Withdrawals_problem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      num:-1,
      lists:[
        { "title": "提现有金额限制吗", "msg":"提现没有次数限制，每笔提现金额满10元即可。"},
        { "title": "提现有金额限制吗", "msg": "提现没有次数限制，每笔提现金额满10元即可。" },
        { "title": "提现有金额限制吗", "msg": "提现没有次数限制，每笔提现金额满10元即可。" }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  up:function(e){
    var id = e.currentTarget.id;
    if (e.currentTarget.id==this.data.num){
      this.setData({
        num: -1
      })
    }else{
      this.setData({
        num: id
      })
    }
    
  }

})