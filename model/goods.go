package model

import (
	"database/sql"
	"fmt"
)

// Goods 商品
type Goods struct {
	ID               uint32  //商品id mediumint(8)
	CatID            uint32  //分类id int(11)
	ExtendCatID      uint32  //扩展分类id int(11)
	GoodsSN          string  //商品编号 varchar(60)
	GoodsName        string  //商品名称 varchar(120)
	ClickCount       uint32  //点击数 int(10)
	BrandID          uint16  //品牌id smallint(5)
	StoreCount       uint16  //库存数量 smallint(5)
	CommentCount     uint16  //商品评论数 smallint(5)
	Weight           uint32  //商品重量克为单位 int(11)
	MarketPrice      float32 //市场价 decimal(10,
	ShopPrice        float32 //本店价 decimal(10,
	CostPrice        float32 //商品成本价 decimal(10,
	PriceLadder      string  //价格阶梯 text COMMENT '价格阶梯
	Keywords         string  //商品关键词 varchar(255)
	GoodsRemark      string  //商品简单描述 varchar(255)
	GoodsContent     string  //商品详细描述 text COMMENT '商品详细描述
	OriginalImg      string  //商品上传原始图 varchar(255)
	IsReal           bool    //是否为实物 tinyint(3)
	IsOnSale         bool    //是否上架 tinyint(1)
	IsFreeShipping   bool    //是否包邮0否1是 tinyint(1)
	OnTime           int64   //商品上架时间 int(10)
	Sort             int32   //商品排序 smallint(4)
	IsRecommend      bool    //是否推荐 tinyint(1)
	IsNew            bool    //是否新品 tinyint(1)
	IsHot            bool    //是否热卖 tinyint(1)
	LastUpdate       int32   //最后更新时间 int(10)
	GoodsType        int64   //商品所属类型id，取值表goods_type的cat_id smallint(5)
	SpecType         int64   //商品规格类型，取值表goods_type的cat_id smallint(5)
	GiveIntegral     int32   //购买商品赠送积分 mediumint(8)
	ExchangeIntegral int64   //积分兑换：0不参与积分兑换，积分和现金的兑换比例见后台配置 int(10)
	SuppliersID      int64   //供货商ID smallint(5)
	SalesSum         uint32  //商品销量 int(11)
	PromType         uint8   //4预售 tinyint(1)
	PromID           int64   //优惠活动id int(11)
	Commission       float32 //佣金用于分销分成 decimal(10,
	Spu              string  //SPU varchar(128)
	Sku              string  //SKU varchar(128)
	ShippingAreaIDS  string  //以逗号分隔 varchar(255)
}

// LoadNewGoods 加载所有新产品
func LoadNewGoods() ([]*Goods, error) {
	var gs []*Goods
	q := `SELECT  goods_id, cat_id, extend_cat_id, goods_sn, goods_name, click_count,
	brand_id, store_count, comment_count, weight, market_price, shop_price, cost_price,
	price_ladder, keywords, goods_remark, goods_content, original_img, is_on_sale,
	is_free_shipping, on_time, sort, is_recommend, is_new, is_hot, last_update,
	goods_type, spec_type, give_integral, exchange_integral, suppliers_id, sales_sum,
	prom_type, prom_id, commission, spu, sku, shipping_area_ids FROM tp_goods
	WHERE is_new = 1 ORDER BY sort`
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			g := new(Goods)
			if err := rs.Scan(g.Values()...); err != nil {
				return err
			}
			gs = append(gs, g)
		}
		return nil
	}
	err := DataSource.QueryMore(q, f)
	if err != nil {
		err = fmt.Errorf("[LoadNewGoods] %v", err)
	}
	return gs, err
}

// LoadRecommendGoods 加载所有新产品
func LoadRecommendGoods() ([]*Goods, error) {
	var gs []*Goods
	q := `SELECT goods_id, cat_id, extend_cat_id, goods_sn, goods_name, click_count,
	brand_id, store_count, comment_count, weight, market_price, shop_price, cost_price,
	price_ladder, keywords, goods_remark, goods_content, original_img, is_on_sale,
	is_free_shipping, on_time, sort, is_recommend, is_new, is_hot, last_update,
	goods_type, spec_type, give_integral, exchange_integral, suppliers_id, sales_sum,
	prom_type, prom_id, commission, spu, sku, shipping_area_ids
	FROM tp_goods WHERE is_recommend = 1 ORDER BY sort LIMIT 10`
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			g := new(Goods)
			if err := rs.Scan(g.Values()...); err != nil {
				return err
			}
			gs = append(gs, g)
		}
		return nil
	}
	err := DataSource.QueryMore(q, f)
	if err != nil {
		err = fmt.Errorf("[LoadRecommendGoods] %v", err)
	}
	return gs, err
}

// LoadCategoryGoods 加载特定分类下的产品
func LoadCategoryGoods(catID uint32) ([]*Goods, error) {
	var gs []*Goods
	q := `SELECT goods_id, cat_id, extend_cat_id, goods_sn, goods_name, click_count,
	brand_id, store_count, comment_count, weight, market_price, shop_price, cost_price,
	price_ladder, keywords, goods_remark, goods_content, original_img, is_on_sale,
	is_free_shipping, on_time, sort, is_recommend, is_new, is_hot, last_update,
	goods_type, spec_type, give_integral, exchange_integral, suppliers_id, sales_sum,
	prom_type, prom_id, commission, spu, sku, shipping_area_ids
	FROM tp_goods WHERE cat_id = ? ORDER BY sort LIMIT 10`
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			g := new(Goods)
			if err := rs.Scan(g.Values()...); err != nil {
				return err
			}
			gs = append(gs, g)
		}
		return nil
	}
	err := DataSource.QueryMore(q, f, catID)
	if err != nil {
		err = fmt.Errorf("[LoadCategoryGoods] %v", err)
	}
	return gs, err
}

// LoadGoodsBy ID获取商品
func LoadGoodsBy(id uint32) (*Goods, error) {
	query := `SELECT goods_id, cat_id, extend_cat_id, goods_sn, goods_name, click_count,
	brand_id, store_count, comment_count, weight, market_price, shop_price, cost_price,
	price_ladder, keywords, goods_remark, goods_content, original_img, is_on_sale,
	is_free_shipping, on_time, sort, is_recommend, is_new, is_hot, last_update,
	goods_type, spec_type, give_integral, exchange_integral, suppliers_id, sales_sum,
	prom_type, prom_id, commission, spu, sku, shipping_area_ids
	FROM tp_goods WHERE goods_id = ?`
	g := &Goods{}
	err := DataSource.Session.QueryRow(query, id).Scan(g.Values()...)
	if err != nil {
		err = fmt.Errorf("[LoadGoodsBy] %v", err)
	}
	return g, err
}

// Click 更新点击量
func (g *Goods) Click() error {
	update := `UPDATE tp_goods SET click_count = click_count + 1 WHERE goods_id = ?`
	_, err := DataSource.Update(update, g.ID)
	if err != nil {
		err = fmt.Errorf("[Click] %v", err)
	}
	return err
}

func (g *Goods) Values() []interface{} {
	return []interface{}{
		&g.ID,
		&g.CatID,
		&g.ExtendCatID,
		&g.GoodsSN,
		&g.GoodsName,
		&g.ClickCount,
		&g.BrandID,
		&g.StoreCount,
		&g.CommentCount,
		&g.Weight,
		&g.MarketPrice,
		&g.ShopPrice,
		&g.CostPrice,
		&g.PriceLadder,
		&g.Keywords,
		&g.GoodsRemark,
		&g.GoodsContent,
		&g.OriginalImg,
		&g.IsOnSale,
		&g.IsFreeShipping,
		&g.OnTime,
		&g.Sort,
		&g.IsRecommend,
		&g.IsNew,
		&g.IsHot,
		&g.LastUpdate,
		&g.GoodsType,
		&g.SpecType,
		&g.GiveIntegral,
		&g.ExchangeIntegral,
		&g.SuppliersID,
		&g.SalesSum,
		&g.PromType,
		&g.PromID,
		&g.Commission,
		&g.Spu,
		&g.Sku,
		&g.ShippingAreaIDS,
	}
}

// SpecGoods 特定规格的商品
type SpecGoods struct {
	*Goods
	*Spec
}

// LoadSpecGoods 加载特定规格的商品
func LoadSpecGoods(goodsID, itemID uint32) (*SpecGoods, error) {
	query := `
	SELECT g.goods_sn, g.goods_name, g.market_price, g.shop_price, g.sku,
	IFNULL(sg.key, ''), IFNULL(sg.key_name, ''), IFNULL(sg.price, 0), IFNULL(sg.bar_code, '')
	FROM tp_goods g LEFT JOIN tp_spec_goods_price sg ON g.goods_id = sg.goods_id AND sg.item_id = ?
	WHERE g.goods_id = ?
	`
	sg := &SpecGoods{&Goods{ID: goodsID}, &Spec{}}
	err := DataSource.Session.QueryRow(query, itemID, goodsID).Scan(
		&sg.GetGoods().GoodsSN,
		&sg.GetGoods().GoodsName,
		&sg.GetGoods().MarketPrice,
		&sg.GetGoods().ShopPrice,
		&sg.GetGoods().Sku,
		&sg.GetSpec().Key,
		&sg.GetSpec().KeyName,
		&sg.GetSpec().Price,
		&sg.GetSpec().BarCode,
	)
	if err != nil {
		err = fmt.Errorf("[LoadSpecGoods] %v", err)
	}
	return sg, err
}

func (sg *SpecGoods) GetGoods() *Goods {
	if sg == nil {
		return nil
	}
	return sg.Goods
}

func (sg *SpecGoods) GetSpec() *Spec {
	if sg == nil {
		return nil
	}
	return sg.Spec
}
