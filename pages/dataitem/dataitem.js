const app = getApp();
var utils = require('../../utils/util.js');
Page({
  data: {
    time: '',
    title: '',
    content: '',

  },

  backto: function() {
    // console.log("title：" + this.data.title + "content:" + this.data.content)

    wx.navigateTo({
      url: '../listcontent/listcontent?title=' + this.data.title + '&content=' + this.data.content+'&time='+this.data.time,
    })
  },

  onLoad: function() {
    var time = utils.formatTime(new Date());
    // console.log(time);
    this.setData({
      time: time
    });
  },

  titleinput: function(e) {
    this.setData({
      title: e.detail.value
    })
  },

  contentinput: function(e) {
    this.setData({
      content: e.detail.value
    })
  }



})