const app = getApp();
var utils = require('../../utils/util.js');
Page({
  data: {
    time: '',

  },

  onLoad: function() {
    var time = utils.formatTime(new Date());
    con
    this.setData({
      time : time
    });
  }



})