package model

import (
	"database/sql"
	"fmt"
)

// OrderGoods 订单商品
type OrderGoods struct {
	ID               uint32  // 表id自增 mediumint(8)
	OrderID          uint32  // 订单id mediumint(8)
	GoodsID          uint32  // 商品id mediumint(8)
	GoodsName        string  // 视频名称 varchar(120)
	GoodsSN          string  // 商品货号 varchar(60)
	GoodsNum         uint16  // 购买数量 smallint(5)
	MarketPrice      float32 // 市场价 decimal(10,
	GoodsPrice       float32 // 本店价 decimal(10,
	CostPrice        float32 // 商品成本价 decimal(10,
	MemberGoodsPrice float32 // 会员折扣价 decimal(10,
	GiveIntegral     uint32  // 购买商品赠送积分 mediumint(8)
	SpecKey          string  // 商品规格key varchar(128)
	SpecKeyName      string  // 规格对应的中文名字 varchar(128)
	BarCode          string  // 条码 varchar(64)
	IsComment        bool    // 是否评价 tinyint(1)
	PromType         uint    // 0 普通订单,1 限时抢购, 2 团购 , 3 促销优惠,4预售 tinyint(1)
	PromID           uint32  // 活动id int(11)
	IsSend           bool    // 0未发货，1已发货，2已换货，3已退货 tinyint(1)
	DeliveryID       uint32  // 发货单ID int(11)
	Sku              string  // sku varchar(128)
}

// OrderGoodses 订单所有商品
type OrderGoodses []*OrderGoods

// NewOrderGoodses 订单商品
func NewOrderGoodses(cs *Carts) *OrderGoodses {
	goodses := make(OrderGoodses, len(*cs))
	for i, v := range *cs {
		goods := &OrderGoods{
			GoodsID:          v.GoodsID,
			GoodsName:        v.GoodsName,
			GoodsSN:          v.GoodsSN,
			GoodsNum:         v.GoodsNum,
			MarketPrice:      v.MarketPrice,
			GoodsPrice:       v.GoodsPrice,
			CostPrice:        v.CostPrice,
			MemberGoodsPrice: v.MemberGoodsPrice,
			GiveIntegral:     0,
			SpecKey:          v.SpecKey,
			SpecKeyName:      v.SpecKeyName,
			BarCode:          v.BarCode,
			IsComment:        false,
			PromType:         0,
			PromID:           0,
			IsSend:           false,
			DeliveryID:       0,
			Sku:              v.Sku,
		}
		goodses[i] = goods
	}
	return &goodses
}

// Create 创建订单商品
func (o *OrderGoodses) Create(tx *sql.Tx, orderID uint32) error {
	insert := DataSource.BuildInsert("tp_order_goods", OrderGoodsCols, len(*o))
	stmt, err := tx.Prepare(insert)
	if err != nil {
		return fmt.Errorf("[OrderGoodses.Create.Prepare] %v", err)
	}

	_, err = stmt.Exec(o.Values(orderID)...)
	if err != nil {
		err = fmt.Errorf("[OrderGoodses.Create.Exec] %v", err)
	}
	return err
}

func (o *OrderGoodses) Values(orderID uint32) []interface{} {
	values := []interface{}{}
	for _, v := range *o {
		values = append(values, orderID)
		values = append(values, v.GoodsID)
		values = append(values, v.GoodsName)
		values = append(values, v.GoodsSN)
		values = append(values, v.GoodsNum)
		values = append(values, v.MarketPrice)
		values = append(values, v.GoodsPrice)
		values = append(values, v.CostPrice)
		values = append(values, v.MemberGoodsPrice)
		values = append(values, v.GiveIntegral)
		values = append(values, v.SpecKey)
		values = append(values, v.SpecKeyName)
		values = append(values, v.BarCode)
		values = append(values, v.IsComment)
		values = append(values, v.PromType)
		values = append(values, v.PromID)
		values = append(values, v.IsSend)
		values = append(values, v.DeliveryID)
		values = append(values, v.Sku)
	}
	return values
}
