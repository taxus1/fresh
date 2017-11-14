package main

import (
	"encoding/base64"
	"log"
	"testing"
	// pad "fresh/proto/ad"
	// pcategory "fresh/proto/category"
	// pgoods "fresh/proto/goods"
	// pcart "fresh/proto/cart"
	paddress "fresh/proto/address"

	"github.com/golang/protobuf/proto"
	"github.com/kataras/iris/httptest"
)

var app = newApp()

// func TestLoadNewGoods(t *testing.T) {
// 	app := newApp()
// 	e := httptest.New(t, app)
//
// 	body := e.GET("/goods/new").Expect().Status(httptest.StatusOK).Body()
// 	data := &pgoods.NewGoodsResult{}
// 	if err := proto.Unmarshal([]byte(body.Raw()), data); err != nil {
// 		panic(err)
// 	}
// 	for _, v := range data.GetGoodses() {
// 		log.Printf("%v", v)
// 	}
// }

// func TestLoadRecommendGoods(t *testing.T) {
// 	app := newApp()
// 	e := httptest.New(t, app)
//
// 	body := e.POST("/goods/recommend").Expect().Status(httptest.StatusOK).Body()
// 	body = e.POST("/goods/recommend").WithHeader("Content-Type", "application/x-protobuf").WithText(body.Raw()).Expect().Status(httptest.StatusOK).Body()
// 	bytes, _ := base64.StdEncoding.DecodeString(body.Raw())
// 	data := &pgoods.RecommendResult{}
// 	if err := proto.Unmarshal([]byte(bytes), data); err != nil {
// 		panic(err)
// 	}
// 	for _, v := range data.GetRecommend() {
// 		log.Printf("%v", v)
// 	}
// }

// func TestLoadHomeBannerAds(t *testing.T) {
// 	e := httptest.New(t, app)
// 	body := e.GET("/home/banner").Expect().Status(httptest.StatusOK).Body()
// 	bytes, _ := base64.StdEncoding.DecodeString(body.Raw())
// 	data := &pad.HomeBannerAds{}
// 	if err := proto.Unmarshal([]byte(bytes), data); err != nil {
// 		panic(err)
// 	}
// 	for _, v := range data.GetAds() {
// 		log.Printf("%v \n", v)
// 	}
// }
//
// func TestLoadHomeCategory(t *testing.T) {
// 	e := httptest.New(t, app)
//
// 	body := e.GET("/home/category").Expect().Status(httptest.StatusOK).Body()
// 	bytes, _ := base64.StdEncoding.DecodeString(body.Raw())
// 	data := &pcategory.CategoryResult{}
// 	if err := proto.Unmarshal([]byte(bytes), data); err != nil {
// 		panic(err)
// 	}
// 	for _, v := range data.GetCategories() {
// 		log.Printf("%v \n", v)
// 	}
// }

// func TestGoodsDetail(t *testing.T) {
// 	e := httptest.New(t, app)
//
// 	body := e.GET("/goods/detail/1").Expect().Status(httptest.StatusOK).Body()
// 	bytes, _ := base64.StdEncoding.DecodeString(body.Raw())
// 	data := &pgoods.DetailResult{}
// 	if err := proto.Unmarshal([]byte(bytes), data); err != nil {
// 		panic(err)
// 	}
// 	log.Printf("%v \n", data)
// }
//
// func TestCatAdd(t *testing.T) {
// 	e := httptest.New(t, app)
// 	body := e.GET("/cart/add").WithQuery("goodsID", 1).WithQuery("num", 1).WithQuery("itemID", 229).WithHeader("token", "00a1c0366b96e5c3bfff8bd1d85fa557").Expect().Status(httptest.StatusOK).Body()
// 	log.Printf("%v \n", body.Raw())
// }

//
// func TestCartList(t *testing.T) {
// 	e := httptest.New(t, app)
//
// 	body := e.GET("/cart/list").WithHeader("token", "00a1c0366b96e5c3bfff8bd1d85fa557").Expect().Status(httptest.StatusOK).Body()
// 	bytes, _ := base64.StdEncoding.DecodeString(body.Raw())
// 	data := &pcart.CartListResult{}
// 	if err := proto.Unmarshal([]byte(bytes), data); err != nil {
// 		panic(err)
// 	}
// 	for _, v := range data.GetCarts() {
// 		log.Printf("[%s] %v", "TestCartList", v)
// 	}
// }

// func TestCartModify(t *testing.T) {
// 	e := httptest.New(t, app)
//
// 	param := &pcart.ModifyParam{GoodsNum: 2, Selected: true}
// 	src, err := proto.Marshal(param)
// 	if err != nil {
// 		panic(err)
// 	}
//
// 	dst := make([]byte, base64.StdEncoding.EncodedLen(len(src)))
// 	base64.StdEncoding.Encode(dst, src)
// 	body := e.PATCH("/cart/66/modify").WithBytes(dst).WithHeader("token", "00a1c0366b96e5c3bfff8bd1d85fa557").Expect().Status(httptest.StatusOK).Body()
// 	bytes, _ := base64.StdEncoding.DecodeString(body.Raw())
// 	data := &pcart.Cart{}
// 	if err := proto.Unmarshal([]byte(bytes), data); err != nil {
// 		panic(err)
// 	}
// 	log.Printf("[%s] %v", "TestCartModify", data)
// }

// func TestCartModifyAll(t *testing.T) {
// 	e := httptest.New(t, app)
//
// 	param := &pcart.ModifyAllParam{}
// 	carts := []*pcart.ModifyParam{}
// 	carts = append(carts, &pcart.ModifyParam{ID: 81, GoodsNum: 7, Selected: false})
// 	carts = append(carts, &pcart.ModifyParam{ID: 82, GoodsNum: 3, Selected: false})
// 	param.Carts = carts
// 	src, err := proto.Marshal(param)
// 	if err != nil {
// 		panic(err)
// 	}
//
// 	dst := make([]byte, base64.StdEncoding.EncodedLen(len(src)))
// 	base64.StdEncoding.Encode(dst, src)
// 	body := e.PATCH("/cart/modify/all").WithBytes(dst).WithHeader("token", "00a1c0366b96e5c3bfff8bd1d85fa557").Expect().Status(httptest.StatusOK).Body()
// 	bytes, _ := base64.StdEncoding.DecodeString(body.Raw())
// 	data := &pcart.ListResult{}
// 	if err := proto.Unmarshal([]byte(bytes), data); err != nil {
// 		panic(err)
// 	}
// 	log.Printf("[%s] %v", "TestCartModifyAll", data)
// }
//
// func TestCartRemoveSelected(t *testing.T) {
// 	e := httptest.New(t, app)
//
// 	param := &pcart.ModifyAllParam{}
// 	carts := []*pcart.ModifyParam{}
// 	carts = append(carts, &pcart.ModifyParam{ID: 83, GoodsNum: 7, Selected: false})
// 	carts = append(carts, &pcart.ModifyParam{ID: 84, GoodsNum: 3, Selected: false})
// 	param.Carts = carts
// 	src, err := proto.Marshal(param)
// 	if err != nil {
// 		panic(err)
// 	}
//
// 	dst := make([]byte, base64.StdEncoding.EncodedLen(len(src)))
// 	base64.StdEncoding.Encode(dst, src)
// 	body := e.DELETE("/cart/delete/selected").WithBytes(dst).WithHeader("token", "00a1c0366b96e5c3bfff8bd1d85fa557").Expect().Status(httptest.StatusOK).Body()
// 	bytes, _ := base64.StdEncoding.DecodeString(body.Raw())
// 	data := &pcart.ListResult{}
// 	if err := proto.Unmarshal([]byte(bytes), data); err != nil {
// 		panic(err)
// 	}
// 	log.Printf("[%s] %v", "TestCartRemoveSelected", data)
// }

func TestLoadUserDefatultAddress(t *testing.T) {
	e := httptest.New(t, app)

	body := e.GET("/user/address/default").WithHeader("token", "00a1c0366b96e5c3bfff8bd1d85fa557").Expect().Status(httptest.StatusOK).Body()
	bytes, _ := base64.StdEncoding.DecodeString(body.Raw())
	data := &paddress.Address{}
	if err := proto.Unmarshal([]byte(bytes), data); err != nil {
		panic(err)
	}
	log.Printf("[TestLoadUserDefatultAddress] %v", data)
}

func TestLoadUserAllAddress(t *testing.T) {
	e := httptest.New(t, app)

	body := e.GET("/user/address/all").WithHeader("token", "00a1c0366b96e5c3bfff8bd1d85fa557").Expect().Status(httptest.StatusOK).Body()
	bytes, _ := base64.StdEncoding.DecodeString(body.Raw())
	data := &paddress.AllAddress{}
	if err := proto.Unmarshal([]byte(bytes), data); err != nil {
		panic(err)
	}
	log.Printf("[TestLoadUserAllAddress] %v", data)
}
