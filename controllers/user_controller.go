package controllers

import (
	"fresh/model"
	puser "fresh/proto/user"

	"github.com/kataras/iris"
)

type userController struct {
	*controller
}

func (c *userController) Get() {
}

// AllAddress 用户所有地址
func (c *userController) AllAddress(ctx iris.Context) {
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
func (c *userController) DefatultAddress(ctx iris.Context) {
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

func (c *userController) convAddresses(as []*model.UserAddress) *puser.AllAddress {
	plist := &puser.AllAddress{}
	list := make([]*puser.Address, len(as))
	for i, v := range as {
		list[i] = c.convAddress(v)
	}
	plist.Addresses = list
	return plist
}

func (c *userController) convAddress(a *model.UserAddress) *puser.Address {
	return &puser.Address{
		ID:        a.ID,
		Consignee: a.Consignee,
		Country:   a.Country,
		Province:  a.Province,
		City:      a.City,
		District:  a.District,
		Twon:      a.Twon,
		Address:   a.Address,
		Zipcode:   a.Zipcode,
		Mobile:    a.Mobile,
		IsDefault: a.IsDefault,
	}
}
