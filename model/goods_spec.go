package model

import (
	"database/sql"
	"fmt"
	"strconv"
	"strings"
)

// GoodsSpecPrice 商品规格
type GoodsSpecPrice struct {
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

// GoodsSpecPrices 规格
type GoodsSpecPrices []*GoodsSpecPrice

// LoadSpecPrice 获取商品不同规格的不同价格
func (g *Goods) LoadSpecPrice() (GoodsSpecPrices, error) {
	var gss GoodsSpecPrices
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			gs := new(GoodsSpecPrice)
			if err := rs.Scan(gs.Values()...); err != nil {
				return err
			}
			gss = append(gss, gs)
		}
		return nil
	}
	sqlStr := `SELECT * FROM tp_spec_goods_price WHERE goods_id = ?`
	err := DataSource.QueryMore(sqlStr, f, g.ID)
	if err != nil {
		err = fmt.Errorf("[LoadGoodsSpecPrice] %v", err)
	}
	return gss, err
}

// GetSpecItem 商品规格列表里面获取不重复的规格ID
func (g *GoodsSpecPrices) GetSpecItem() []uint32 {
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

func (g *GoodsSpecPrice) Values() []interface{} {
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

// SpecItem 规格条目
type SpecItem struct {
	ItemID uint32
	Item   string
	Src    string
}

// GoodsSpec 商品规格
type GoodsSpec struct {
	SpecName string
	SpecList []*SpecItem
}

// LoadSpec 获取商品的规格
func (g *Goods) LoadSpec(ids []uint32) ([]*GoodsSpec, error) {
	var id, specID sql.NullInt64
	var item, name, src sql.NullString
	var err error
	idstr := []string{}
	for _, v := range ids {
		idstr = append(idstr, strconv.Itoa(int(v)))
	}
	query := `
	SELECT si.*, s.name, sim.src
	FROM tp_spec_item si
			LEFT JOIN tp_spec s ON si.spec_id = s.id
	    LEFT JOIN tp_spec_image sim ON si.id = sim.spec_image_id AND sim.goods_id = ?
	WHERE si.id IN (` + strings.Join(idstr, ",") + `) ORDER BY s.order , spec_id
	`
	gss, i, m := []*GoodsSpec{}, 0, map[int64]int{}
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			if err = rs.Scan(&id, &specID, &item, &name, &src); err != nil {
				return err
			}
			var gs *GoodsSpec
			s := &SpecItem{
				ItemID: uint32(DataSource.ConvInt64(id).Int64),
				Item:   DataSource.ConvString(item).String,
				Src:    DataSource.ConvString(src).String,
			}
			if _, ok := m[DataSource.ConvInt64(specID).Int64]; ok {
				gs = gss[m[specID.Int64]]
				gs.SpecList = append(gs.SpecList, s)
			} else {
				m[specID.Int64] = i
				gs = &GoodsSpec{SpecName: DataSource.ConvString(name).String}
				gs.SpecList = append(gs.SpecList, s)
				gss = append(gss, gs)
				i++
			}
		}
		return nil
	}
	err = DataSource.QueryMorePrepare(query, f, g.ID)
	return gss, err
}
