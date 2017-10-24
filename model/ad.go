package model

import (
	"database/sql"
	"fmt"
	"time"
)

// Ad 广告
type Ad struct {
	ID         uint32 // 广告id int(11)
	PID        uint32 // 广告位置ID int(11)
	MediaType  uint8  // 广告类型 tinyint(3)
	AdName     string // 广告名称 varchar(60)
	AdLink     string // 链接地址 varchar(255)
	AdCode     string // 图片地址 text NOT NULL COMMENT
	StartTime  int64  // 投放时间 int(11)
	EndTime    int64  // 结束时间 int(11)
	LinkMan    string // 添加人 varchar(60)
	LinkEmail  string // 添加人邮箱 varchar(60)
	LinkPhone  string // 添加人联系电话 varchar(60)
	ClickCount uint32 // 点击量 mediumint(8)
	Enabled    bool   // 是否显示 tinyint(3)
	Orderby    int32  // 排序 smallint(6)
	Target     bool   // 是否开启浏览器新窗口 tinyint(1)
	Bgcolor    string // 背景颜色 varchar(20)
}

// Ads 广告
type Ads []*Ad

// LoadAds 根据广告位pid获取广告
func LoadAds(pid uint32) (*Ads, error) {
	var ads Ads
	query := `SELECT * FROM tp_ad WHERE pid = ? AND start_time < ? AND ? < end_time AND enabled = 1 ORDER BY orderby LIMIT 5`
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			ad := new(Ad)
			if err := rs.Scan(ad.Fields()...); err != nil {
				return err
			}
			ads = append(ads, ad)
		}
		return nil
	}
	current := time.Now().Unix()
	err := DataSource.QueryMore(query, f, pid, current, current)
	if err != nil && err != sql.ErrNoRows {
		err = fmt.Errorf("[LoadAd] %v", err)
	}
	return &ads, err
}

func (a *Ad) Fields() []interface{} {
	return []interface{}{
		&a.ID,
		&a.PID,
		&a.MediaType,
		&a.AdName,
		&a.AdLink,
		&a.AdCode,
		&a.StartTime,
		&a.EndTime,
		&a.LinkMan,
		&a.LinkEmail,
		&a.LinkPhone,
		&a.ClickCount,
		&a.Enabled,
		&a.Orderby,
		&a.Target,
		&a.Bgcolor,
	}
}
