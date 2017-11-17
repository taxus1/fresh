package model

import (
	"database/sql"
	"fmt"
	"fresh/pkg"
	"time"
)

var actionSubmit = "您提交了订单，请等待系统确认"
var stateDescSubmit = "提交订单"

// Order 订单
type Order struct {
	ID              uint32  // 订单id mediumint(8)
	OrderSN         string  // 订单编号 varchar(20)
	UserID          uint32  // 用户id mediumint(8)
	OrderState      uint    // 订单状态 tinyint(1)
	ShippingState   uint    // 发货状态 tinyint(1)
	PayState        uint    // 支付状态 tinyint(1)
	Consignee       string  // 收货人 varchar(60)
	Country         uint32  // 国家 int(11)
	Province        uint32  // 省份 int(11)
	City            uint32  // 城市 int(11)
	District        uint32  // 县区 int(11)
	Twon            uint32  // 乡镇 int(11)
	Address         string  // 地址 varchar(255)
	Zipcode         string  // 邮政编码 varchar(60)
	Mobile          string  // 手机 varchar(60)
	Email           string  // 邮件 varchar(60)
	ShippingCode    string  // 物流code varchar(32)
	ShippingName    string  // 物流名称 varchar(120)
	PayCode         string  // 支付code varchar(32)
	PayName         string  // 支付方式名称 varchar(120)
	InvoiceTitle    string  // 发票抬头 varchar(256)
	GoodsPrice      float32 // 商品总价 decimal(10,2
	ShippingPrice   float32 // 邮费 decimal(10,2
	UserMoney       float32 // 使用余额 decimal(10,2
	CouponPrice     float32 // 优惠券抵扣 decimal(10,2
	Integral        uint32  // 使用积分 int(10)
	IntegralMoney   float32 // 使用积分抵多少钱 decimal(10,2
	OrderAmount     float32 // 应付款金额 decimal(10,2
	TotalAmount     float32 // 订单总价 decimal(10,2
	AddTime         int64   // 下单时间 int(10)
	ShippingTime    int64   // 最后新发货时间 int(11)
	ConfirmTime     int64   // 收货确认时间 int(10)
	PayTime         int32   // 支付时间 int(10)
	TransactionID   float32 // 第三方平台交易流水号 varchar(255)
	OrderPromType   uint    // 0默认1抢购2团购3优惠4预售5虚拟 tinyint(4)
	OrderPromID     uint32  // 活动id smallint(6)
	OrderPromAmount float32 // 活动优惠金额 decimal(10,2
	Discount        float32 // 价格调整 decimal(10,2
	UserNote        string  // 用户备注 varchar(255)
	AdminNote       string  // 管理员备注 varchar(255)
	ParentSN        string  // 父单单号 varchar(100)
	IsDistribut     bool    // 是否已分成0未分成1已分成 tinyint(1)
	PaidMoney       float32 // 订金 decimal(10,2
	Deleted         bool    // 用户假删除标识,1:删除,0未删除 tinyint(1)
}

// NewOrder 创建订单
func NewOrder() *Order {
	return &Order{
		OrderSN:       pkg.GenOrderCode(),
		OrderState:    0,
		ShippingState: 0,
		PayState:      0,
		AddTime:       time.Now().Unix(),
	}
}

// Create 创建订单
func (o *Order) Create(cs Carts, ua *UserAddress, note string, s *Shipping, userID uint32) error {
	o.UserID = userID
	o.Consignee = ua.Consignee
	o.Country = ua.Country
	o.Province = ua.Province
	o.City = ua.City
	o.District = ua.District
	o.Twon = ua.Twon
	o.Address = ua.Address
	o.Zipcode = ua.Zipcode
	o.Mobile = ua.Mobile
	o.Email = ua.Email
	o.ShippingCode = s.ShippingCode
	o.ShippingName = s.ShippingName
	o.UserNote = note

	pc := NewPriceCalculator(cs)
	o.GoodsPrice = pc.GetGoodsPrice()
	o.TotalAmount = pc.GetPrice()

	return o.saveRelative(cs)
}

func (o *Order) saveRelative(cs Carts) error {
	return DataSource.TxExec(func(tx *sql.Tx) error {
		if err := o.insert(tx); err != nil {
			return err
		}

		ods := NewOrderGoodses(cs)
		if err := ods.Create(tx, o.ID); err != nil {
			return err
		}

		if err := NewOrderAction().Create(tx, o, o.UserID, actionSubmit, stateDescSubmit); err != nil {
			return err
		}

		return cs.Remove(tx)
	})
}

func (o *Order) insert(tx *sql.Tx) error {
	insert := DataSource.BuildInsert("tp_order", OrderCols, 1)
	id, err := DataSource.SaveOne(insert, o.Values()...)
	if err != nil {
		return fmt.Errorf("[Order.Create] %v", err)
	}
	o.ID = uint32(id)
	return nil
}

// OrderWithGoods 订单和对应的订单商品
type OrderWithGoods struct {
	Order        *Order
	OrderGoodses []*OrderGoods
}

// LoadOrderList 获取用户所有订单
func LoadOrderList(userID uint32) ([]*OrderWithGoods, error) {
	var orderID, orderStatus, shippingStatus, payStatus, addTime, recID, goodsID, goodsNum sql.NullInt64
	var orderGoodsPrice, goodsPrice, shippingPrice, orderAmount, totalAmount sql.NullFloat64
	var orderSN, userNote, adminNote, goodsName, specKeyName sql.NullString
	var err error
	query := `
	SELECT o.order_id, o.order_status, o.order_sn, o.shipping_status, o.pay_status, o.goods_price, o.shipping_price, o.order_amount,
	o.total_amount, o.add_time, o.user_note, o.admin_note,rec_id,goods_id,goods_name,goods_num, og.goods_price,spec_key_name
 	FROM tp_order o LEFT JOIN tp_order_goods og ON o.order_id = og.order_id
	WHERE  o.deleted = 0 AND o.user_id = ?
	`
	owgs, i, m := []*OrderWithGoods{}, 0, map[uint32]int{}
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			if err = rs.Scan(&orderID, &orderStatus, &orderSN, &shippingStatus, &payStatus, &orderGoodsPrice, &shippingPrice, &orderAmount, &totalAmount, &addTime, &userNote, &adminNote, &recID, &goodsID, &goodsName, &goodsNum, &goodsPrice, &specKeyName); err != nil {
				return err
			}
			var owg *OrderWithGoods
			og := &OrderGoods{
				ID:          uint32(DataSource.SafeInt64(recID)),
				OrderID:     uint32(DataSource.SafeInt64(orderID)),
				GoodsID:     uint32(DataSource.SafeInt64(goodsID)),
				GoodsName:   DataSource.SafeString(goodsName),
				GoodsNum:    uint16(DataSource.SafeInt64(goodsNum)),
				GoodsPrice:  float32(DataSource.SafeFloat64(goodsPrice)),
				SpecKeyName: DataSource.SafeString(specKeyName),
			}
			if v, ok := m[og.OrderID]; ok {
				owg = owgs[v]
				owg.OrderGoodses = append(owg.OrderGoodses, og)
			} else {
				m[og.OrderID] = i
				owg = &OrderWithGoods{
					Order: &Order{
						ID:            uint32(DataSource.SafeInt64(orderID)),
						OrderState:    uint(DataSource.SafeInt64(orderStatus)),
						OrderSN:       DataSource.SafeString(orderSN),
						ShippingState: uint(DataSource.SafeInt64(shippingStatus)),
						PayState:      uint(DataSource.SafeInt64(payStatus)),
						GoodsPrice:    float32(DataSource.SafeFloat64(goodsPrice)),
						ShippingPrice: float32(DataSource.SafeFloat64(shippingPrice)),
						OrderAmount:   float32(DataSource.SafeFloat64(orderAmount)),
						TotalAmount:   float32(DataSource.SafeFloat64(totalAmount)),
						AddTime:       DataSource.SafeInt64(addTime),
						UserNote:      DataSource.SafeString(userNote),
						AdminNote:     DataSource.SafeString(adminNote),
					},
				}
				owg.OrderGoodses = append(owg.OrderGoodses, og)
				owgs = append(owgs, owg)
				i++
			}
		}
		return nil
	}
	err = DataSource.QueryMorePrepare(query, f, userID)
	return owgs, err
}

func (o *Order) Values() []interface{} {
	return []interface{}{
		&o.OrderSN,
		&o.UserID,
		&o.OrderState,
		&o.ShippingState,
		&o.PayState,
		&o.Consignee,
		&o.Country,
		&o.Province,
		&o.City,
		&o.District,
		&o.Twon,
		&o.Address,
		&o.Zipcode,
		&o.Mobile,
		&o.Email,
		&o.ShippingCode,
		&o.ShippingName,
		&o.InvoiceTitle,
		&o.GoodsPrice,
		&o.ShippingPrice,
		&o.OrderAmount,
		&o.TotalAmount,
		&o.AddTime,
		&o.Deleted,
		&o.UserNote,
	}
}
