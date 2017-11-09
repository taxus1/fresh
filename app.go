package main

import (
	"fresh/model"
	"fresh/router"
	"fresh/serror"

	"github.com/kataras/iris"
	"github.com/kataras/iris/middleware/logger"
)

func main() {
	app := newApp()
	app.Run(iris.Addr(":9001"), configure)
}

func newApp() *iris.Application {
	app := iris.New()
	app.Use(logger.New(logger.DefaultConfig()))
	app.Logger().SetLevel("debug")
	app.RegisterView(iris.HTML("./web", ".html"))
	app.StaticWeb("/web", "./web")
	app.OnErrorCode(iris.StatusInternalServerError, serror.NewAppError().InternalServerError)

	router.New().Init(app)
	if err := model.ConnectDB(); err != nil {
		panic(err)
	}
	return app
}

func configure(app *iris.Application) {
	app.Configure(
		iris.WithCharset("UTF-8"),
		iris.WithoutVersionChecker,
	)
}
