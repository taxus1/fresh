package controllers

import (
	"fresh/model"

	"github.com/kataras/iris/mvc"
)

type GoodsController struct {
	mvc.Controller
}

func (c *GoodsController) Get() ([]*model.Goods, error) {
	gs, err := model.LoadNewGoods()
	if err != nil {
		return nil, err
	}

	return gs, nil
}
