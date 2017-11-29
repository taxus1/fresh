var commonCityData = require('../../utils/city.js')
//获取应用实例
var app = getApp()

var util = require('../../utils/util.js')
var pregion = require('../../proto/region.js').region
var paddress = require('../../proto/address.js').address
Page({
  data: {
    provinces:[],
    citys:[],
    districts:[],
    towns: [],
    selProvince:'请选择',
    selCity:'请选择',
    selDistrict:'请选择',
    selTown:'请选择',
    selProvinceIndex:0,
    selCityIndex:0,
    hiddenCitySel: true,
    selDistrictIndex:0,
    hiddenDistrictSel: true,
    selTownIndex:0,
    hiddenTownSel: true
  },
  bindCancel:function () {
    wx.navigateBack({})
  },
  bindSave: function(e) {
    var self = this;
    var linkMan = e.detail.value.linkMan;
    var address = e.detail.value.address;
    var mobile = e.detail.value.mobile;
    var code = e.detail.value.code;

    if (linkMan == ""){
      wx.showModal({
        title: '提示',
        content: '请填写联系人姓名',
        showCancel:false
      })
      return
    }
    if (mobile == ""){
      wx.showModal({
        title: '提示',
        content: '请填写手机号码',
        showCancel:false
      })
      return
    }
    if (this.data.selProvince == "请选择" || this.data.selCity == "请选择"){
      wx.showModal({
        title: '提示',
        content: '请选择地区',
        showCancel:false
      })
      return
    }
    var provinceId = this.data.provinces[this.data.selProvinceIndex].ID;
    var cityId = this.data.citys[this.data.selCityIndex].ID;
    var districtId = this.data.selDistrict == "请选择" || !this.data.selDistrict ? 0 : this.data.districts[this.data.selDistrictIndex].ID;
    var townId = this.data.selTown == "请选择" || !this.data.selTown ? 0 : this.data.towns[this.data.selTownIndex].ID;
    if (address == ""){
      wx.showModal({
        title: '提示',
        content: '请填写详细地址',
        showCancel:false
      })
      return
    }
    if (code == ""){
      wx.showModal({
        title: '提示',
        content: '请填写邮编',
        showCancel:false
      })
      return
    }
    var method = "POST";
    var url = app.globalData.domain + "/address/create";
    var apiAddid = self.data.id;
    if (apiAddid) {
      url = app.globalData.domain + "/address/" + apiAddid + "/update";
      method = "PUT";
    }
    var params = paddress.CreateParam.create({address: {
      consignee: linkMan,
    	province: provinceId,
    	city: cityId,
    	district: districtId,
    	twon: townId,
    	address: address,
    	zipcode: code,
    	mobile: mobile,
    }});
    var buf = paddress.CreateParam.encode(params).finish();
    wx.request({
      url: url,
      method: method,
      header: {token: app.globalData.token},
      data: wx.arrayBufferToBase64(buf),
      success: function(res) {
        if (res.statusCode != 200) {
          // 登录错误
          wx.hideLoading();
          wx.showModal({
            title: '失败',
            content: res.data.msg,
            showCancel:false
          })
          return;
        }
        // 跳转到结算页面
        wx.navigateBack({})
      }
    })
  },

  initCityData:function(level, pid, cb){
    var self = this;
    wx.request({
      url: app.globalData.domain + '/region/' + pid + '/children',
      header: {token: app.globalData.token},
      success: function(res) {
        var result = util.convResult(res.data, pregion.Children);
        console.log(result);
        switch(level) {
          case 1:
            self.setData({
              provinces: result.regions,
            });
            break;
          case 2:
            self.setData({
              citys: result.regions,
              hiddenCitySel: result.regions.length == 0,
              hiddenDistrictSel: true,
              hiddenTownSel: true,
            });
            break;
          case 3:
            self.setData({
              districts: result.regions,
              hiddenDistrictSel: result.regions.length == 0,
              hiddenTownSel: true,
            });
            break;
          case 4:
            self.setData({
              towns: result.regions,
              hiddenTownSel: result.regions.length == 0,
            });
            break;
        }
        if (cb) {
          cb();
        }
      }
    });
  },

  bindPickerProvinceChange:function(event){
    var selIterm = this.data.provinces[event.detail.value];
    this.setData({
      selProvince:selIterm.name,
      selProvinceIndex:event.detail.value,
      selCity:'请选择',
      selCityIndex:0,
      selDistrict:'请选择',
      selDistrictIndex: 0
    })
    this.initCityData(2, selIterm.ID);
  },

  bindPickerCityChange:function (event) {
    var selIterm = this.data.citys[event.detail.value];
    this.setData({
      selCity:selIterm.name,
      selCityIndex:event.detail.value,
      selDistrict: '请选择',
      selDistrictIndex: 0
    })
    this.initCityData(3, selIterm.ID);
  },

  bindPickerDistrictChange:function (event) {
    var selIterm = this.data.districts[event.detail.value];
    if (selIterm && selIterm.name && event.detail.value) {
      this.setData({
        selDistrict: selIterm.name,
        selDistrictIndex: event.detail.value,
        selTownIndex: 0,
        selTown: '请选择',
      })
    }
    this.initCityData(4, selIterm.ID);
  },

  bindPickerTownChange:function (event) {
    var selIterm = this.data.towns[event.detail.value];
    if (selIterm && selIterm.name && event.detail.value) {
      this.setData({
        selTown: selIterm.name,
        selTownIndex: event.detail.value
      })
    }
  },

  onLoad: function (e) {
    var self = this;
    this.initCityData(1, 0);
    var addr = e.addr;
    if (addr) {
      // 初始化原数据
      var hiddenCitySel = true, hiddenDistrictSel = true, hiddenTownSel = true;
      addr = JSON.parse(addr);
      if (addr.city) {
        self.initCityData(2, addr.province, function(){
          self.setData({
              hiddenCitySel: false
          });
          if (addr.district) {
            self.initCityData(3, addr.city, function(){
              self.setData({
                hiddenDistrictSel: false
              });
              if (addr.twon) {
                self.initCityData(4, addr.district, function(){
                  self.setData({
                    hiddenTownSel: false
                  });
                });
              }
            });
          }
        });
      }
      self.setData({
        id: addr.ID,
        addressData: addr,
        selProvince: addr.provinceStr,
        selCity: addr.cityStr,
        selDistrict: addr.districtStr,
        selTown: addr.twonStr,
        });
      self.setDBSaveAddressId(addr);
    }
  },

  setDBSaveAddressId: function(data) {
    var retSelIdx = 0;
    for (var i = 0; i < commonCityData.cityData.length; i++) {
      if (data.provinceId == commonCityData.cityData[i].id) {
        this.data.selProvinceIndex = i;
        for (var j = 0; j < commonCityData.cityData[i].cityList.length; j++) {
          if (data.cityId == commonCityData.cityData[i].cityList[j].id) {
            this.data.selCityIndex = j;
            for (var k = 0; k < commonCityData.cityData[i].cityList[j].districtList.length; k++) {
              if (data.districtId == commonCityData.cityData[i].cityList[j].districtList[k].id) {
                this.data.selDistrictIndex = k;
              }
            }
          }
        }
      }
    }
   },
  selectCity: function () {

  },
  deleteAddress: function (e) {
    var self = this;
    var id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '提示',
      content: '确定要删除该收货地址吗？',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: app.globalData.domain + '/address/' + id + '/delete',
            method: "DELETE",
            header: {token: app.globalData.token},
            success: (res) => {
              wx.navigateBack({})
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})
