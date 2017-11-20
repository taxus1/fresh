var app = getApp();
var util = require('../../utils/util.js')
var porder = require('../../proto/order.js').order
Page({
    data:{
      orderId:0,
      goodsId: 0,
        goodsList:[
            {
                pic:'/images/goods02.png',
                name:'爱马仕（HERMES）大地男士最多两行文字超出就这样显…',
                price:'300.00',
                label:'大地50ml',
                number:2
            },
            {
                pic:'/images/goods02.png',
                name:'爱马仕（HERMES）大地男士最多两行文字超出就这样显…',
                price:'300.00',
                label:'大地50ml',
                number:2
            }
        ],
        yunPrice:"10.00"
    },

    onLoad:function(e){
      var orderId = e.id;
      this.data.orderId = orderId;
      this.setData({
        orderId: orderId,
        goodsId: orderId
      });
    },

    onShow : function () {
      var self = this;
      wx.request({
        url: app.globalData.domain + '/order/detail/' + self.data.orderId,
        success: (res) => {
          wx.hideLoading();
          if (res.statusCode != 200) {
            wx.showModal({
              title: '错误',
              content: res.data.msg,
              showCancel: false
            })
            return;
          }
          var result = util.convResult(res.data, porder.Detail);
          console.log(result);
          self.setData({
            orderDetail: result
          });
        }
      })
      // var yunPrice = parseFloat(this.data.yunPrice);
      // var allprice = 0;
      // var goodsList = this.data.goodsList;
      // for (var i = 0; i < goodsList.length; i++) {
      //   allprice += parseFloat(goodsList[0].price) * goodsList[0].number;
      // }
      // this.setData({
      //   allGoodsPrice: allprice,
      //   yunPrice: yunPrice
      // });
    },

    goodsDetail: function (e) {
      wx.navigateTo({
        url:"/pages/goods-details/index?id="+e.currentTarget.dataset.id
      })
    },

    wuliuDetailsTap:function(e){
      var orderId = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: "/pages/wuliu/index?id=" + orderId
      })
    },
    confirmBtnTap:function(e){
      var self = this;
      var orderId = e.currentTarget.dataset.id;
      wx.showModal({
          title: '确认您已收到商品？',
          content: '',
          success: function(res) {
            if (res.confirm) {
              wx.showLoading();
              wx.request({
                url: 'https://api.it120.cc/' + app.globalData.subDomain + '/order/delivery',
                data: {
                  token: app.globalData.token,
                  orderId: orderId
                },
                success: (res) => {
                  if (res.data.code == 0) {
                    self.onShow();
                  }
                }
              })
            }
          }
      })
    },
    submitReputation: function (e) {
      var self = this;
      var postJsonString = {};
      postJsonString.token = app.globalData.token;
      postJsonString.orderId = this.data.orderId;
      var reputations = [];
      var i = 0;
      while (e.detail.value["orderGoodsId" + i]) {
        var orderGoodsId = e.detail.value["orderGoodsId" + i];
        var goodReputation = e.detail.value["goodReputation" + i];
        var goodReputationRemark = e.detail.value["goodReputationRemark" + i];

        var reputations_json = {};
        reputations_json.id = orderGoodsId;
        reputations_json.reputation = goodReputation;
        reputations_json.remark = goodReputationRemark;

        reputations.push(reputations_json);
        i++;
      }
      postJsonString.reputations = reputations;
      wx.showLoading();
      wx.request({
        url: 'https://api.it120.cc/' + app.globalData.subDomain + '/order/reputation',
        data: {
          postJsonString: postJsonString
        },
        success: (res) => {
          wx.hideLoading();
          if (res.data.code == 0) {
            self.onShow();
          }
        }
      })
    }
})
