package controllers

import (
	"fresh/model"
	porder "fresh/proto/order"
	"log"

	"github.com/kataras/iris"
)

type orderController struct {
	*controller
}

// Create 创建订单
func (c *orderController) Create(ctx iris.Context) {
	params := &porder.CreateParam{}
	if err := c.ReadProto(ctx, params); err != nil {
		ctx.Text(err.Error())
		return
	}

	u, err := model.LoadUserBy(ctx.GetHeader("token"))
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	cs, err := model.LoadSelectedCarts(u.ID)
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	ua, err := model.LoadShippingAddress(params.AddressID)
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	s, err := model.LoadShippingBy("sto_express")
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	o := model.NewOrder()
	log.Println(o)
	if err := o.Create(cs, ua, params.Remark, s, u.ID); err != nil {
		ctx.Text(err.Error())
		log.Println(err)
		return
	}

	result := &porder.Order{
		ID:          o.ID,
		OrderSN:     o.OrderSN,
		TotalAmount: o.TotalAmount,
	}
	c.WriteProto(ctx, result)
}

// List 订单列表
func (c *orderController) List(ctx iris.Context) {
	u, err := model.LoadUserBy(ctx.GetHeader("token"))
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	owgs, err := model.LoadOrderList(u.ID)
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	presult := &porder.List{}
	powgs := make([]*porder.List_OrderWithGoods, len(owgs))
	for i, v := range owgs {
		powg := &porder.List_OrderWithGoods{
			Order: &porder.List_OrderWithGoods_Order{
				ID:            v.Order.ID,
				OrderState:    uint32(v.Order.OrderState),
				OrderSN:       v.Order.OrderSN,
				ShippingState: uint32(v.Order.ShippingState),
				PayState:      uint32(v.Order.PayState),
				GoodsPrice:    v.Order.GoodsPrice,
				ShippingPrice: v.Order.ShippingPrice,
				OrderAmount:   v.Order.OrderAmount,
				TotalAmount:   v.Order.TotalAmount,
				AddTime:       v.Order.AddTime,
				UserNote:      v.Order.UserNote,
				AdminNote:     v.Order.AdminNote,
			},
		}

		pogs := make([]*porder.List_OrderWithGoods_OrderGoods, len(v.OrderGoodses))
		for j, v1 := range v.OrderGoodses {
			pog := &porder.List_OrderWithGoods_OrderGoods{
				ID:          v1.ID,
				OrderID:     v1.OrderID,
				GoodsID:     v1.GoodsID,
				GoodsName:   v1.GoodsName,
				GoodsNum:    uint32(v1.GoodsNum),
				GoodsPrice:  v1.GoodsPrice,
				CostPrice:   v1.CostPrice,
				SpecKeyName: v1.SpecKeyName,
			}
			pogs[j] = pog
		}

		powg.OrderGoodses = pogs
		powgs[i] = powg
	}
	presult.Orders = powgs

	c.WriteProto(ctx, presult)
}