//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')
var paddress = require('../../proto/address.js').address

Page({
  data: {
    addressList:[]
  },

  selectTap: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.request({
      url: app.globalData.domain + '/address/' + id +'/setDefault',
      method: "PATCH",
      header: {token: app.globalData.token},
      success: (res) =>{
        wx.navigateBack({})
      }
    })
  },

  addAddess : function () {
    wx.navigateTo({
      url:"/pages/address-add/index"
    })
  },

  editAddess: function (e) {
    wx.navigateTo({
      url: "/pages/address-add/index?addr=" + JSON.stringify(e.currentTarget.dataset.addr)
    })
  },

  onLoad: function () {
    console.log("Load");
  },

  onShow : function () {
    this.initShippingAddress();
  },

  initShippingAddress: function () {
    var self = this;
    wx.request({
      url: app.globalData.domain + '/address/all',
      method: "GET",
      header: {token: app.globalData.token},
      success: (res) =>{
        if (res.statusCode == 200) {
          var result = util.convResult(res.data, paddress.AllAddress);
          self.setData({
            addressList: result.addresses
          });
        } else if (res.data.code == 700){
          self.setData({
            addressList: null
          });
        }
      }
    })
  }

})
