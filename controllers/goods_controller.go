package controllers

import (
	"fresh/model"
	pgoods "fresh/proto/goods"

	"github.com/golang/protobuf/proto"
	"github.com/kataras/iris"
)

type goodsController controller

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
	data, err := proto.Marshal(&pgoods.NewGoodsResult{Goodses: pgs})
	if err != nil {
		ctx.Text(err.Error())
		return
	}
	ctx.Binary(data)
}

func (c *goodsController) Recommend(ctx iris.Context) {
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
	data, err := proto.Marshal(&pgoods.RecommendResult{Recommend: pgs})
	if err != nil {
		ctx.Text(err.Error())
		return
	}
	ctx.ContentType("application/x-protobuf")
	ctx.Write(data)

	//ctx.Binary(data)
}
