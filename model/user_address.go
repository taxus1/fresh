package model

import (
	"database/sql"
	"fmt"
)

// UserAddress 收货地址
type UserAddress struct {
	ID        uint32 // 表id mediumint(8)
	UserID    uint32 // 用户id mediumint(8)
	Consignee string // 收货人 varchar(60)
	Email     string // 邮箱地址 varchar(60)
	Country   uint32 // 国家 int(11)
	Province  uint32 // 省份 int(11)
	City      uint32 // 城市 int(11)
	District  uint32 // 地区 int(11)
	Twon      uint32 // 乡镇 int(11)
	Address   string // 地址 varchar(120)
	Zipcode   string // 邮政编码 varchar(60)
	Mobile    string // 手机 varchar(60)
	IsDefault bool   // 默认收货地址 tinyint(1)
	IsPickup  bool   // 0 tinyint(1)
}

// LoadUserAddress 获取用户所有收货地址
func LoadUserAddress(userID uint32) ([]*UserAddress, error) {
	var uas []*UserAddress
	query := `SELECT * FROM tp_user_address WHERE user_id = ?`
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			ua := new(UserAddress)
			if err := rs.Scan(ua.Values()...); err != nil {
				return err
			}
			uas = append(uas, ua)
		}
		return nil
	}
	err := DataSource.QueryMore(query, f, userID)
	if err != nil {
		err = fmt.Errorf("[LoadUserAddress] %v", err)
	}
	return uas, err
}

// LoadShippingAddress 获取收货地址
func LoadShippingAddress(id uint32) (*UserAddress, error) {
	query := "SELECT * FROM tp_user_address WHERE address_id = ?"
	ua := &UserAddress{}
	err := DataSource.Session.QueryRow(query, id).Scan(ua.Values()...)
	if err != nil {
		return nil, fmt.Errorf("[LoadShippingAddress] %v", err)
	}
	return ua, nil
}

func (u *UserAddress) Values() []interface{} {
	return []interface{}{
		&u.ID,
		&u.UserID,
		&u.Consignee,
		&u.Email,
		&u.Country,
		&u.Province,
		&u.City,
		&u.District,
		&u.Twon,
		&u.Address,
		&u.Zipcode,
		&u.Mobile,
		&u.IsDefault,
		&u.IsPickup,
	}
}