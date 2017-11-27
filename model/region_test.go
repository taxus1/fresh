package model

// func TestLoadLeveledRegion(t *testing.T) {
// 	rs, err := LoadRegions()
// 	checkErr(err)
//
// 	reginTree := []*Region{}
// 	for _, v := range rs {
// 		if v.ParentID == 0 {
// 			reginTree = append(reginTree, v)
// 		}
// 		for _, v1 := range rs {
// 			if v.ID == v1.ParentID {
// 				switch v1.Level {
// 				case 2:
// 					v.CityList = append(v.CityList, v1)
// 				case 3:
// 					v.DistrictList = append(v.DistrictList, v1)
// 				case 4:
// 					v.TwonList = append(v.TwonList, v1)
// 				}
// 			}
// 		}
// 	}
// 	data, err := json.Marshal(reginTree)
// 	checkErr(err)
//
// 	log.Printf("[TestLoadLeveledRegion] %v", string(data))
// }
