package main

import (
	pgoods "fresh/proto/goods"

	"log"
	"testing"

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

func TestLoadRecommendGoods(t *testing.T) {
	app := newApp()
	e := httptest.New(t, app)

	body := e.GET("/goods/recommend").Expect().Status(httptest.StatusOK).Body()
	data := &pgoods.RecommendResult{}
	if err := proto.Unmarshal([]byte(body.Raw()), data); err != nil {
		panic(err)
	}
	for _, v := range data.GetRecommend() {
		log.Printf("%v", v)
	}
}

// func TestLoadHomeBannerAds(t *testing.T) {
// 	app := newApp()
// 	e := httptest.New(t, app)
//
// 	body := e.GET("/home/banner").Expect().Status(httptest.StatusOK).Body()
// 	data := &pad.HomeBannerAds{}
// 	if err := proto.Unmarshal([]byte(body.Raw()), data); err != nil {
// 		panic(err)
// 	}
// 	for _, v := range data.GetAds() {
// 		log.Printf("%v \n", v)
// 	}
//
// }
