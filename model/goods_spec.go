package model

import (
	"database/sql"
	"fmt"
	"strconv"
	"strings"
)

// GoodsSpec 商品规格
type GoodsSpec struct {
	ID         uint32  //规格商品id bigint(20)
	GoodsID    uint32  //商品id int(11)
	Key        string  //规格键名 varchar(255)
	KeyName    string  //规格键名中文 varchar(255)
	Price      float32 //价格 decimal(10,
	StoreCount uint16  //库存数量 int(11)
	BarCode    string  //商品条形码 varchar(32)
	Sku        string  //SKU varchar(128)
	SpecImg    string  //规格商品主图 varchar(255)
	PromID     uint32  //活动id int(10)
	PromType   uint8   //参加活动类型 tinyint(2)
}

// GoodsSpecs 规格
type GoodsSpecs []*GoodsSpec

// LoadGoodsSpec 获取商品规格
func LoadGoodsSpec(goodsID uint32) (GoodsSpecs, error) {
	var gss GoodsSpecs
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			gs := new(GoodsSpec)
			if err := rs.Scan(gs.Values()...); err != nil {
				return err
			}
			gss = append(gss, gs)
		}
		return nil
	}
	sqlStr := `SELECT * FROM tp_spec_goods_price WHERE goods_id = ?`
	err := DataSource.QueryMore(sqlStr, f, goodsID)
	if err != nil {
		err = fmt.Errorf("[LoadGoodsSpec] %v", err)
	}
	return gss, err
}

// GetSpecItem 商品规格列表里面获取不重复的规格ID
func (g *GoodsSpecs) GetSpecItem() []uint32 {
	items := []uint32{}
	m := map[uint64]bool{}
	for _, v := range *g {
		if len(v.Key) == 0 {
			continue
		}
		ids := strings.Split(v.Key, "_")
		for _, id := range ids {
			key, _ := strconv.ParseUint(id, 10, 0)
			if _, ok := m[key]; !ok {
				m[key] = true
				items = append(items, uint32(key))
			}
		}
	}
	return items
}

func (g *GoodsSpec) Values() []interface{} {
	return []interface{}{
		&g.ID,
		&g.GoodsID,
		&g.Key,
		&g.KeyName,
		&g.Price,
		&g.StoreCount,
		&g.BarCode,
		&g.Sku,
		&g.SpecImg,
		&g.PromID,
		&g.PromType,
	}
}
