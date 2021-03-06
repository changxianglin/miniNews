//index.js
//获取应用实例
const app = getApp()
const common = require('../../utils/common.js')

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
    newsList: [],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  gotoDetail: function(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: "../detail/detail?id=" + id
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let list = common.getNewsList()
    this.setData({
      newsList: list
    })
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
