package model

import (
	"database/sql"
	"fmt"
)

// GoodsCategory 商品分类
type GoodsCategory struct {
	ID             int64  //商品分类id
	Name           string //商品分类名称
	MobileName     string //手机端显示的商品分类名
	ParentID       int64  //父id
	ParentIDPath   string //家族图谱
	Level          uint8  //等级
	SortOrder      uint8  //顺序排序
	IsShow         bool   //是否显示
	Image          string //分类图片
	IsHot          bool   //是否推荐为热门分类
	CatGroup       uint8  //分类分组默认0
	CommissionRate uint8  //分佣比例
}

// LoadGoodsCategory 加载所有产品分类
func LoadGoodsCategory() ([]*GoodsCategory, error) {
	var gcs []*GoodsCategory
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			gc := new(GoodsCategory)
			if err := rs.Scan(gc.Values()...); err != nil {
				return err
			}
			gcs = append(gcs, gc)
		}
		return nil
	}
	sqlStr := `SELECT * FROM tp_goods_category`
	err := DataSource.QueryMore(sqlStr, f)
	if err != nil {
		err = fmt.Errorf("[LoadGoodsCategory] %v", err)
	}
	return gcs, err
}

func (g *GoodsCategory) Values() []interface{} {
	return []interface{}{
		&g.ID,
		&g.Name,
		&g.MobileName,
		&g.ParentID,
		&g.ParentIDPath,
		&g.Level,
		&g.SortOrder,
		&g.IsShow,
		&g.Image,
		&g.IsHot,
		&g.CatGroup,
		&g.CommissionRate,
	}
}
