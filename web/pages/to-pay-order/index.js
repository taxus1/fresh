//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')
var paddress = require('../../proto/address.js').address

Page({
  data: {
    goodsList:[],
    isNeedLogistics:0, // 是否需要物流信息
    allGoodsPrice:0,
    yunPrice:0,
    allGoodsAndYunPrice:0,
    goodsJsonStr:"",
    orderType:"", //订单类型，购物车下单或立即支付下单，默认是购物车，
    totalPrice: 0,

    hasNoCoupons: true,
    coupons: [],
    youhuijine:0, //优惠券金额
    curCoupon:null // 当前选择使用的优惠券
  },

  onShow : function () {
    var self = this;
    var shopList = [];
    var totalPrice = 0.0;

    //购物车下单
    var shopCarInfoMem = wx.getStorageSync('shopCarInfo');
    if (shopCarInfoMem && shopCarInfoMem) {
      // shopList = shopCarInfoMem.shopList
      shopList = shopCarInfoMem.filter(entity => {
        if (entity.selected) {
          totalPrice += parseFloat(entity.goodsPrice)*entity.goodsNum;
          return true;
        }
        return false;
      });
    }
    self.setData({
      goodsList: shopList,
      totalPrice: totalPrice,
    });
    self.initShippingAddress();
  },

  initShippingAddress: function () {
    var self = this;
    wx.request({
      url: app.globalData.domain + '/address/default',
      method: "GET",
      header: {token: "00a1c0366b96e5c3bfff8bd1d85fa557"},
      success: (res) =>{
        if (res.statusCode == 200) {
          var result = util.convResult(res.data, paddress.Address);
          self.setData({
            curAddressData: result
          });
        }else{
          self.setData({
            curAddressData: null
          });
        }
        // self.processYunfei();
      }
    })
  },

  processYunfei: function () {
    var self = this;
    var goodsList = this.data.goodsList;
    var goodsJsonStr = "[";
    var isNeedLogistics = 0;
    var allGoodsPrice = 0;

    for (let i = 0; i < goodsList.length; i++) {
      let carShopBean = goodsList[i];
      if (carShopBean.logistics) {
        isNeedLogistics = 1;
      }
      allGoodsPrice += carShopBean.price * carShopBean.number;

      var goodsJsonStrTmp = '';
      if (i > 0) {
        goodsJsonStrTmp = ",";
      }
      goodsJsonStrTmp += '{"goodsId":' + carShopBean.goodsId + ',"number":' + carShopBean.number + ',"propertyChildIds":"' + carShopBean.propertyChildIds + '","logisticsType":0}';
      goodsJsonStr += goodsJsonStrTmp;


    }
    goodsJsonStr += "]";
    self.setData({
      isNeedLogistics: isNeedLogistics,
      goodsJsonStr: goodsJsonStr
    });
    // self.createOrder();
  },

  onLoad: function (e) {
    var self = this;
    //显示收货地址标识
    self.setData({
      isNeedLogistics: 1,
      orderType: e.orderType
    });
  },

  getDistrictId : function (obj, aaa){
    if (!obj) {
      return "";
    }
    if (!aaa) {
      return "";
    }
    return aaa;
  },

  createOrder:function (e) {
    wx.showLoading();
    var self = this;
    var loginToken = app.globalData.token // 用户登录 token
    var remark = ""; // 备注信息
    if (e) {
      remark = e.detail.value.remark; // 备注信息
    }

    var postData = {
      token: loginToken,
      goodsJsonStr: self.data.goodsJsonStr,
      remark: remark
    };
    if (self.data.isNeedLogistics > 0) {
      if (!self.data.curAddressData) {
        wx.hideLoading();
        wx.showModal({
          title: '错误',
          content: '请先设置您的收货地址！',
          showCancel: false
        })
        return;
      }
      postData.provinceId = self.data.curAddressData.provinceId;
      postData.cityId = self.data.curAddressData.cityId;
      if (self.data.curAddressData.districtId) {
        postData.districtId = self.data.curAddressData.districtId;
      }
      postData.address = self.data.curAddressData.address;
      postData.linkMan = self.data.curAddressData.linkMan;
      postData.mobile = self.data.curAddressData.mobile;
      postData.code = self.data.curAddressData.code;
    }
    if (self.data.curCoupon) {
      postData.couponId = self.data.curCoupon.id;
    }
    if (!e) {
      postData.calculate = "true";
    }


    wx.request({
      url: 'https://api.it120.cc/'+ app.globalData.subDomain +'/order/create',
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: postData, // 设置请求的 参数
      success: (res) =>{
        wx.hideLoading();
        if (res.data.code != 0) {
          wx.showModal({
            title: '错误',
            content: res.data.msg,
            showCancel: false
          })
          return;
        }

        if (e && "buyNow" != self.data.orderType) {
          // 清空购物车数据
          wx.removeStorageSync('shopCarInfo');
        }
        if (!e) {
          self.setData({
            isNeedLogistics: res.data.data.isNeedLogistics,
            allGoodsPrice: res.data.data.amountTotle,
            allGoodsAndYunPrice: res.data.data.amountLogistics + res.data.data.amountTotle,
            yunPrice: res.data.data.amountLogistics
          });
          self.getMyCoupons();
          return;
        }
        // 配置模板消息推送
        var postJsonString = {};
        postJsonString.keyword1 = { value: res.data.data.dateAdd, color: '#173177' }
        postJsonString.keyword2 = { value: res.data.data.amountReal + '元', color: '#173177' }
        postJsonString.keyword3 = { value: res.data.data.orderNumber, color: '#173177' }
        postJsonString.keyword4 = { value: '订单已关闭', color: '#173177' }
        postJsonString.keyword5 = { value: '您可以重新下单，请在30分钟内完成支付', color:'#173177'}
        app.sendTempleMsg(res.data.data.id, -1,
          'uJQMNVoVnpjRm18Yc6HSchn_aIFfpBn1CZRntI685zY', e.detail.formId,
          'pages/index/index', JSON.stringify(postJsonString));
        postJsonString = {};
        postJsonString.keyword1 = { value: '您的订单已发货，请注意查收', color: '#173177' }
        postJsonString.keyword2 = { value: res.data.data.orderNumber, color: '#173177' }
        postJsonString.keyword3 = { value: res.data.data.dateAdd, color: '#173177' }
        app.sendTempleMsg(res.data.data.id, 2,
          'GeZutJFGEWzavh69savy_KgtfGj4lHqlP7Zi1w8AOwo', e.detail.formId,
          'pages/order-details/index?id=' + res.data.data.id, JSON.stringify(postJsonString));
        // 下单成功，跳转到订单管理界面
        wx.redirectTo({
          url: "/pages/order-list/index"
        });
      }
    })
  },

  addAddress: function () {
    wx.navigateTo({
      url:"/pages/address-add/index"
    })
  },

  selectAddress: function () {
    wx.navigateTo({
      url:"/pages/select-address/index"
    })
  },

  getMyCoupons: function () {
    var self = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/discounts/my',
      data: {
        token: app.globalData.token,
        status:0
      },
      success: function (res) {
        if (res.data.code == 0) {
          var coupons = res.data.data.filter(entity => {
            return entity.moneyHreshold <= self.data.allGoodsAndYunPrice;
          });
          if (coupons.length > 0) {
            self.setData({
              hasNoCoupons: false,
              coupons: coupons
            });
          }
        }
      }
    })
  },
  bindChangeCoupon: function (e) {
    const selIndex = e.detail.value[0] - 1;
    if (selIndex == -1) {
      this.setData({
        youhuijine: 0,
        curCoupon:null
      });
      return;
    }
    //console.log("selIndex:" + selIndex);
    this.setData({
      youhuijine: this.data.coupons[selIndex].money,
      curCoupon: this.data.coupons[selIndex]
    });
  }
})
