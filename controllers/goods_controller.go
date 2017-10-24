package controllers

import (
	"fresh/model"
	pgoods "fresh/proto/goods"

	"github.com/kataras/iris"
)

type goodsController struct {
	*controller
}

func (c *goodsController) NewGoods(ctx iris.Context) {
	gs, err := model.LoadNewGoods()
	if err != nil {
		ctx.Text(err.Error())
		return
	}
	pgs := make([]*pgoods.NewGoods, len(gs))
	for i, g := range gs {
		pgs[i] = &pgoods.NewGoods{
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
		}
	}
	c.WriteProto(ctx, &pgoods.NewGoodsResult{Goodses: pgs})
}

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
