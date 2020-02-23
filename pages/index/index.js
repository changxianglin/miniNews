//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperImg: [
      {
        src: "http://www.xinhuanet.com/politics/2020-02/23/1125614596_15824386908231n.jpg",
      },
      {
        src: "http://www.xinhuanet.com/politics/2020-02/23/1125614596_15824387057291n.jpg",
      },
      {
        src: "http://www.xinhuanet.com/politics/2020-02/23/1125614596_15824387199371n.jpg",
      }
    ],
    newsList: [
      {
        id: "1",
        title: "10天 是建设者拼尽的全力",
        poster: "http://www.xinhuanet.com/politics/2020-02/23/1125614596_15824386476101n.jpg",
        add_date: "2020-02-21 14:34:18",
      },
      {
        id: "2",
        title: "1个月 是众志成城 守护生命的决心",
        poster: "http://www.xinhuanet.com/politics/2020-02/23/1125614596_15824387316681n.jpg",
        add_date: "2020-02-22 14:34:18",
      },
      {
        id: "3",
        title: "14亿颗心 构筑起坚不可摧的人民防线",
        poster: "http://www.xinhuanet.com/politics/2020-02/23/1125614596_15824387395581n.jpg",
        add_date: "2020-02-23 14:34:18",
      },
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
