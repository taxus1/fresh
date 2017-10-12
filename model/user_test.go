package model

// import (
// 	"log"
// 	"testing"
// )
//
// //
// var userID uint32
//
// func TestLoadUserBy(t *testing.T) {
// 	u, err := LoadUserBy("00a1c0366b96e5c3bfff8bd1d85fa557")
// 	checkErr(err)
//
// 	token := u.Token
// 	if token == "" {
// 		panic("获取用户token失败")
// 	}
// 	log.Printf("%v \n %s", u, token)
// 	userID = u.ID
// }
//
// func TestLoadUserAddress(t *testing.T) {
// 	uas, err := LoadUserAddress(userID)
// 	checkErr(err)
//
// 	for _, ua := range uas {
// 		log.Printf("%v", ua)
// 	}
// }
