package controllers

import (
	"fresh/model"
	pad "fresh/proto/ad"
	pcategory "fresh/proto/category"

	"github.com/kataras/iris"
)

type homeController struct {
	*controller
}

// Banner 首页轮播广告
func (h *homeController) Banner(ctx iris.Context) {
	ads, err := model.LoadAds(9)
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	pads := make([]*pad.Ad, len(*ads))
	for i, v := range *ads {
		pads[i] = &pad.Ad{
			PID:       v.PID,
			MediaType: uint32(v.MediaType),
			AdName:    v.AdName,
			AdLink:    v.AdLink,
			AdCode:    v.AdCode,
		}
	}
	h.WriteProto(ctx, &pad.HomeBannerAds{Ads: pads})
}

// Category 商品分类
func (h *homeController) Category(ctx iris.Context) {
	cats, err := model.LoadGoodsCategory()
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	pcats := make([]*pcategory.Category, len(cats))
	for i, v := range cats {
		pcats[i] = &pcategory.Category{
			ID:         uint32(v.ID),
			MobileName: v.MobileName,
		}
	}
	h.WriteProto(ctx, &pcategory.CategoryResult{Categories: pcats})
}
