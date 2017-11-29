package model

import (
	"database/sql"
	"fmt"
)

// UserAddress 收货地址
type UserAddress struct {
	ID          uint32 // 表id mediumint(8)
	UserID      uint32 // 用户id mediumint(8)
	Consignee   string // 收货人 varchar(60)
	Email       string // 邮箱地址 varchar(60)
	Country     uint32 // 国家 int(11)
	Province    uint32 // 省份 int(11)
	City        uint32 // 城市 int(11)
	District    uint32 // 地区 int(11)
	Twon        uint32 // 乡镇 int(11)
	Address     string // 地址 varchar(120)
	Zipcode     string // 邮政编码 varchar(60)
	Mobile      string // 手机 varchar(60)
	IsDefault   bool   // 默认收货地址 tinyint(1)
	IsPickup    bool   // 0 tinyint(1)
	ProvinceStr sql.NullString
	CityStr     sql.NullString
	DistrictStr sql.NullString
	TwonStr     sql.NullString
}

// LoadUserAddress 获取用户所有收货地址
func LoadUserAddress(userID uint32) ([]*UserAddress, error) {
	var uas []*UserAddress
	query := `
	SELECT ua.*, r1.name AS province, r2.name AS city, r3.name AS district, r4.name AS twon
	FROM tp_user_address ua
	LEFT JOIN tp_region r1 ON ua.province = r1.id
	LEFT JOIN tp_region r2 ON ua.city = r2.id
	LEFT JOIN tp_region r3 ON ua.district = r3.id
	LEFT JOIN tp_region r4 ON ua.twon = r4.id
	WHERE ua.user_id = ?
	`
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			ua := new(UserAddress)
			if err := rs.Scan(ua.Fields()...); err != nil {
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

// LoadDefaultAddress 获取用户默认收货地址
func LoadDefaultAddress(userID uint32) (*UserAddress, error) {
	query := "SELECT * FROM tp_user_address WHERE user_id = ? AND is_default = 1"
	ua := &UserAddress{}
	err := DataSource.Session.QueryRow(query, userID).Scan(ua.Values()...)
	if err != nil {
		return nil, fmt.Errorf("[LoadDefaultAddress] %v", err)
	}
	return ua, nil
}

// Create 创建
func (u *UserAddress) Create(userID uint32) error {
	u.UserID = userID
	insert := DataSource.BuildInsert("tp_user_address", UserAddressCols, 1)
	id, err := DataSource.SaveOne(insert, u.Values()...)
	if err != nil {
		err = fmt.Errorf("[UserAddress.Create] %v", err)
	}
	u.ID = uint32(id)
	return err
}

// Update 更新
func (u *UserAddress) Update() error {
	update := `
	UPDATE tp_user_address SET consignee= ?, email= ?, country= ?, province= ?, city= ?, district= ?, twon= ?, address= ?, zipcode= ?, mobile= ?, is_default= ?
	WHERE address_id = ?
	`
	_, err := DataSource.Update(update, u.Consignee, u.Email, u.Country, u.Province, u.City, u.District, u.Twon, u.Address, u.Zipcode, u.Mobile, u.IsDefault, u.ID)
	if err != nil {
		err = fmt.Errorf("[UserAddress.Update] %v", err)
	}
	return err
}

// Delete 删除
func (u *UserAddress) Delete() error {
	update := `DELETE FROM tp_user_address WHERE address_id = ?
	`
	_, err := DataSource.Update(update, u.ID)
	if err != nil {
		err = fmt.Errorf("[UserAddress.Delete] %v", err)
	}
	return err
}

func (u *UserAddress) Fields() []interface{} {
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
		&u.ProvinceStr,
		&u.CityStr,
		&u.DistrictStr,
		&u.TwonStr,
	}
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
