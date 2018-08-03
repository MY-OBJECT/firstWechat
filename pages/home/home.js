//获取应用实例
const app = getApp();
Page({
  data:{
    imagetopUrl:"http://111.230.253.46/mgd/codeegg_pride.png",
    imagebottomUrl:"http://111.230.253.46/mgd/registered.png"

  },

  jumpview:function(){
    wx.navigateTo({
      url: '../listcontent/listcontent',
    })
  },

  // onLoad: function () {
  //   var _this = this;
  //   wx.getSystemInfo({
  //     success: function (res) {
  //       _this.setData({
  //         screenHeight: res.windowHeight,
  //         screenWidth: res.windowWidth,
  //       });
  //     }
  //   });
  // },


  // requestImage:function(){
  //   wx.request({
  //     url: '',
  //     method:'GET',
  //     header: {'content-type': 'application/json'},
  //     success:function(res){
  //       if(res==200){

  //       }else{
  //         console.log(res.statusCode);
  //       }
  //     },
  //     fail:function(){
  //       console.log("It is none!!");
  //     }
      
  //   })
  // }

    // imageLoad: function(e) {
    //   var _this = this;
    //   var $width = e.detail.width,    //获取图片真实宽度
    //     $height = e.detail.height,
    //     ratio = $width / $height;   //图片的真实宽高比例
    //   var viewWidth = 500,           //设置图片显示宽度，
    //     viewHeight = 500 / ratio;    //计算的高度值   
    //   this.setData({
    //     imgwidth: viewWidth,
    //     imgheight: viewHeight
    //   })
    // }


})

