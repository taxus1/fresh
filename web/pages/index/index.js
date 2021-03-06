//index.js
//获取应用实例
var app = getApp()

var pgoods = require('../../proto/goods.js').goods
var pad = require('../../proto/ad.js').ad
var pcategory = require('../../proto/category.js').category
var util = require('../../utils/util.js')
var pcart = require('../../proto/cart.js').cart

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false , // loading
    userInfo: {},
    swiperCurrent: 0,
    selectCurrent:0,
    categories: [],
    activeCategoryId: 0,
    goods:[],
    scrollTop:"0",
    loadingMoreHidden:true,

    hasNoCoupons:true,
    coupons: []
  },

  tabClick: function (e) {
    this.setData({
      activeCategoryId: e.currentTarget.id
    });
    this.getGoodsList(this.data.activeCategoryId);
  },
  //事件处理函数
  swiperchange: function(e) {
      //console.log(e.detail.current)
       this.setData({
        swiperCurrent: e.detail.current
    })
  },

  toDetailsTap:function(e){
    wx.navigateTo({
      url:"/pages/goods-details/index?id="+e.currentTarget.dataset.id
    })
  },

  tapBanner: function(e) {
    if (e.currentTarget.dataset.id != 0) {
      wx.navigateTo({
        url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
      })
    }
  },

  bindTypeTap: function(e) {
     this.setData({
        selectCurrent: e.index
    })
  },

  scroll: function (e) {
    //  console.log(e) ;
    var that = this,scrollTop=that.data.scrollTop;
    that.setData({
      scrollTop:e.detail.scrollTop
    })
    // console.log('e.detail.scrollTop:'+e.detail.scrollTop) ;
    // console.log('scrollTop:'+scrollTop)
  },

  onLoad: function () {
    var self = this
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })
    /*
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    */
    self.loadBanner();
    self.loadCategory();
    self.loadCarts();
    self.getCoupons ();
    self.getNotice ();
  },

  loadBanner: function(){
    var self = this;
    wx.request({
      url: app.globalData.domain + '/home/banner',
      success: function(res) {
        var result = util.convResult(res.data, pad.HomeBannerAds);
        if (res.code == 404) {
          wx.showModal({
            title: '提示',
            content: '请在后台添加 banner 轮播图片',
            showCancel: false
          })
        } else {
          self.setData({
            banners: result.ads
          });
        }
      }
    })
  },

  loadCategory: function(){
    var self = this;
    wx.request({
      url: app.globalData.domain +'/home/category',
      success: function(res) {
        var categories = [{id:0, mobileName:"全部"}];
        var result = util.convResult(res.data, pcategory.CategoryResult);
        if (res.statusCode == 200) {
          for (var i = 0; i < result.categories.length; i++) {
            categories.push(result.categories[i]);
          }
        }
        self.setData({
          categories:categories,
          activeCategoryId:0
        });
        self.getGoodsList(0);
      }
    })
  },

  loadCarts: function(){
    wx.request({
      url: app.globalData.domain + '/cart/list',
      header: {token: "00a1c0366b96e5c3bfff8bd1d85fa557"},
      success: function(res){
        var result = util.convResult(res.data, pcart.ListResult);
        wx.setStorage({
          key:"shopCarInfo",
          data:result.carts
        })
      }
    });
  },

  getGoodsList: function (categoryId) {
    var url = '';
    if (categoryId == 0) {
      url = app.globalData.domain + "/goods/recommend";
    } else {
      url = app.globalData.domain + '/goods/category/' + categoryId;
    }
    var that = this;
    wx.request({
      url: url,
      method: "GET",
      success: function(res) {
        that.setData({
          goods:[],
          loadingMoreHidden:true
        });
        var result = util.convResult(res.data, pgoods.RecommendResult);
        if (res.statusCode != 200 || result.recommend.length == 0) {
          that.setData({
            loadingMoreHidden:false,
          });
          return;
        }
        that.setData({
          goods:result.recommend,
        });

      }
    })
  },

  getCoupons: function () {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/discounts/coupons',
      data: {
        type: ''
      },
      success: function (res) {
        if (res.data.code == 0) {
          that.setData({
            hasNoCoupons: false,
            coupons: res.data.data
          });
        }
      }
    })
  },

  gitCoupon : function (e) {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/discounts/fetch',
      data: {
        id: e.currentTarget.dataset.id,
        token: app.globalData.token
      },
      success: function (res) {
        if (res.data.code == 20001 || res.data.code == 20002) {
          wx.showModal({
            title: '错误',
            content: '来晚了',
            showCancel: false
          })
          return;
        }
        if (res.data.code == 20003) {
          wx.showModal({
            title: '错误',
            content: '你领过了，别贪心哦~',
            showCancel: false
          })
          return;
        }
        if (res.data.code == 30001) {
          wx.showModal({
            title: '错误',
            content: '您的积分不足',
            showCancel: false
          })
          return;
        }
        if (res.data.code == 20004) {
          wx.showModal({
            title: '错误',
            content: '已过期~',
            showCancel: false
          })
          return;
        }
        if (res.data.code == 0) {
          wx.showToast({
            title: '领取成功，赶紧去下单吧~',
            icon: 'success',
            duration: 2000
          })
        } else {
          wx.showModal({
            title: '错误',
            content: res.data.msg,
            showCancel: false
          })
        }
      }
    })
  },

  onShareAppMessage: function () {
    return {
      title: wx.getStorageSync('mallName') + '——' + app.globalData.shareProfile,
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

  getNotice: function () {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/notice/list',
      data: { pageSize :5},
      success: function (res) {
        if (res.data.code == 0) {
          that.setData({
            noticeList: res.data.data
          });
        }
      }
    })
  }
})
