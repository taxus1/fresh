package main

import (
	"encoding/base64"

	"log"
	"testing"

	pad "fresh/proto/ad"
	pcategory "fresh/proto/category"

	"github.com/golang/protobuf/proto"
	"github.com/kataras/iris/httptest"
)

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

func TestLoadHomeBannerAds(t *testing.T) {
	app := newApp()
	e := httptest.New(t, app)

	body := e.GET("/home/banner").Expect().Status(httptest.StatusOK).Body()
	bytes, _ := base64.StdEncoding.DecodeString(body.Raw())
	data := &pad.HomeBannerAds{}
	if err := proto.Unmarshal([]byte(bytes), data); err != nil {
		panic(err)
	}
	for _, v := range data.GetAds() {
		log.Printf("%v \n", v)
	}
}

func TestLoadHomeCategory(t *testing.T) {
	app := newApp()
	e := httptest.New(t, app)

	body := e.GET("/home/category").Expect().Status(httptest.StatusOK).Body()
	bytes, _ := base64.StdEncoding.DecodeString(body.Raw())
	data := &pcategory.CategoryResult{}
	if err := proto.Unmarshal([]byte(bytes), data); err != nil {
		panic(err)
	}
	for _, v := range data.GetCategories() {
		log.Printf("%v \n", v)
	}
}
