package model

// PriceCalculator 价格计算器
type PriceCalculator struct {
	amount        float32
	goodsPrice    float32
	shippingPrice float32
	userMoney     float32
}

// NewPriceCalculator 新建价格计算器
func NewPriceCalculator(cs *Carts) *PriceCalculator {
	pc := &PriceCalculator{}
	for _, c := range *cs {
		pc.goodsPrice = pc.goodsPrice + c.GoodsPrice*float32(c.GoodsNum)
	}
	pc.amount = pc.goodsPrice
	return pc
}

// GetGoodsPrice 商品价格
func (p *PriceCalculator) GetGoodsPrice() float32 {
	return p.goodsPrice
}

// SetShippingPrice 设置快递费
func (p *PriceCalculator) SetShippingPrice(sp float32) {
	p.amount += sp
	p.shippingPrice = sp
}

// GetPrice 取得总价格
func (p *PriceCalculator) GetPrice() float32 {
	return p.amount
}
