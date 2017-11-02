//index.js
//获取应用实例
var app = getApp();
var WxParse = require('../../wxParse/wxParse.js');
var util = require('../../utils/util.js')
var pgoods = require('../../proto/goods.js').goods
Page({
  data: {
    id: 0,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    goodsDetail: {},
    gallers: [],
    specs: [],
    specPrices: [],
    comments: [],
    swiperCurrent: 0,
    hasMoreSelect:false,
    selectSpec: "选择: ",
    selectSizePrice:0,
    shopNum:0,
    hideShopPopup:true,
    buyNumber:0,
    buyNumMin:1,
    buyNumMax:0,
    store: 0,

    propertyChildIds:"",
    propertyChildNames:"",
    canSubmit:false, //  选中规格尺寸时候是否允许加入购物车
    shopCarInfo:{},
    shopType: "addShopCar",//购物类型，加入购物车或立即购买，默认为加入购物车
  },

  //事件处理函数
  swiperchange: function(e) {
       this.setData({
        swiperCurrent: e.detail.current
    })
  },

  onLoad: function (e) {
    var self = this;
    this.setData({
      id: e.id,
    });
    // 获取购物车数据
    wx.getStorage({
      key: 'shopCarInfo',
      success: function(res) {
        self.setData({
          shopCarInfo:res.data,
          shopNum:res.data.shopNum
        });
      }
    })
    wx.request({
      url: app.globalData.domain + '/goods/detail/1', // + self.data.id,
      success: function(res) {
        pgoods.SpecItem.prototype.active = false;
        var result = util.convResult(res.data, pgoods.DetailResult);
        console.log(result);
        var defaultSpecIds = [];
        result.specPrices.forEach(function (v) {
          if (result.goods.shopPrice === v.price) {
            defaultSpecIds = v.key.split("_");
            return;
          }
        });
        if (defaultSpecIds.length == 0 && result.specPrices.length > 0) {
          defaultSpecIds = result.specPrices[0].key.split("_");
        }
        var selectSpecTemp = "";
        var specs = result.specs;
        for(var i = 0; i < specs.length; i++){
          selectSpecTemp = selectSpecTemp + " " + specs[i].specName;
          if (defaultSpecIds.length > 0) {
            for (var j = 0; j < specs[i].items.length; j++) {
              if (defaultSpecIds.indexOf(specs[i].items[j].itemID + "") > -1) {
                specs[i].items[j].active = true;
              }
            }
          }
        }
        self.setData({
          selectSpec: self.data.selectSpec + selectSpecTemp,
          hasMoreSelect: selectSpecTemp.length > 0,
          goodsDetail: result.goods,
          gallers: result.gallers,
          comments: result.comms,
          specs: specs,
          actives: defaultSpecIds,
          specPrices: result.specPrices,
          selectSizePrice: result.goods.shopPrice.toFixed(2),
          store: result.goods.storeCount,
          buyNumMax: result.goods.storeCount,
          buyNumber: result.goods.storeCount > 0 ? 1: 0
        });
        WxParse.wxParse('article', 'html', result.goods.goodsContent, self, 5);
      }
    })
    this.reputation(e.id);
  },
  goShopCar: function () {
    wx.reLaunch({
      url: "/pages/shop-cart/index"
    });
  },
  toAddShopCar: function () {
    this.setData({
      shopType: "addShopCar"
    })
    this.bindGuiGeTap();
  },
  tobuy: function () {
    this.setData({
      shopType: "tobuy"
    });
    this.bindGuiGeTap();
    /*    if (this.data.goodsDetail.properties && !this.data.canSubmit) {
          this.bindGuiGeTap();
          return;
        }
        if(this.data.buyNumber < 1){
          wx.showModal({
            title: '提示',
            content: '暂时缺货哦~',
            showCancel:false
          })
          return;
        }
        this.addShopCar();
        this.goShopCar();*/
  },
  /**
   * 规格选择弹出框
   */
  bindGuiGeTap: function() {
     this.setData({
        hideShopPopup: false
    })
  },
  /**
   * 规格选择弹出框隐藏
   */
  closePopupTap: function() {
     this.setData({
        hideShopPopup: true
    })
  },
  numJianTap: function() {
     if(this.data.buyNumber > this.data.buyNumMin){
        var currentNum = this.data.buyNumber;
        currentNum--;
        this.setData({
            buyNumber: currentNum
        })
     }
  },
  numJiaTap: function() {
     if(this.data.buyNumber < this.data.buyNumMax){
        var currentNum = this.data.buyNumber;
        currentNum++ ;
        this.setData({
            buyNumber: currentNum
        })
     }
  },
  /**
   * 选择商品规格
   * @param {Object} e
   */
  labelItemTap: function(e) {
    var self = this;
    var selected = [];
    // 取消该分类下的子栏目所有的选中状态
    self.data.specs.forEach(function (spec, i){
      spec.items.forEach(function (item, j){
        if (e.currentTarget.dataset.propertyindex == i && e.currentTarget.dataset.propertychildindex === j) {
            item.active = true;
        } else if (e.currentTarget.dataset.propertyindex == i) {
          item.active = false;
        }
        if (item.active) {
          selected[i] = item.itemID;
        }
      });
    });

    var canSubmit = false;
    if (self.data.specs.length == selected.length) {
      canSubmit = true;
    }

    var selectSizePrice = 0.0;
    var selectedKey = selected.sort(function(a, b){
      return a > b;
    }).join("_");
    self.data.specPrices.forEach(function (sp, i){
      if (sp.key === selectedKey && canSubmit) {
        self.setData({
          selectSizePrice: sp.price.toFixed(2),
          store: sp.storeCount,
          buyNumMax: sp.storeCount,
          buyNumber: sp.storeCount > 0 ? 1 : 0,
        });
        return;
      }
    });

    self.setData({
      specs: self.data.specs,
      canSubmit:canSubmit
    })
  },
  /**
  * 加入购物车
  */
  addShopCar:function(){
    if (this.data.goodsDetail.properties && !this.data.canSubmit) {
      if (!this.data.canSubmit){
        wx.showModal({
          title: '提示',
          content: '请选择商品规格！',
          showCancel: false
        })
      }
      this.bindGuiGeTap();
      return;
    }
    if(this.data.buyNumber < 1){
      wx.showModal({
        title: '提示',
        content: '购买数量不能为0！',
        showCancel:false
      })
      return;
    }
    //组建购物车
    var shopCarInfo = this.bulidShopCarInfo();

    this.setData({
      shopCarInfo:shopCarInfo,
      shopNum:shopCarInfo.shopNum
    });

    // 写入本地存储
    wx.setStorage({
      key:"shopCarInfo",
      data:shopCarInfo
    })
    this.closePopupTap();
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      duration: 2000
    })
    //console.log(shopCarInfo);

    //shopCarInfo = {shopNum:12,shopList:[]}
  },
	/**
	  * 立即购买
	  */
  buyNow:function(){
    if (this.data.goodsDetail.properties && !this.data.canSubmit) {
      if (!this.data.canSubmit) {
        wx.showModal({
          title: '提示',
          content: '请选择商品规格！',
          showCancel: false
        })
      }
      this.bindGuiGeTap();
      wx.showModal({
        title: '提示',
        content: '请先选择规格尺寸哦~',
        showCancel:false
      })
      return;
    }
    if(this.data.buyNumber < 1){
      wx.showModal({
        title: '提示',
        content: '购买数量不能为0！',
        showCancel:false
      })
      return;
    }
    //组建立即购买信息
    var buyNowInfo = this.buliduBuyNowInfo();
    // 写入本地存储
    wx.setStorage({
      key:"buyNowInfo",
      data:buyNowInfo
    })
    this.closePopupTap();

    wx.navigateTo({
      url: "/pages/to-pay-order/index?orderType=buyNow"
    })
  },
  /**
   * 组建购物车信息
   */
  bulidShopCarInfo: function () {
    // 加入购物车
    var shopCarMap = {};
    shopCarMap.goodsId = this.data.goodsDetail.basicInfo.id;
    shopCarMap.pic = this.data.goodsDetail.basicInfo.pic;
    shopCarMap.name = this.data.goodsDetail.basicInfo.name;
    // shopCarMap.label=this.data.goodsDetail.basicInfo.id; 规格尺寸
    shopCarMap.propertyChildIds = this.data.propertyChildIds;
    shopCarMap.label = this.data.propertyChildNames;
    shopCarMap.price = this.data.selectSizePrice;
    shopCarMap.left = "";
    shopCarMap.active = true;
    shopCarMap.number = this.data.buyNumber;
    shopCarMap.logisticsType = this.data.goodsDetail.basicInfo.logisticsId;
    shopCarMap.logistics = this.data.goodsDetail.logistics;
    shopCarMap.weight = this.data.goodsDetail.basicInfo.weight;

    var shopCarInfo = this.data.shopCarInfo;
    if (!shopCarInfo.shopNum) {
      shopCarInfo.shopNum = 0;
    }
    if (!shopCarInfo.shopList) {
      shopCarInfo.shopList = [];
    }
    var hasSameGoodsIndex = -1;
    for (var i = 0; i < shopCarInfo.shopList.length; i++) {
      var tmpShopCarMap = shopCarInfo.shopList[i];
      if (tmpShopCarMap.goodsId == shopCarMap.goodsId && tmpShopCarMap.propertyChildIds == shopCarMap.propertyChildIds) {
        hasSameGoodsIndex = i;
        shopCarMap.number = shopCarMap.number + tmpShopCarMap.number;
        break;
      }
    }

    shopCarInfo.shopNum = shopCarInfo.shopNum + this.data.buyNumber;
    if (hasSameGoodsIndex > -1) {
      shopCarInfo.shopList.splice(hasSameGoodsIndex, 1, shopCarMap);
    } else {
      shopCarInfo.shopList.push(shopCarMap);
    }
    return shopCarInfo;
  },
	/**
	 * 组建立即购买信息
	 */
  buliduBuyNowInfo: function () {
    var shopCarMap = {};
    shopCarMap.goodsId = this.data.goodsDetail.basicInfo.id;
    shopCarMap.pic = this.data.goodsDetail.basicInfo.pic;
    shopCarMap.name = this.data.goodsDetail.basicInfo.name;
    // shopCarMap.label=this.data.goodsDetail.basicInfo.id; 规格尺寸
    shopCarMap.propertyChildIds = this.data.propertyChildIds;
    shopCarMap.label = this.data.propertyChildNames;
    shopCarMap.price = this.data.selectSizePrice;
    shopCarMap.left = "";
    shopCarMap.active = true;
    shopCarMap.number = this.data.buyNumber;
    shopCarMap.logisticsType = this.data.goodsDetail.basicInfo.logisticsId;
    shopCarMap.logistics = this.data.goodsDetail.logistics;
    shopCarMap.weight = this.data.goodsDetail.basicInfo.weight;

    var buyNowInfo = {};
    if (!buyNowInfo.shopNum) {
      buyNowInfo.shopNum = 0;
    }
    if (!buyNowInfo.shopList) {
      buyNowInfo.shopList = [];
    }
    /*    var hasSameGoodsIndex = -1;
        for (var i = 0; i < toBuyInfo.shopList.length; i++) {
          var tmpShopCarMap = toBuyInfo.shopList[i];
          if (tmpShopCarMap.goodsId == shopCarMap.goodsId && tmpShopCarMap.propertyChildIds == shopCarMap.propertyChildIds) {
            hasSameGoodsIndex = i;
            shopCarMap.number = shopCarMap.number + tmpShopCarMap.number;
            break;
          }
        }
        toBuyInfo.shopNum = toBuyInfo.shopNum + this.data.buyNumber;
        if (hasSameGoodsIndex > -1) {
          toBuyInfo.shopList.splice(hasSameGoodsIndex, 1, shopCarMap);
        } else {
          toBuyInfo.shopList.push(shopCarMap);
        }*/

    buyNowInfo.shopList.push(shopCarMap);
    return buyNowInfo;
  },
  onShareAppMessage: function () {
    return {
      title: this.data.goodsDetail.basicInfo.name,
      path: '/pages/goods-details/index?id=' + this.data.goodsDetail.basicInfo.id,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  reputation: function (goodsId) {
    var self = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/reputation',
      data: {
        goodsId: goodsId
      },
      success: function (res) {
        if (res.data.code == 0) {
          //console.log(res.data.data);
          self.setData({
            reputation: res.data.data
          });
        }
      }
    })
  }
})
