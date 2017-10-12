package model

import (
	"database/sql"
	"fmt"
	"log"
	"strconv"
	"time"
)

// Cart 购物车
type Cart struct {
	ID               uint32  // 购物车表 int(8)
	UserID           uint32  // 用户id mediumint(8)
	SessionID        string  // session char(128)
	GoodsID          uint32  // 商品id mediumint(8)
	GoodsSN          string  // 商品货号 varchar(60)
	GoodsName        string  // 商品名称 varchar(120)
	MarketPrice      float32 // 市场价 decimal(10,
	GoodsPrice       float32 // 本店价 decimal(10,
	MemberGoodsPrice float32 // 会员折扣价 decimal(10,
	GoodsNum         uint16  // 购买数量 smallint(5)
	SpecKey          string  // 商品规格key 对应tpSpecGoodsPrice 表 varchar(64)
	SpecKeyName      string  // 商品规格组合名称 varchar(64)
	BarCode          string  // 商品条码 varchar(64)
	Selected         bool    // 购物车选中状态 tinyint(1)
	AddTime          int64   // 加入购物车的时间 int(11)
	PromType         uint8   // 0 普通订单,1 限时抢购, 2 团购 , 3 促销优惠 tinyint(1)
	PromID           uint32  // 活动iD int(11)
	Sku              string  // sku varchar(128)

	CostPrice float32 // 成本价，下单时放进order_goods
}

// Carts 购物车
type Carts []*Cart

// NewCart 新建购物车
func NewCart() *Cart {
	return &Cart{}
}

// LoadUserCarts 加载用户购物车
func LoadUserCarts(userID uint32) (*Carts, error) {
	var cs Carts
	query := `SELECT c.* FROM tp_cart c WHERE user_id = ?`
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			c := new(Cart)
			if err := rs.Scan(c.Fields()...); err != nil {
				return err
			}
			cs = append(cs, c)
		}
		return nil
	}
	err := DataSource.QueryMore(query, f, userID)
	if err != nil && err != sql.ErrNoRows {
		err = fmt.Errorf("[LoadUserCarts] %v", err)
	}
	return &cs, err
}

// LoadSelectedCarts 获取购物车中选中的商品
func LoadSelectedCarts(userID uint32) (*Carts, error) {
	var cs Carts
	query := ` SELECT c.*, g.cost_price FROM tp_cart c
		LEFT JOIN tp_goods g ON c.goods_id = g.goods_id
		WHERE selected = 1 AND user_id = ?
	`
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			c := new(Cart)
			if err := rs.Scan(c.Fields()...); err != nil {
				return err
			}
			cs = append(cs, c)
		}
		return nil
	}
	err := DataSource.QueryMore(query, f, userID)
	if err != nil && err != sql.ErrNoRows {
		err = fmt.Errorf("[LoadSelectedCarts] %v", err)
	}
	return &cs, err
}

// Remove 删除购物车
func (c *Carts) Remove(tx *sql.Tx) error {
	var ids string
	for i, v := range *c {
		ids = ids + strconv.FormatUint(uint64(v.ID), 10)
		if i < len(*c)-1 {
			ids = ids + ","
		}
	}
	delete := "DELETE FROM tp_cart WHERE id IN (" + ids + ")"
	log.Printf("%s", ids)
	_, err := tx.Exec(delete)
	return err
}

// Add 添加商品到购物车
func (c *Cart) Add(u *User, sg *SpecGoods, num uint16, sid string) error {
	c.UserID = u.ID
	c.SessionID = sid
	c.GoodsID = sg.GetGoods().ID
	c.GoodsSN = sg.GetGoods().GoodsSN
	c.GoodsName = sg.GetGoods().GoodsName
	c.MarketPrice = sg.GetGoods().MarketPrice
	c.GoodsPrice = sg.GetGoods().ShopPrice
	c.MemberGoodsPrice = sg.GetGoods().ShopPrice * u.Discount
	c.GoodsNum = num
	c.SpecKey = sg.GetSpec().Key
	c.SpecKeyName = sg.GetSpec().KeyName
	c.BarCode = sg.GetSpec().BarCode
	c.Selected = true
	c.AddTime = time.Now().Unix()
	c.Sku = sg.GetGoods().Sku

	insert := DataSource.BuildInsert("tp_cart", CartCols, 1)
	id, err := DataSource.SaveOne(insert, c.Values()...)
	if err != nil {
		err = fmt.Errorf("[Cart.Add] %v", err)
	}
	c.ID = uint32(id)
	return err
}

// Modify 修改购物车
func (c *Cart) Modify(num uint16, selected bool) error {
	update := `UPDATE tp_cart SET goods_num = ?, selected = ? WHERE id = ?`
	_, err := DataSource.Update(update, num, selected, c.ID)
	if err != nil {
		err = fmt.Errorf("[Cart.Modify] %v", err)
	}
	return err
}

// Remove 删除购物车
func (c *Cart) Remove() error {
	remove := `DELETE FROM tp_cart WHERE id = ?`
	_, err := DataSource.Update(remove, c.ID)
	if err != nil {
		err = fmt.Errorf("[Cart.Remove] %v", err)
	}
	return err
}

func (c *Cart) Values() []interface{} {
	return []interface{}{
		&c.UserID,
		&c.SessionID,
		&c.GoodsID,
		&c.GoodsSN,
		&c.GoodsName,
		&c.MarketPrice,
		&c.GoodsPrice,
		&c.MemberGoodsPrice,
		&c.GoodsNum,
		&c.SpecKey,
		&c.SpecKeyName,
		&c.BarCode,
		&c.Selected,
		&c.AddTime,
		&c.Sku,
		&c.CostPrice,
	}
}

func (c *Cart) Fields() []interface{} {
	return []interface{}{
		&c.ID,
		&c.UserID,
		&c.SessionID,
		&c.GoodsID,
		&c.GoodsSN,
		&c.GoodsName,
		&c.MarketPrice,
		&c.GoodsPrice,
		&c.MemberGoodsPrice,
		&c.GoodsNum,
		&c.SpecKey,
		&c.SpecKeyName,
		&c.BarCode,
		&c.Selected,
		&c.AddTime,
		&c.PromType,
		&c.PromID,
		&c.Sku,
		&c.CostPrice,
	}
}
