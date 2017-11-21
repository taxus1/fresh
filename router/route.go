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

	address := app.Party("/address")
	address.Get("/default", ctr.AddressController.DefatultAddress)
	address.Get("/all", ctr.AddressController.AllAddress)
	address.Get("/{id:int}", ctr.AddressController.Detail)

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
	cart.Patch("/{id:int}/modify", ctr.CartController.Modify)
	cart.Patch("/modify/all", ctr.CartController.ModifyAll)
	cart.Delete("/delete/selected", ctr.CartController.RemoveSelected)

	order := app.Party("/order")
	order.Post("/create", ctr.OrderController.Create)
	order.Get("/list", ctr.OrderController.List)
	order.Get("/detail/{id:int}", ctr.OrderController.Detail)

	region := app.Party("/region")
	region.Get("/{pid:int}/children", ctr.RegionController.Children)
}
