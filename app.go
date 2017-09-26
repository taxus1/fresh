package main

import (
	"fresh/router"

	"github.com/kataras/iris"
)

func main() {

	app := iris.New()
	app.Logger().SetLevel("debug")
	app.RegisterView(iris.HTML("./web", ".html"))
	app.StaticWeb("/web", "./web")
	router.InitRoute(app)
	app.Run(iris.Addr(":8080"), configure)
}

func configure(app *iris.Application) {
	app.Configure(
		iris.WithCharset("UTF-8"),
	)
}
