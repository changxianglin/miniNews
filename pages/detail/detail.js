// pages/detail/detail.js
const common = require('../../utils/common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {
      id: '1',
      title: '5米不得见 是对岗位的坚守',
      poster: 'http://www.xinhuanet.com/politics/2020-02/23/1125614596_15824386476101n.jpg',
      add_date: '2020-02-23 14:34:18',
      content: "习近平在回信中说，在中国抗击新冠肺炎疫情的关键时刻，你和夫人领导的基金会慷慨解囊，你给我写信表达对中国人民的支持，我对此表示衷心的感谢。\n 习近平指出，疫情发生以后，我提出了坚定信心、同舟共济、科学防治、精准施策的总要求，我们举全国之力进行防控，采取一系列前所未有的防控和救治举措，取得了重大成效。我们坚决维护中国人民生命安全和身体健康，也坚决维护世界各国人民生命安全和身体健康，努力为全球公共卫生安全作出贡献。\n 习近平表示，我一直讲，人类是一个命运共同体。战胜关乎各国人民安危的疫病，团结合作是最有力的武器。盖茨基金会很早就加入全球抗击新冠肺炎疫情的行动，发挥了积极作用。我支持盖茨基金会同中方有关机构的合作。我也期待国际社会加强协调，为维护人类健康福祉而一起努力。\n盖茨基金会由比尔·盖茨及其夫人梅琳达共同成立，在疾病防控、扶贫减贫等多个领域同中国长期开展合作。1月27日，盖茨基金会宣布提供500万美元紧急赠款，支持中国抗击新冠肺炎疫情。之后，承诺投入最高1亿美元赠款，其中一部分用于直接帮助中国加速在药物、疫苗及诊断方法研发等方面的工作。近日，比尔·盖茨专门致信习近平主席，赞赏中国政府和中国人民在抗击疫情中的表现，表示将坚定支持中国打赢这场关键战役。",
    },
    isAdd: false,
  },

  cancelFavorites: function() {
    let article = this.data.article
    wx.removeStorageSync(article.id)
    this.setData({
      isAdd: false
    })
  },
  addFavorites: function() {
    let article = this.data.article
    wx.setStorageSync(article.id, article)
    this.setData({
      isAdd: true
    }) 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id

    let newArticle = wx.getStorageSync(id)
    if(newArticle != '') {
      this.setData({
        isAdd: true,
        article: newArticle
      })
    } else {
      let result = common.getNewsDetail(id)
      if (result.code == '200') {
        this.setData({
          article: result.news,
          isAdd: false
        })
      }
    }
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