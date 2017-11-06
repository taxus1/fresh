package controllers

import (
	"fresh/model"

	"github.com/kataras/iris"
)

type cartController struct {
	*controller
}

// Add 加入购物车
func (c *cartController) Add(ctx iris.Context) {
	session := sess.Start(ctx)
	gid, _ := ctx.URLParamInt("goodsID")
	num, _ := ctx.URLParamInt("num")
	item, _ := ctx.URLParamInt("itemID")

	u, err := model.LoadUserBy(ctx.GetHeader("token"))
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	sg, err := model.LoadSpecGoods(uint32(gid), uint32(item))
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	cart := model.NewCart()
	if err := cart.Add(u, sg, uint16(num), session.ID()); err != nil {
		ctx.Text(err.Error())
		return
	}
	ctx.Text("success")
}
