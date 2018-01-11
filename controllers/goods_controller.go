package controllers

import (
	"fresh/model"
	pgoods "fresh/proto/goods"

	"github.com/kataras/iris"
)

type goodsController struct {
	*controller
}

// NewGoods 新产品
func (c *goodsController) NewGoods(ctx iris.Context) {
	gs, err := model.LoadNewGoods()
	if err != nil {
		ctx.Text(err.Error())
		return
	}
	pgs := make([]*pgoods.Goods, len(gs))
	for i, g := range gs {
		pgs[i] = c.convGoods(g)
	}
	c.WriteProto(ctx, &pgoods.NewGoodsResult{Goodses: pgs})
}

// Recommend 首页推荐商品
func (c *goodsController) Recommend(ctx iris.Context) {
	// data := &pgoods.RecommendResult{}
	// err := c.ReadProto(ctx, data)
	// log.Printf("%v", data)
	gs, err := model.LoadRecommendGoods()
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	pgs := make([]*pgoods.Recommend, len(gs))
	for i, g := range gs {
		pgs[i] = &pgoods.Recommend{
			ID:        g.ID,
			CatID:     g.CatID,
			GoodsName: g.GoodsName,
			ShopPrice: g.ShopPrice,
		}
	}
	c.WriteProto(ctx, &pgoods.RecommendResult{Recommend: pgs})
}

func (c *goodsController) Category(ctx iris.Context) {
	catID, _ := ctx.Params().GetInt("cat")

	gs, err := model.LoadCategoryGoods(uint32(catID))
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	pgs := make([]*pgoods.Recommend, len(gs))
	for i, g := range gs {
		pgs[i] = &pgoods.Recommend{
			ID:        g.ID,
			CatID:     g.CatID,
			GoodsName: g.GoodsName,
			ShopPrice: g.ShopPrice,
		}
	}
	c.WriteProto(ctx, &pgoods.RecommendResult{Recommend: pgs})
}

// Detail 商品详情
func (c *goodsController) Detail(ctx iris.Context) {
	id, _ := ctx.Params().GetInt("id")
	g, err := model.LoadGoodsBy(uint32(id))
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	sgp, err := g.LoadSpecPrice()
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	gs, err := g.LoadSpec(sgp.GetSpecItem())
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	cs, err := g.LoadComments()
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	pdetail := &pgoods.DetailResult{}
	pdetail.Goods = c.convGoods(g)
	pdetail.Specs, pdetail.Gallers = c.convSpec(gs)
	pdetail.SpecPrices = c.convSpecPrice(sgp)
	pdetail.Comms = c.convComment(cs)

	c.WriteProto(ctx, pdetail)
}

func (c *goodsController) convGoods(g *model.Goods) *pgoods.Goods {
	return &pgoods.Goods{
		ID:           g.ID,
		CatID:        g.CatID,
		ExtendCatID:  g.ExtendCatID,
		GoodsSN:      g.GoodsSN,
		GoodsName:    g.GoodsName,
		ClickCount:   g.ClickCount,
		BrandID:      uint32(g.BrandID),
		StoreCount:   uint32(g.StoreCount),
		CommentCount: uint32(g.CommentCount),
		Weight:       g.Weight,
		MarketPrice:  g.MarketPrice,
		ShopPrice:    g.ShopPrice,
		CostPrice:    g.CostPrice,
		PriceLadder:  g.PriceLadder,
		Keywords:     g.Keywords,
		GoodsRemark:  g.GoodsRemark,
		GoodsContent: g.GoodsContent,
		OriginalImg:  g.OriginalImg,
		IsReal:       g.IsReal,
		IsOnSale:     g.IsOnSale,
		SalesSum:     g.SalesSum,
	}
}

func (c *goodsController) convSpec(gs []*model.GoodsSpec) ([]*pgoods.Spec, []*pgoods.Gallery) {
	pspecs, pgalleries := []*pgoods.Spec{}, []*pgoods.Gallery{}
	for _, v := range gs {
		pspec := &pgoods.Spec{SpecName: v.SpecName}
		pitems := []*pgoods.SpecItem{}
		for _, v1 := range v.SpecList {
			pitems = append(pitems, &pgoods.SpecItem{
				ItemID: v1.ItemID,
				Item:   v1.Item,
				Src:    v1.Src,
			})
			if len(v1.Src) > 0 {
				pgalleries = append(pgalleries, &pgoods.Gallery{ImageUrl: v1.Src})
			}
		}
		pspec.Items = pitems
		pspecs = append(pspecs, pspec)
	}
	return pspecs, pgalleries
}

func (c *goodsController) convSpecPrice(sgp model.GoodsSpecPrices) []*pgoods.SpecPrice {
	pspecPrices := []*pgoods.SpecPrice{}
	for _, v := range sgp {
		pspecPrices = append(pspecPrices, &pgoods.SpecPrice{
			ID:         v.ID,
			GoodsID:    v.GoodsID,
			Key:        v.Key,
			KeyName:    v.KeyName,
			Price:      v.Price,
			StoreCount: uint32(v.StoreCount),
			BarCode:    v.BarCode,
			Sku:        v.Sku,
			SpecImg:    v.SpecImg,
		})
	}
	return pspecPrices
}

func (c *goodsController) convComment(cs []*model.Comment) []*pgoods.Comment {
	pcomms := []*pgoods.Comment{}
	for _, v := range cs {
		pcomms = append(pcomms, &pgoods.Comment{
			ID:          v.ID,
			GoodsID:     v.GoodsID,
			Email:       v.Email,
			Username:    v.Username,
			Content:     v.Content,
			AddTime:     v.AddTime,
			IsShow:      v.IsShow,
			ParentID:    v.ParentID,
			UserID:      v.UserID,
			Img:         v.Img,
			DeliverRank: uint32(v.DeliverRank),
			GoodsRank:   uint32(v.GoodsRank),
			ServiceRank: uint32(v.ServiceRank),
			ZanNum:      v.ZanNum,
			IsAnonymous: v.IsAnonymous,
			HeadPic:     v.HeadPic,
		})
	}
	return pcomms
}
