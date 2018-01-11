package controllers

import (
	"fresh/model"
	porder "fresh/proto/order"
	"log"
	"time"

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

	state, _ := ctx.Params().GetInt("state")

	owgs, err := model.LoadOrderList(u.ID, state == 1, state == 2, state == 3)
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
				AddTime:       time.Unix(v.Order.AddTime, 0).Format("2006-01-02 15:16:17"),
				UserNote:      v.Order.UserNote,
				AdminNote:     v.Order.AdminNote,
				StateName:     v.Order.StateName(),
			},
		}

		pogs := make([]*porder.List_OrderWithGoods_Goods, len(v.OrderGoodses))
		for j, v1 := range v.OrderGoodses {
			pog := &porder.List_OrderWithGoods_Goods{
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

		powg.Goodses = pogs
		powgs[i] = powg
	}
	presult.Orders = powgs

	c.WriteProto(ctx, presult)
}

// Detail 详情
func (c *orderController) Detail(ctx iris.Context) {
	id, _ := ctx.Params().GetInt("id")

	owg, err := model.LoadDetail(uint32(id))
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	presult := &porder.Detail{
		OrderWithGoods: &porder.List_OrderWithGoods{
			Order: &porder.List_OrderWithGoods_Order{
				ID:            owg.Order.ID,
				OrderState:    uint32(owg.Order.OrderState),
				OrderSN:       owg.Order.OrderSN,
				ShippingState: uint32(owg.Order.ShippingState),
				PayState:      uint32(owg.Order.PayState),
				GoodsPrice:    owg.Order.GoodsPrice,
				ShippingPrice: owg.Order.ShippingPrice,
				OrderAmount:   owg.Order.OrderAmount,
				TotalAmount:   owg.Order.TotalAmount,
				AddTime:       time.Unix(owg.Order.AddTime, 0).Format("2006-01-02-03 14:15:16"),
				UserNote:      owg.Order.UserNote,
				AdminNote:     owg.Order.AdminNote,
				StateName:     owg.Order.StateName(),
			},
		},
		Address: &porder.Address{
			ProvinceStr: owg.Address.ProvinceStr,
			CityStr:     owg.Address.CityStr,
			DistrictStr: owg.Address.DistrictStr,
			TwonStr:     owg.Address.TwonStr,
			Consignee:   owg.Address.Consignee,
			Mobile:      owg.Address.Mobile,
			Address:     owg.Address.Address,
		},
	}

	pogs := make([]*porder.List_OrderWithGoods_Goods, len(owg.OrderGoodses))
	for j, v1 := range owg.OrderGoodses {
		pog := &porder.List_OrderWithGoods_Goods{
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
	presult.OrderWithGoods.Goodses = pogs

	c.WriteProto(ctx, presult)
}
