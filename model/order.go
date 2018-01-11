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
	ProvinceStr     string  // 省份
	City            uint32  // 城市 int(11)
	CityStr         string  // 城市
	District        uint32  // 县区 int(11)
	DistrictStr     string  // 县区
	Twon            uint32  // 乡镇 int(11)
	TwonStr         string  // 乡镇
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

// StateName 状态名称
func (o *Order) StateName() string {
	switch o.OrderState {
	case 0, 1:
		if o.PayState == 0 {
			return "待付款"
		}
		if o.ShippingState == 0 {
			return "待发货"
		}
		return "待收货"
	case 2:
		return "待评价"
	case 3:
		return "取消"
	case 4:
		return "已完成"
	case 5:
		return "已作废"
	default:
		return "未知状态"
	}
}

// OrderWithGoods 订单和对应的订单商品
type OrderWithGoods struct {
	Order        *Order
	OrderGoodses []*OrderGoods
}

// LoadOrderList 获取用户所有订单
func LoadOrderList(userID uint32, nopay, noship, finish bool) ([]*OrderWithGoods, error) {
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
	if nopay {
		query = query + ` AND pay_status = 0 AND order_status = 0`
	}
	if noship {
		query = query + ` AND shipping_status = 0 AND pay_status = 1 AND order_status IN (0, 1)`
	}
	if finish {
		query = query + ` AND  order_status = 2`
	}
	query = query + ` ORDER BY add_time DESC LIMIT 20`
	owgs, i, m := []*OrderWithGoods{}, 0, map[uint32]int{}
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			if err = rs.Scan(&orderID, &orderStatus, &orderSN, &shippingStatus, &payStatus, &orderGoodsPrice, &shippingPrice, &orderAmount, &totalAmount, &addTime, &userNote, &adminNote, &recID, &goodsID, &goodsName, &goodsNum, &goodsPrice, &specKeyName); err != nil {
				return err
			}
			var owg *OrderWithGoods
			og := &OrderGoods{
				ID:          uint32(recID.Int64),
				OrderID:     uint32(orderID.Int64),
				GoodsID:     uint32(goodsID.Int64),
				GoodsName:   goodsName.String,
				GoodsNum:    uint16(goodsNum.Int64),
				GoodsPrice:  float32(goodsPrice.Float64),
				SpecKeyName: specKeyName.String,
			}
			if v, ok := m[og.OrderID]; ok {
				owg = owgs[v]
				owg.OrderGoodses = append(owg.OrderGoodses, og)
			} else {
				m[og.OrderID] = i
				owg = &OrderWithGoods{
					Order: &Order{
						ID:            uint32(orderID.Int64),
						OrderState:    uint(orderStatus.Int64),
						OrderSN:       orderSN.String,
						ShippingState: uint(shippingStatus.Int64),
						PayState:      uint(payStatus.Int64),
						GoodsPrice:    float32(goodsPrice.Float64),
						ShippingPrice: float32(shippingPrice.Float64),
						OrderAmount:   float32(orderAmount.Float64),
						TotalAmount:   float32(totalAmount.Float64),
						AddTime:       addTime.Int64,
						UserNote:      userNote.String,
						AdminNote:     adminNote.String,
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

// Detail 详情结构体
type Detail struct {
	Order        *Order
	OrderGoodses []*OrderGoods
	Address      struct {
		ProvinceStr string
		CityStr     string
		DistrictStr string
		TwonStr     string
		Consignee   string
		Mobile      string
		Address     string
	}
}

// LoadDetail 订单详情
func LoadDetail(id uint32) (*Detail, error) {
	var orderID, orderStatus, shippingStatus, payStatus, addTime, recID, goodsID, goodsNum sql.NullInt64
	var orderGoodsPrice, goodsPrice, shippingPrice, orderAmount, totalAmount sql.NullFloat64
	var orderSN, userNote, adminNote, consignee, mobile, address, province, city, district, twon, goodsName, specKeyName sql.NullString
	var err error
	query := `
	SELECT o.order_id, o.order_status, o.order_sn, o.shipping_status, o.pay_status, o.goods_price, o.shipping_price, o.order_amount,
	o.total_amount, o.add_time, o.user_note, o.admin_note, o.consignee, o.mobile, o.address, r1.name AS province, r2.name AS city, r3.name AS district, r4.name AS twon,
	 rec_id,goods_id,goods_name,goods_num, og.goods_price,spec_key_name
 	FROM tp_order o LEFT JOIN tp_order_goods og ON o.order_id = og.order_id
	LEFT JOIN tp_region r1 ON o.province = r1.id
	LEFT JOIN tp_region r2 ON o.city = r2.id
	LEFT JOIN tp_region r3 ON o.district = r3.id
	LEFT JOIN tp_region r4 ON o.twon = r4.id
	WHERE  o.order_id = ?
	`
	var owg *Detail
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			if err = rs.Scan(&orderID, &orderStatus, &orderSN, &shippingStatus, &payStatus, &orderGoodsPrice, &shippingPrice, &orderAmount, &totalAmount, &addTime, &userNote, &adminNote, &consignee, &mobile, &address, &province, &city, &district, &twon, &recID, &goodsID, &goodsName, &goodsNum, &goodsPrice, &specKeyName); err != nil {
				return err
			}
			if owg == nil {
				owg = &Detail{
					Order: &Order{
						ID:            uint32(orderID.Int64),
						OrderState:    uint(orderStatus.Int64),
						OrderSN:       orderSN.String,
						ShippingState: uint(shippingStatus.Int64),
						PayState:      uint(payStatus.Int64),
						GoodsPrice:    float32(goodsPrice.Float64),
						ShippingPrice: float32(shippingPrice.Float64),
						OrderAmount:   float32(orderAmount.Float64),
						TotalAmount:   float32(totalAmount.Float64),
						AddTime:       addTime.Int64,
						UserNote:      userNote.String,
						AdminNote:     adminNote.String,
						ProvinceStr:   province.String,
					},
				}
				owg.Address.CityStr = city.String
				owg.Address.DistrictStr = district.String
				owg.Address.TwonStr = twon.String
				owg.Address.Consignee = consignee.String
				owg.Address.Mobile = mobile.String
				owg.Address.Address = address.String
			}
			og := &OrderGoods{
				ID:          uint32(recID.Int64),
				OrderID:     uint32(orderID.Int64),
				GoodsID:     uint32(goodsID.Int64),
				GoodsName:   goodsName.String,
				GoodsNum:    uint16(goodsNum.Int64),
				GoodsPrice:  float32(goodsPrice.Float64),
				SpecKeyName: specKeyName.String,
			}
			owg.OrderGoodses = append(owg.OrderGoodses, og)
		}
		return nil
	}
	err = DataSource.QueryMorePrepare(query, f, id)
	return owg, err
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
