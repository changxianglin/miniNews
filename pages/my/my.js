// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 0,
    nickName: '未登录',
    src: '/images/index1.png',
    isLogin: false,
    newsList: []
  },
  
  gotoDetail: function(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: "../detail/detail?id=" + id
    })
  },

  getMyInfo: function(e) {
    let info = e.detail.userInfo
    this.setData({
      src: info.avatarUrl,
      nickName: info.nickName,
      isLogin: true
    })

    this.getMyfavorites()
  },

  getMyfavorites: function() {
    let info = wx.getStorageInfoSync()
    let keys = info.keys
    let num = keys.length

    let myList = []
    for(let i = 0; i < num; i++) {
      let obj = wx.getStorageSync(keys[i])
      myList.push(obj)
    }

    this.setData({
      newsList: myList,
      number: num
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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
    if(this.data.isLogin) {
      this.getMyfavorites()
    }
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})