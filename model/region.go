package model

import (
	"database/sql"
	"fmt"
)

// Region 行政区域
type Region struct {
	ID           uint32    `json:"id"`   // 表id int(11)
	Name         string    `json:"name"` // 地区名称 varchar(32)
	Level        uint8     `json:"-"`    // 分省市县区 tinyint(4)
	ParentID     uint32    `json:"pid"`  // 父id int(10)
	CityList     []*Region `json:"cityList,omitempty"`
	DistrictList []*Region `json:"districtList,omitempty"`
	TwonList     []*Region `json:"twonList,omitempty"`
}

// NewRegion 区域对象
func NewRegion(pid uint32) *Region {
	return &Region{ParentID: pid}
}

// LoadRegions 获取所有行政区域
func LoadRegions() ([]*Region, error) {
	regions := []*Region{}
	query := `SELECT * FROM tp_region`
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			region := new(Region)
			if err := rs.Scan(region.Fields()...); err != nil {
				return err
			}
			regions = append(regions, region)
		}
		return nil
	}
	err := DataSource.QueryMore(query, f)
	if err != nil {
		err = fmt.Errorf("[LoadRegions] %v", err)
	}
	return regions, err
}

// Children 下一级子节点
func (r *Region) Children() ([]*Region, error) {
	regions := []*Region{}
	query := `SELECT * FROM tp_region WHERE parent_id = ?`
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			region := new(Region)
			if err := rs.Scan(region.Fields()...); err != nil {
				return err
			}
			regions = append(regions, region)
		}
		return nil
	}
	err := DataSource.QueryMore(query, f, r.ParentID)
	if err != nil {
		err = fmt.Errorf("[Children] %v", err)
	}
	return regions, err
}

func (r *Region) Fields() []interface{} {
	return []interface{}{
		&r.ID,
		&r.Name,
		&r.Level,
		&r.ParentID,
	}
}
