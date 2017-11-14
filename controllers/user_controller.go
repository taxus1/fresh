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

// List 购物车列表
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

	paddress := &puser.DefaultAddress{
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
	}

	c.WriteProto(ctx, paddress)
}
