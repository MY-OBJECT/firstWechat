const app = getApp();

Page({
  data: {
    imagurltop: '',
    userinfo: {},
    datalist: [],
    item: {
      obj_time:'',
      obj_title: '',
      obj_content: '',
    },
    imageadd: 'http://111.230.253.46/mgd/plus_sign.png',
    iamgeempty: 'http://111.230.253.46/mgd/no_data.png',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },


  tonewBuild: function() {
    wx.navigateTo({
      url: '../dataitem/dataitem',
    })
  },
  onLoad: function(option) {
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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

    this.setData({
      [obj_title]: option.title,
      [obj_content]: option.content,

    })
    console.log(item.toString)
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