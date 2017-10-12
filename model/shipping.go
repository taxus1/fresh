package model

import (
	"database/sql"
	"fmt"
)

// Shipping 快递
type Shipping struct {
	ID           uint   //id  tinyint(3)
	ShippingCode string //快递代号  varchar(20)
	ShippingName string //快递名称  varchar(120)
	ShippingDesc string //描述  varchar(255)
	Insure       string //保险  varchar(10)
	Enabled      bool   //是否开启  tinyint(1)
}

// LoadShippings 加载所有快递信息
func LoadShippings() ([]*Shipping, error) {
	var ss []*Shipping
	query := `SELECT * FROM tp_shipping`
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			s := new(Shipping)
			if err := rs.Scan(s.Values()...); err != nil {
				return err
			}
			ss = append(ss, s)
		}
		return nil
	}
	err := DataSource.QueryMore(query, f)
	if err != nil {
		err = fmt.Errorf("[LoadShippings] %v", err)
	}
	return ss, err
}

// LoadShippingBy 根据code获取快递信息
func LoadShippingBy(code string) (*Shipping, error) {
	query := "SELECT * FROM tp_shipping WHERE shipping_code = ?"
	s := &Shipping{}
	err := DataSource.Session.QueryRow(query, code).Scan(s.Values()...)
	if err != nil {
		return nil, fmt.Errorf("[LoadShippingBy] %v", err)
	}
	return s, nil
}

func (u *Shipping) Values() []interface{} {
	return []interface{}{
		&u.ID,
		&u.ShippingCode,
		&u.ShippingName,
		&u.ShippingDesc,
		&u.Insure,
		&u.Enabled,
	}
}
