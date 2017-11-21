package controllers

import (
	"encoding/base64"
	"io/ioutil"

	"github.com/golang/protobuf/proto"
	"github.com/gorilla/securecookie"
	"github.com/kataras/iris"
	"github.com/kataras/iris/sessions"
)

var (
	cookieName = "mycustomsessionid"
	// AES only supports key sizes of 16, 24 or 32 bytes.
	// You either need to provide exactly that amount or you derive the key from what you type in.
	hashKey      = []byte("the-big-and-secret-fash-key-here")
	blockKey     = []byte("lot-secret-of-characters-big-too")
	secureCookie = securecookie.New(hashKey, blockKey)

	sess = sessions.New(sessions.Config{
		Cookie:  cookieName,
		Encode:  secureCookie.Encode,
		Decode:  secureCookie.Decode,
		Expires: -1,
	})
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

	// CartController 购物车
	CartController *cartController

	// AddressController 收货地址
	AddressController *addressController

	// OrderController 订单
	OrderController *orderController

	// RegionController 行政区域
	RegionController *regionController
)

// InitControllers 初始化
func InitControllers() {
	HomeController = &homeController{}
	UserController = &userController{}
	GoodsController = &goodsController{}
	CartController = &cartController{}
	OrderController = &orderController{}
	AddressController = &addressController{}
	RegionController = &regionController{}
}
