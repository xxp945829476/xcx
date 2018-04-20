// pages/new_site/details/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:true,
    selectTwo: true,
    items: [
      { name: '', value: '全城', checked: false},
      { name: 'CHN', value: '中国', checked: false},
      { name: 'BRA', value: '巴西', checked: false},
      { name: 'JPN', value: '日本', checked: false},
      { name: 'ENG', value: '英国', checked: false},
      { name: 'TUR', value: '法国', checked: false},
    ],
    apartmens: [
      { id: '0', value: '不限', checked: false },
      { id: '1', value: '一室', checked: false },
      { id: '2', value: '二室', checked: false },
      { id: '3', value: '三室', checked: false },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    if (e.detail.value.length>3){
      this.setData({
        select: false
      })
    }else{
      this.setData({
        select: true
      })
    };
    var that = this;
    var num = that.data.items.length;
    var list = that.data.items;
    if (e.detail.value=="全城"){
      for (var i = 1; i < num;++i){
        list[i].checked = false;
        
      }
     
      that.setData({
        items: list
      })
      console.log(that.data.items)
    }
  },
  hxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value.length);
    if (e.detail.value.length > 3) {
      this.setData({
        selectTwo: false
      })
    }else{
      this.setData({
        selectTwo: true
      })
    }
  },
  changColor:function(e){
    var that = this;
    var list = that.data.items;
    var id = e.currentTarget.id;
    if (that.data.select){
        list[id].checked = !list[id].checked;
        that.setData({
          items: list
        })
    }
  },
  changColorTwo: function (e) {
    var that = this;
    var list = that.data.apartmens;
    var id = e.currentTarget.id;
    if (that.data.selectTwo) {
      list[id].checked = !list[id].checked;
      that.setData({
        apartmens: list
      })
    }
  }

})