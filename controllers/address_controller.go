package controllers

import (
	"fresh/model"
	paddress "fresh/proto/address"

	"github.com/kataras/iris"
)

type addressController struct {
	*controller
}

// AllAddress 用户所有地址
func (c *addressController) AllAddress(ctx iris.Context) {
	u, err := model.LoadUserBy(ctx.GetHeader("token"))
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	as, err := model.LoadUserAddress(u.ID)
	if err != nil {
		ctx.Text(err.Error())
		return
	}
	c.WriteProto(ctx, c.convAddresses(as))
}

// DefatultAddress 默认收货地址
func (c *addressController) DefatultAddress(ctx iris.Context) {
	u, err := model.LoadUserBy(ctx.GetHeader("token"))
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	a, err := model.LoadDefaultAddress(u.ID)
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	c.WriteProto(ctx, c.convAddress(a))
}

// Detail 地址详情
func (c *addressController) Detail(ctx iris.Context) {

}

func (c *addressController) convAddresses(as []*model.UserAddress) *paddress.AllAddress {
	plist := &paddress.AllAddress{}
	list := make([]*paddress.Address, len(as))
	for i, v := range as {
		list[i] = c.convAddress(v)
	}
	plist.Addresses = list
	return plist
}

func (c *addressController) convAddress(a *model.UserAddress) *paddress.Address {
	return &paddress.Address{
		ID:          a.ID,
		Consignee:   a.Consignee,
		Country:     a.Country,
		Province:    a.Province,
		City:        a.City,
		District:    a.District,
		Twon:        a.Twon,
		Address:     a.Address,
		Zipcode:     a.Zipcode,
		Mobile:      a.Mobile,
		IsDefault:   a.IsDefault,
		ProvinceStr: a.ProvinceStr.String,
		CityStr:     a.CityStr.String,
		DistrictStr: a.DistrictStr.String,
		TwonStr:     a.TwonStr.String,
	}
}
