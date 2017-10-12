package pkg

import (
	"math/rand"
	"strconv"
	"time"
)

const (
	kcRandKindNum   = 0 // 纯数字
	kcRandKindLower = 1 // 小写字母
	kcRandKindUpper = 2 // 大写字母
	kcRandKindAll   = 3 // 数字、大小写字母
)

//Krand 随机字符串
// 效率不够高
func Krand(size int, kind int) []byte {
	ikind, kinds, result := kind, [][]int{[]int{10, 48}, []int{26, 97}, []int{26, 65}}, make([]byte, size)
	isAll := kind > 2 || kind < 0
	rand.Seed(time.Now().UnixNano())
	for i := 0; i < size; i++ {
		if isAll { // random ikind
			ikind = rand.Intn(3)
		}
		scope, base := kinds[ikind][0], kinds[ikind][1]
		result[i] = uint8(base + rand.Intn(scope))
	}
	return result
}

// GenCode 获取当前时间戳开头25位随机数
func GenCode() string {
	now := time.Now()
	return now.Format("2006010215") + strconv.Itoa(now.Second()) + string(Krand(4, kcRandKindNum))
}

// GenOrderCode 获取当前时间戳开头18位随机数
func GenOrderCode() string {
	now := time.Now()
	return now.Format("2006010215") + string(Krand(8, kcRandKindNum))
}
