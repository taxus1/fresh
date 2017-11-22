var commonCityData = require('../../utils/city.js')
//获取应用实例
var app = getApp()

var util = require('../../utils/util.js')
var pregion = require('../../proto/region.js').region

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
    selDistrictIndex:0,
    selTownIndex:0
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
    var cityId = commonCityData.cityData[this.data.selProvinceIndex].cityList[this.data.selCityIndex].id;
    var districtId;
    if (this.data.selDistrict == "请选择" || !this.data.selDistrict){
      districtId = '';
    } else {
      districtId = commonCityData.cityData[this.data.selProvinceIndex].cityList[this.data.selCityIndex].districtList[this.data.selDistrictIndex].id;
    }
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
    var apiAddoRuPDATE = "add";
    var apiAddid = self.data.id;
    if (apiAddid) {
      apiAddoRuPDATE = "update";
    } else {
      apiAddid = 0;
    }
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/user/shipping-address/' + apiAddoRuPDATE,
      data: {
        token: app.globalData.token,
        id: apiAddid,
        provinceId: commonCityData.cityData[this.data.selProvinceIndex].id,
        cityId: cityId,
        districtId: districtId,
        linkMan:linkMan,
        address:address,
        mobile:mobile,
        code:code,
        isDefault:'true'
      },
      success: function(res) {
        if (res.data.code != 0) {
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

  initCityData:function(level, obj){
    var self = this;
    var pid = obj ? obj.ID : 0;
    wx.request({
      url: app.globalData.domain + '/region/' + pid + '/children',
      header: {token: app.globalData.token},
      success: function(res) {
        var result = util.convResult(res.data, pregion.Children);
        console.log(result);
        switch(level) {
          case 1:
            self.setData({
              provinces: result.regions
            });
            break;
          case 2:
            self.setData({
              citys: result.regions
            });
            break;
          case 3:
            self.setData({
              districts: result.regions
            });
            break;
          case 4:
            self.setData({
              towns: result.regions
            });
            break;
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
    this.initCityData(2, selIterm)
  },

  bindPickerCityChange:function (event) {
    var selIterm = this.data.citys[event.detail.value];
    this.setData({
      selCity:selIterm.name,
      selCityIndex:event.detail.value,
      selDistrict: '请选择',
      selDistrictIndex: 0
    })
    this.initCityData(3, selIterm)
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
    this.initCityData(4, selIterm)
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
    this.initCityData(1);
    var addr = e.addr;
    if (addr) {
      // 初始化原数据
      addr = JSON.parse(addr);
      console.log(addr);
      self.setData({
        id: addr.ID,
        addressData: addr,
        selProvince: addr.provinceStr,
        selCity: addr.cityStr,
        selDistrict: addr.districtStr
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
            url: 'https://api.it120.cc/' + app.globalData.subDomain + '/user/shipping-address/delete',
            data: {
              token: app.globalData.token,
              id: id
            },
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
