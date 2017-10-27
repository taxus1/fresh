package model

import (
	"fmt"
	"log"
	"testing"
)

var gid uint32

func TestLoadNewGoods(t *testing.T) {
	gs, err := LoadNewGoods()
	checkErr(err)

	for _, g := range gs {
		log.Println(g)
		gid = g.ID
	}
}

func TestLoadGoodsBy(t *testing.T) {
	g, err := LoadGoodsBy(gid)
	checkErr(err)

	log.Printf("[TestLoadGoodsBy]%v", g)
}

func TestGoodsClick(t *testing.T) {
	g, err := LoadGoodsBy(gid)
	checkErr(err)

	checkErr(g.Click())

	click := g.ClickCount
	g, err = LoadGoodsBy(gid)
	checkErr(err)

	if click+1 != g.ClickCount {
		panic(fmt.Errorf("测试商品点击错误，原值=%d, 期望=%d, 实际=%d", click, click+1, g.ClickCount))
	}
	log.Printf("测试商品点击，原值=%d, 期望=%d", click, g.ClickCount)
}

var items []uint32

func TestLoadGoodsSpecPrice(t *testing.T) {
	g := &Goods{ID: gid}
	gss, err := g.LoadSpecPrice()
	checkErr(err)
	for _, gs := range gss {
		log.Println(*gs)
	}
	items = gss.GetSpecItem()
	log.Println(items)
}

func TestLoadGoodsSpec(t *testing.T) {
	g := &Goods{ID: gid}
	gss, err := g.LoadSpec(items)
	checkErr(err)

	for _, gs := range gss {
		log.Printf("%v", gs.SpecName)
		for _, v := range gs.SpecList {
			log.Printf("%v", v)
		}
	}
}

func TestLoadComments(t *testing.T) {
	g := &Goods{ID: gid}
	cs, err := g.LoadComments()
	checkErr(err)

	for _, c := range cs {
		log.Printf("%v", c)
	}
}
