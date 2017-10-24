package controllers

import (
	"encoding/base64"
	"io/ioutil"

	"github.com/golang/protobuf/proto"
	"github.com/kataras/iris"
)

type controller struct {
}

func (c *controller) ReadProto(ctx iris.Context, pb proto.Message) error {
	body, err := ioutil.ReadAll(ctx.Request().Body)
	if err != nil {
		return err
	}
	data, err := base64.StdEncoding.DecodeString(string(body))
	if err != nil {
		return err
	}
	err = proto.Unmarshal(data, pb)
	return err
}

func (c *controller) WriteProto(ctx iris.Context, pb proto.Message) {
	result, err := proto.Marshal(pb)
	if err != nil {
		ctx.Text(err.Error())
		return
	}
	ctx.Text(base64.StdEncoding.EncodeToString(result))
}

var (
	// HomeController 首页
	HomeController *homeController

	// UserController 用户
	UserController *userController

	// GoodsController 商品
	GoodsController *goodsController
)

// InitControllers 初始化
func InitControllers() {
	HomeController = &homeController{}
	UserController = &userController{}
	GoodsController = &goodsController{}
}
