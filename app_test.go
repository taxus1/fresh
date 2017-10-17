package main

import (
	cproto "fresh/proto"
	"log"
	"testing"

	"github.com/golang/protobuf/proto"
	"github.com/kataras/iris/httptest"
)

func TestLoadGoods(t *testing.T) {
	app := newApp()
	e := httptest.New(t, app)

	body := e.GET("/goods").Expect().Status(httptest.StatusOK).Body()
	data := &cproto.NewGoodsResult{}
	if err := proto.Unmarshal([]byte(body.Raw()), data); err != nil {
		panic(err)
	}
	for _, v := range data.GetGoodses() {
		log.Printf("%v", v)
	}

}
