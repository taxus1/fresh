package router

import (
	"fresh/controllers"

	"github.com/kataras/iris"
)

func InitRoute(app *iris.Application) {
	app.Controller("/user", new(controllers.UserController))
	
}
