package controllers

import (
	"fresh/model"
	cproto "fresh/proto"

	"github.com/golang/protobuf/proto"
	"github.com/kataras/iris"
)

type goodsController controller

func (c *goodsController) Get(ctx iris.Context) {
	gs, err := model.LoadNewGoods()
	if err != nil {
		ctx.Text(err.Error())
		return
	}
	pgs := make([]*cproto.NewGoods, len(gs))
	for i, g := range gs {
		pgs[i] = &cproto.NewGoods{
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
	data, err := proto.Marshal(&cproto.NewGoodsResult{Goodses: pgs})
	if err != nil {
		ctx.Text(err.Error())
	}
	ctx.Binary(data)
}
