package model

import (
	"log"
	"testing"
	"time"
)

func TestLoadAd(t *testing.T) {

	ads, err := LoadAds(9)
	checkErr(err)

	log.Printf("获取广告: %v \n", ads)
	log.Println(time.Now().Day())
}
