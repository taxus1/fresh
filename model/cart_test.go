package model

import (
	"log"
	"testing"
)

// import (
// 	"log"
// 	"testing"
// )
//
// func TestAddCart(t *testing.T) {
// 	u, err := LoadUserBy("00a1c0366b96e5c3bfff8bd1d85fa557")
// 	checkErr(err)
//
// 	sg, err := LoadSpecGoods(46, 70)
// 	checkErr(err)
//
// 	sid := "xxxxx"
// 	c := NewCart()
// 	err = c.Add(u, sg, 1, sid)
// 	checkErr(err)
//
// 	log.Printf("添加商品到购物车成功: %d", c.ID)
// }
//
// func TestModifyCart(t *testing.T) {
// 	c := &Cart{ID: 13}
// 	err := c.Modify(2, false)
// 	checkErr(err)
//
// 	log.Println("修改购物车数量成功")
// }
//
// func TestRemoveCart(t *testing.T) {
// 	c := &Cart{ID: 18}
// 	err := c.Remove()
// 	checkErr(err)
//
// 	log.Println("删除购物车成功")
//

func TestLoadUserCarts(t *testing.T) {
	u, err := LoadUserBy("00a1c0366b96e5c3bfff8bd1d85fa557")
	checkErr(err)

	cs, err := LoadUserCarts(u.ID)
	checkErr(err)

	for _, v := range cs {
		log.Printf("[%s] %v", "TestLoadUserCarts", v)
	}
}
