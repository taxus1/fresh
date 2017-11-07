package controllers

import (
	"fresh/model"
	pcart "fresh/proto/cart"
	"strconv"

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
	if err = cart.Add(u, sg, uint16(num), session.ID()); err != nil {
		ctx.Text(err.Error())
		return
	}

	count, err := model.CountUserCarts(u.ID)
	if err != nil {
		ctx.Text(err.Error())
		return
	}
	ctx.Text(strconv.Itoa(int(count)))
}

// List 购物车列表
func (c *cartController) List(ctx iris.Context) {
	u, err := model.LoadUserBy(ctx.GetHeader("token"))
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	carts, err := model.LoadUserCarts(u.ID)
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	presult := &pcart.CartListResult{}
	plist := make([]*pcart.Cart, len(carts))
	for i, v := range carts {
		plist[i] = &pcart.Cart{
			ID:          v.ID,
			GoodsID:     v.GoodsID,
			GoodsSN:     v.GoodsSN,
			GoodsName:   v.GoodsName,
			MarketPrice: v.MarketPrice,
			GoodsPrice:  v.GoodsPrice,
			GoodsNum:    uint32(v.GoodsNum),
			SpecKeyName: v.SpecKeyName,
			Selected:    v.Selected,
			AddTime:     uint32(v.AddTime),
		}
	}
	presult.Carts = plist

	c.WriteProto(ctx, presult)
}
