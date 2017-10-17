package router

import (
	ctr "fresh/controllers"

	"github.com/kataras/iris"
)

// Route 路由对象
type Route struct{}

// New 新建路由
func New() *Route {
	return &Route{}
}

// Init 注册路由
func (r *Route) Init(app *iris.Application) {

	// iris.Post("/", controller.WechatCtr.Validate, controller.WechatCtr.Message)

	app.Get("/goods", ctr.GoodsController.Get)
}
