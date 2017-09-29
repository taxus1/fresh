package model

import "fmt"

// User 客户
type User struct {
	ID              uint32  // 表id mediumint(8)
	Email           string  // 邮件 varchar(60)
	Password        string  // 密码 varchar(32)
	Paypwd          string  // 支付密码 varchar(32)
	Sex             uint8   // 女 tinyint(1)
	Birthday        int32   // 生日 int(11)
	UserMoney       float32 // 用户金额 decimal(10,
	FrozenMoney     float32 // 冻结金额 decimal(10,
	DistributMoney  float32 // 累积分佣金额 decimal(10,
	UnderlingNumber int32   // 用户下线总数 int(5)
	PayPoints       int32   // 消费积分 int(10)
	AddressID       float32 // 默认收货地址 mediumint(8)
	RegTime         int32   // 注册时间 int(10)
	LastLogin       int32   // 最后登录时间 int(11)
	LastIP          string  // 最后登录ip varchar(15)
	QQ              string  // QQ varchar(20)
	Mobile          string  // 手机号码 varchar(20)
	MobileValidated bool    // 是否验证手机 tinyint(3)
	Oauth           string  // alipay varchar(10)
	OpenID          string  // 第三方唯一标示 varchar(100)
	UnionID         string  // NUL varchar(100)
	HeadPic         string  // 头像 varchar(255)
	Province        int32   // 省份 int(6)
	City            int32   // 市区 int(6)
	District        int32   // 县 int(6)
	EmailValidated  float32 // 是否验证电子邮箱 tinyint(1)
	Nickname        string  // 第三方返回昵称 varchar(50)
	Level           int32   // 会员等级 tinyint(1)
	Discount        float32 // 会员折扣，默认1不享受 decimal(10,
	TotalAmount     float32 // 消费累计额度 decimal(10,
	IsLock          bool    // 是否被锁定冻结 tinyint(1)
	IsDistribut     bool    // 是 tinyint(1)
	FirstLeader     int32   // 第一个上级 int(11)
	SecondLeader    int32   // 第二个上级 int(11)
	ThirdLeader     int32   // 第三个上级 int(11)
	Token           string  // 授权类似于session_id varchar(64)
	MessageMask     int32   // 消息掩码 tinyint(1)
	PushID          string  // 推送id varchar(30)
	DistributLevel  int32   // 分销商等级 tinyint(2)
}

// LoadUserBy 根据token 获取用户信息
func LoadUserBy(token string) (*User, error) {
	u := &User{}
	query := `SELECT * FROM tp_users WHERE token = ?`
	err := DataSource.Session.QueryRow(query, token).Scan(u.Values()...)
	if err != nil {
		err = fmt.Errorf("[LoadUserBy] %v", err)
	}
	return u, err
}

func (u *User) Values() []interface{} {
	return []interface{}{
		&u.ID,
		&u.Email,
		&u.Password,
		&u.Paypwd,
		&u.Sex,
		&u.Birthday,
		&u.UserMoney,
		&u.FrozenMoney,
		&u.DistributMoney,
		&u.UnderlingNumber,
		&u.PayPoints,
		&u.AddressID,
		&u.RegTime,
		&u.LastLogin,
		&u.LastIP,
		&u.QQ,
		&u.Mobile,
		&u.MobileValidated,
		&u.Oauth,
		&u.OpenID,
		&u.UnionID,
		&u.HeadPic,
		&u.Province,
		&u.City,
		&u.District,
		&u.EmailValidated,
		&u.Nickname,
		&u.Level,
		&u.Discount,
		&u.TotalAmount,
		&u.IsLock,
		&u.IsDistribut,
		&u.FirstLeader,
		&u.SecondLeader,
		&u.ThirdLeader,
		&u.Token,
		&u.MessageMask,
		&u.PushID,
		&u.DistributLevel,
	}
}
