const app = getApp();
var list = new Array();
Page({
  data: {
    imagurltop: '',
    userinfo: {},
    datalist: [],
    obj:{
      time:'',
      title:'',
      content:'',
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
      title: option.title,
      content: option.content,
      time:option.time,
      
    })
    list.push(obj);
    console.log(this.data.obj_title);
    console.log(this.data.obj_content);
    console.log(list.length);


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