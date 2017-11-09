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

	cart, err := model.LoadSpecCart(uint32(gid), sg.Key)
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	if cart.ID == 0 {
		if err = cart.Add(u, sg, uint16(num), session.ID()); err != nil {
			ctx.Text(err.Error())
			return
		}
	} else {
		if err = cart.Modify(cart.GoodsNum+uint16(num), true); err != nil {
			ctx.Text(err.Error())
			return
		}
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

	c.WriteProto(ctx, c.convCarts(carts))
}

// Modify 修改特定购物车数量或者选择状态
func (c *cartController) Modify(ctx iris.Context) {
	params := &pcart.ModifyParam{}
	err := c.ReadProto(ctx, params)
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	id, _ := ctx.Params().GetInt("id")

	cart, err := model.LoadCart(uint32(id))
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	if err := cart.Modify(uint16(params.GoodsNum), params.Selected); err != nil {
		ctx.Text(err.Error())
		return
	}

	c.WriteProto(ctx, c.convCart(cart))
}

// ModifyAll 修改所有购物车数量或者选择状态
func (c *cartController) ModifyAll(ctx iris.Context) {
	params := &pcart.ModifyAllParam{}
	err := c.ReadProto(ctx, params)
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	carts := make(model.Carts, len(params.Carts))
	for i, v := range params.Carts {
		carts[i] = &model.Cart{
			ID:       v.ID,
			GoodsNum: uint16(v.GoodsNum),
			Selected: v.Selected,
		}
	}
	if err = carts.Modify(); err != nil {
		ctx.Text(err.Error())
		return
	}

	c.WriteProto(ctx, c.convCarts(carts))
}

// RemoveAll 删除所选购物车
func (c *cartController) RemoveSelected(ctx iris.Context) {
	params := &pcart.ModifyAllParam{}
	err := c.ReadProto(ctx, params)
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	carts := make(model.Carts, len(params.Carts))
	for i, v := range params.Carts {
		carts[i] = &model.Cart{
			ID: v.ID,
		}
	}
	if err = carts.RemoveNoTx(); err != nil {
		ctx.Text(err.Error())
		return
	}

	c.List(ctx)
}

func (c *cartController) convCarts(carts model.Carts) *pcart.ListResult {
	presult := &pcart.ListResult{}
	plist := make([]*pcart.Cart, len(carts))
	for i, v := range carts {
		plist[i] = c.convCart(v)
	}
	presult.Carts = plist
	return presult
}

func (c *cartController) convCart(cart *model.Cart) *pcart.Cart {
	return &pcart.Cart{
		ID:          cart.ID,
		GoodsID:     cart.GoodsID,
		GoodsSN:     cart.GoodsSN,
		GoodsName:   cart.GoodsName,
		MarketPrice: cart.MarketPrice,
		GoodsPrice:  cart.GoodsPrice,
		GoodsNum:    uint32(cart.GoodsNum),
		SpecKeyName: cart.SpecKeyName,
		Selected:    cart.Selected,
		AddTime:     uint32(cart.AddTime),
	}
}
