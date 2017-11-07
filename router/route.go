package router

import (
	ctr "fresh/controllers"

	"github.com/kataras/iris"
)

// Route 路由对象
type Route struct {
}

// New 新建路由
func New() *Route {
	return &Route{}
}

// Init 注册路由
func (r *Route) Init(app *iris.Application) {
	ctr.InitControllers()
	// iris.Post("/", controller.WechatCtr.Validate, controller.WechatCtr.Message)

	goods := app.Party("/goods")
	goods.Get("/new", ctr.GoodsController.NewGoods)
	goods.Post("/recommend", ctr.GoodsController.Recommend)
	goods.Get("/detail/{id:int}", ctr.GoodsController.Detail)

	home := app.Party("/home")
	home.Get("/banner", ctr.HomeController.Banner)
	home.Get("/category", ctr.HomeController.Category)

	cart := app.Party("/cart")
	cart.Get("/add", ctr.CartController.Add)
	cart.Get("/list", ctr.CartController.List)
}
