package model

import (
	"log"
	"testing"
)

// func TestCreateOrder(t *testing.T) {
// 	var userID uint32 = 1
// 	cs, err := LoadSelectedCarts(userID)
// 	checkErr(err)
// 	if len(cs) == 0 {
// 		panic("您购物车中没有选中商品")
// 	}
// 	for _, v := range cs {
// 		log.Printf("TestCreateOrder %v", v)
// 	}
//
// 	ua, err := LoadShippingAddress(814)
// 	checkErr(err)
//
// 	s, err := LoadShippingBy("sto_express")
// 	checkErr(err)
//
// 	o := NewOrder()
// 	checkErr(o.Create(cs, ua, s, userID))
//
// 	log.Printf("下订单成功, id=%d, pay_state = %d \n", o.ID, o.PayState)
// }

func TestLoadOrderList(t *testing.T) {
	var userID uint32 = 1
	owgs, err := LoadOrderList(userID)
	checkErr(err)
	for _, v := range owgs {
		log.Printf("[TestLoadOrderList] %v", v.Order)
		for _, v1 := range v.OrderGoodses {
			log.Printf("%v", v1)
		}
	}

}
