// pages/new_site/details/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:true,
    selectTwo: true,
    num:'',
    arrr:[],
    items: [
      { name: '', value: '全城',currentColor:false},
      { name: 'CHN', value: '中国', currentColor: false},
      { name: 'BRA', value: '巴西', currentColor: false},
      { name: 'JPN', value: '日本', currentColor: false},
      { name: 'ENG', value: '英国', currentColor: false},
      { name: 'TUR', value: '法国', currentColor: false},
    ],
    apartmens: [
      { id: '0', value: '不限', currentColor: false},
      { id: '1', value: '一室', currentColor: false},
      { id: '2', value: '二室', currentColor: false},
      { id: '3', value: '三室', currentColor: false},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  changColor:function(e){
    
    var id = e.currentTarget.id;
    var that = this;
    var list = that.data.items;
    var arr = []

 

      for (var i = 0; i < list.length; i++) {
       
        if (list[i].value == id) {
          if (that.data.num >= 3){
            if (list[i].value == '全城') {
              list[i].currentColor = !list[i].currentColor;
            }else{
              list[i].currentColor = false
            }
             
            }else{
              list[i].currentColor = !list[i].currentColor;
            };
            
        } else {
          if (list[0].currentColor) {
            list[i].currentColor = false;
          }
        };
        
        if (list[i].currentColor == true) {
          if (list[0].currentColor){
              arr.splice(0,arr.length,'全城')
            }else{
                arr.push(list[i].value)
            }
          }
      }
     
      
      if (arr.length>=3){
        arr.splice(3,arr.length)
      }
      console.log(arr.length)
      console.log(arr)

      that.setData({
        items: list,
        num: arr.length
      })
    
  }
})