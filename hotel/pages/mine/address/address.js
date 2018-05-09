// pages/mine/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { id: 0, checked: 'true' },
      { id: 1},
      { id: 2}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  sel:function(e){
    console.log(e.currentTarget.id);
    var id = e.currentTarget.id;
    var list = this.data.items;
    for (var i = 0; i < list.length;i++){
      if (id==i){
          list[i].checked=true
      }else{
          list[i].checked = false
      }
    }
    this.setData({
      items:list
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})