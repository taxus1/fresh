package model

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}

// func TestLoadGoodsCategory(t *testing.T) {
// 	gcs, err := LoadGoodsCategory()
// 	checkErr(err)
// 	log.Printf("[LoadGoodsCategory]:[%d]", len(gcs))
// 	for _, gc := range gcs {
// 		log.Println(*gc)
// 	}
// }
