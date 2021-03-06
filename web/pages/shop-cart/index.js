//index.js
var app = getApp()
var util = require('../../utils/util.js')
var pcart = require('../../proto/cart.js').cart
Page({
  data: {
    goodsList:{
      saveHidden:true,
      totalPrice:0,
      allSelect:true,
      noSelect:false,
      list:[]
    },
    delBtnWidth:120,    //删除按钮宽度单位（rpx）
  },

 //获取元素自适应后的实际宽度
  getEleWidth:function(w){
    var real = 0;
    try {
      var res = wx.getSystemInfoSync().windowWidth;
      var scale = (750/2)/(w/2);  //以宽度750px设计稿做宽度的自适应
      // console.log(scale);
      real = Math.floor(res/scale);
      return real;
    } catch (e) {
      return false;
     // Do something when catch error
    }
  },

  initEleWidth:function(){
    var delBtnWidth = this.getEleWidth(this.data.delBtnWidth);
    this.setData({
      delBtnWidth:delBtnWidth
    });
  },

  onLoad: function () {
      this.initEleWidth();
      this.onShow();
  },

  onShow: function(){
    var self =  this;
    var shopList = [];
    // 获取购物车数据
    wx.request({
      url: app.globalData.domain + '/cart/list',
      header: {token: "00a1c0366b96e5c3bfff8bd1d85fa557"},
      success: function(res){
        var result = util.convResult(res.data, pcart.ListResult);
        self.data.goodsList.list = result.carts;
        self.setGoodsList(self.getSaveHide(), self.totalPrice(), self.allSelect(), self.noSelect(), result.carts);
      }
    });

  },

  toIndexPage:function(){
      wx.switchTab({
            url: "/pages/index/index"
      });
  },

  touchS:function(e){
    if(e.touches.length==1){
      this.setData({
        startX:e.touches[0].clientX
      });
    }
  },
  touchM:function(e){
  var index = e.currentTarget.dataset.index;

    if(e.touches.length==1){
      var moveX = e.touches[0].clientX;
      var disX = this.data.startX - moveX;
      var delBtnWidth = this.data.delBtnWidth;
      var left = "";
      if(disX == 0 || disX < 0){//如果移动距离小于等于0，container位置不变
        left = "margin-left:0px";
      }else if(disX > 0 ){//移动距离大于0，container left值等于手指移动距离
        left = "margin-left:-"+disX+"px";
        if(disX>=delBtnWidth){
          left = "left:-"+delBtnWidth+"px";
        }
      }
      var list = this.data.goodsList.list;
      if(index!="" && index !=null){
        list[parseInt(index)].left = left;
        this.setGoodsList(this.getSaveHide(),this.totalPrice(),this.allSelect(),this.noSelect(),list);
      }
    }
  },

  touchE:function(e){
    var index = e.currentTarget.dataset.index;
    if(e.changedTouches.length==1){
      var endX = e.changedTouches[0].clientX;
      var disX = this.data.startX - endX;
      var delBtnWidth = this.data.delBtnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var left = disX > delBtnWidth/2 ? "margin-left:-"+delBtnWidth+"px":"margin-left:0px";
      var list = this.data.goodsList.list;
     if(index!=="" && index != null){
        list[parseInt(index)].left = left;
        this.setGoodsList(this.getSaveHide(),this.totalPrice(),this.allSelect(),this.noSelect(),list);

      }
    }
  },
  delItem:function(e){
    var index = e.currentTarget.dataset.index;
    var list = this.data.goodsList.list;
    list.splice(index,1);
    this.setGoodsList(this.getSaveHide(),this.totalPrice(),this.allSelect(),this.noSelect(),list);
  },

  selectTap:function(e){
    var index = e.currentTarget.dataset.index;
    this.editCart(parseInt(e.currentTarget.dataset.index), 0, true);
   },

   totalPrice:function(){
      var list = this.data.goodsList.list;
      var total = 0;
      for(var i = 0 ; i < list.length ; i++){
          var curItem = list[i];
          if(curItem.selected){
            total += parseFloat(curItem.goodsPrice)*curItem.goodsNum;
          }
      }
      return total.toFixed(2);
   },
   allSelect:function(){
      var list = this.data.goodsList.list;
      var allSelect = false;
      for(var i = 0 ; i < list.length ; i++){
          var curItem = list[i];
          if(curItem.selected){
            allSelect = true;
          }else{
             allSelect = false;
             break;
          }
      }
      return allSelect;
   },
   noSelect:function(){
      var list = this.data.goodsList.list;
      var noSelect = 0;
      for(var i = 0 ; i < list.length ; i++){
          var curItem = list[i];
          if(!curItem.selected){
            noSelect++;
          }
      }
      if(noSelect == list.length){
         return true;
      }else{
        return false;
      }
   },
   setGoodsList:function(saveHidden,total,allSelect,noSelect,list){
      this.setData({
        goodsList:{
          saveHidden:saveHidden,
          totalPrice:total,
          allSelect:allSelect,
          noSelect:noSelect,
          list:list
        }
      });
      var tempNumber = 0;
      var shopCarInfo = list;
      wx.setStorage({
        key:"shopCarInfo",
        data:shopCarInfo
      })
   },

   bindAllSelect:function(){
    var self = this;
    var currentAllSelect = this.data.goodsList.allSelect;
    var list = this.data.goodsList.list;
    var modify = [];
    for(var i = 0 ; i < list.length ; i++){
      var item = list[i];
      item.selected = !currentAllSelect;
      modify[i] = pcart.ModifyParam.create({ID: item.ID, goodsNum: item.goodsNum, selected: item.selected});
    }
    var params = pcart.ModifyAllParam.create({carts: modify});
    var buf = pcart.ModifyAllParam.encode(params).finish();
    wx.request({
      url: app.globalData.domain + '/cart/modify/all',
      method: "PATCH",
      header: {token: "00a1c0366b96e5c3bfff8bd1d85fa557"},
      data: wx.arrayBufferToBase64(buf),
      success: function(res){
        var result = util.convResult(res.data, pcart.ListResult);
        for (var i = 0; i < list.length; i++) {
          for (var j = 0; j < result.carts.length; j++) {
            if (list[i].ID === result.carts[j].ID) {
              list[i].goodsNum = result.carts[j].goodsNum;
              list[i].selected = result.carts[j].selected;
              break;
            }
          }
        }
        self.setGoodsList(self.getSaveHide(), self.totalPrice(), self.allSelect(), self.noSelect(), list);
      }
    });
   },

   jiaBtnTap:function(e){
    this.editCart(parseInt(e.currentTarget.dataset.index), 1);
   },

   jianBtnTap:function(e){
    this.editCart(parseInt(e.currentTarget.dataset.index), -1);
   },

   editCart: function (index, change, selected) {
    var self = this;
    var list = self.data.goodsList.list;
    var cart = list[index];
    var num = cart.goodsNum + change ;
    if(num < 1 || num > 10){
      return
    }
    cart.goodsNum = num ;
    if (typeof selected !== 'undefined') {
      cart.selected = !cart.selected;
    }
    var params = pcart.ModifyParam.create({
         goodsNum: cart.goodsNum,
         selected: cart.selected
       });
    var buf = pcart.ModifyParam.encode(params).finish();
    wx.request({
     url: app.globalData.domain + '/cart/' + cart.ID + '/modify',
     method: "PATCH",
     data: wx.arrayBufferToBase64(buf),
     header: {token: "00a1c0366b96e5c3bfff8bd1d85fa557"},
     success: function(res){
       cart = util.convResult(res.data, pcart.Cart);
       self.setGoodsList(self.getSaveHide(),self.totalPrice(),self.allSelect(),self.noSelect(),list);
     }
    });
   },

   editTap:function(){
     var list = this.data.goodsList.list;
     for(var i = 0 ; i < list.length ; i++){
            var curItem = list[i];
            curItem.active = false;
     }
     this.setGoodsList(!this.getSaveHide(),this.totalPrice(),this.allSelect(),this.noSelect(),list);
   },

   saveTap:function(){
     var list = this.data.goodsList.list;
     for(var i = 0 ; i < list.length ; i++){
            var curItem = list[i];
            curItem.active = true;
     }
     this.setGoodsList(!this.getSaveHide(),this.totalPrice(),this.allSelect(),this.noSelect(),list);
   },

   getSaveHide:function(){
     var saveHidden = this.data.goodsList.saveHidden;
     return saveHidden;
   },

   deleteSelected:function(){
      var self = this;
      var list = this.data.goodsList.list;
      var removed = [];
      var i = 0;
      list = list.filter(function(curGoods) {
        if (curGoods.selected) {
          removed[i] = pcart.ModifyParam.create({ID: curGoods.ID});
          i++;
        }
        return !curGoods.selected;
      });
      var params = pcart.ModifyAllParam.create({carts: removed});
      var buf = pcart.ModifyAllParam.encode(params).finish();
      wx.request({
      url: app.globalData.domain + '/cart/delete/selected',
      method: "DELETE",
      data: wx.arrayBufferToBase64(buf),
      header: {token: "00a1c0366b96e5c3bfff8bd1d85fa557"},
      success: function(res){
        var result = util.convResult(res.data, pcart.ListResult);
        self.setGoodsList(self.getSaveHide(),self.totalPrice(),self.allSelect(),self.noSelect(),result.carts || []);
      }
      });
    },

    toPayOrder:function(){
      wx.showLoading();
      var that = this;
      if (this.data.goodsList.noSelect) {
        wx.hideLoading();
        return;
      }
      that.navigateToPayOrder();
      // 重新计算价格，判断库存
      // var shopList = [];
      // var shopCarInfoMem = wx.getStorageSync('shopCarInfo');
      // if (shopCarInfoMem && shopCarInfoMem) {
      //   // shopList = shopCarInfoMem.shopList
      //   shopList = shopCarInfoMem.filter(entity => {
      //     return entity.selected;
      //   });
      // }
      // if (shopList.length == 0) {
      //   wx.hideLoading();
      //   return;
      // }
      // var isFail = false;
      // var doneNumber = 0;
      // var needDoneNUmber = shopList.length;
    },

    navigateToPayOrder:function () {
      wx.hideLoading();
      wx.navigateTo({
        url:"/pages/to-pay-order/index"
      })
    }



})
