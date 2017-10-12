package model

import (
	"log"
	"testing"
)

func TestCreateOrder(t *testing.T) {
	var userID uint32 = 1
	cs, err := LoadSelectedCarts(userID)
	checkErr(err)
	if len(*cs) == 0 {
		panic("您购物车中没有选中商品")
	}

	ua, err := LoadShippingAddress(814)
	checkErr(err)

	s, err := LoadShippingBy("sto_express")
	checkErr(err)

	o := NewOrder()
	checkErr(o.Create(cs, ua, s, userID))

	log.Printf("下订单成功, id=%d, pay_state = %d \n", o.ID, o.PayState)
}
