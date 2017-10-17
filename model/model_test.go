package model

import "testing"

// func init() {
// 	if err := ConnectDB(); err != nil {
// 		panic(err)
// 	}
// }

func TestMain(m *testing.M) {
	if err := ConnectDB(); err != nil {
		panic(err)
	}
}
