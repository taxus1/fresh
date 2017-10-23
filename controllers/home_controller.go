package controllers

import (
	"fresh/model"
	pad "fresh/proto/ad"

	"github.com/kataras/iris"

	"github.com/golang/protobuf/proto"
)

type homeController controller

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
	data, err := proto.Marshal(&pad.HomeBannerAds{Ads: pads})
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	ctx.Binary(data)
}
