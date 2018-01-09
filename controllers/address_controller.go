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

// Create 添加
func (c *addressController) Create(ctx iris.Context) {
	ua, err := c.createOrUpdate(ctx)
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	u, err := model.LoadUserBy(ctx.GetHeader("token"))
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	if err := ua.Create(u.ID); err != nil {
		ctx.Text(err.Error())
		return
	}

	result := &paddress.Address{
		ID: ua.ID,
	}
	c.WriteProto(ctx, result)
}

// Update 更新
func (c *addressController) Update(ctx iris.Context) {
	ua, err := c.createOrUpdate(ctx)
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	_, err = model.LoadUserBy(ctx.GetHeader("token"))
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	id, _ := ctx.Params().GetInt("id")
	ua.ID = uint32(id)

	if err := ua.Update(); err != nil {
		ctx.Text(err.Error())
		return
	}

	result := &paddress.Address{
		ID: ua.ID,
	}
	c.WriteProto(ctx, result)
}

// SetDefault 设置默认收货地址
func (c *addressController) SetDefault(ctx iris.Context) {
	u, err := model.LoadUserBy(ctx.GetHeader("token"))
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	id, _ := ctx.Params().GetInt("id")
	ua, err := model.LoadAddress(uint32(id), u.ID)
	if err != nil {
		ctx.Text(err.Error())
	}

	if err := ua.SetDefault(); err != nil {
		ctx.Text(err.Error())
	}
	ctx.WriteString("0")
}

func (c *addressController) createOrUpdate(ctx iris.Context) (*model.UserAddress, error) {
	params := &paddress.CreateParam{}
	if err := c.ReadProto(ctx, params); err != nil {
		return nil, err
	}

	return &model.UserAddress{
		Consignee: params.GetAddress().Consignee,
		Country:   params.GetAddress().Country,
		Province:  params.GetAddress().Province,
		City:      params.GetAddress().City,
		District:  params.GetAddress().District,
		Twon:      params.GetAddress().Twon,
		Address:   params.GetAddress().Address,
		Zipcode:   params.GetAddress().Zipcode,
		Mobile:    params.GetAddress().Mobile,
	}, nil
}

// Delete 删除
func (c *addressController) Delete(ctx iris.Context) {
	if _, err := model.LoadUserBy(ctx.GetHeader("token")); err != nil {
		ctx.Text(err.Error())
		return
	}

	id, _ := ctx.Params().GetInt("id")
	ua := &model.UserAddress{ID: uint32(id)}

	if err := ua.Delete(); err != nil {
		ctx.Text(err.Error())
		return
	}
	ctx.WriteString("0")
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
