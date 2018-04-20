
const app = getApp()

Page({
  data: {
    imgUrls: [
      { img: '/images/ban1.jpg', mode: 'aspectFill'},
      { img: '/images/ban1.jpg', mode: 'aspectFill' },
      { img: '/images/ban1.jpg', mode: 'aspectFill' }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular:true,
    list:[
      { id: 1, src: '/images/xt.jpg', title: "碧桂园", address: '南京', price: 6000, yj: '0.0064%',reward:'公寓佣金3.2%',type:"寓"},
      { id: 1, src: '/images/xt.jpg', title: "新江北孔雀城", address: '南京', price: 6000, yj: '0.0064%', reward: '待定',type: "宅" }
    ]
  },
  onLoad: function () {
    
  },
  onReachBottom: function () {
      console.log('下一页');
  },
})
