package model

import (
	"database/sql"
	"fmt"
)

// Comment 评论
type Comment struct {
	ID          uint32 // 评论id int(10)
	GoodsID     uint32 // 商品id mediumint(8)
	Email       string // email邮箱 varchar(60)
	Username    string // 用户名 varchar(60)
	Content     string // 评论内容 text
	AddTime     uint32 // 添加时间 int(10)
	IPAddress   string // ip地址 varchar(15)
	IsShow      bool   // 是否显示 tinyint(1)
	ParentID    uint32 // 父id int(10)
	UserID      uint32 // 评论用户 int(10)
	Img         string // 晒单图片 text
	OrderID     uint32 // 订单id mediumint(8)
	DeliverRank uint8  // 物流评价等级 tinyint(1)
	GoodsRank   uint8  // 商品评价等级 tinyint(1)
	ServiceRank uint8  // 商家服务态度评价等级 tinyint(1)
	ZanNum      uint32 // 被赞数 int(10)
	ZanUserID   string // 点赞用户id varchar(255)
	IsAnonymous bool   // 是否匿名评价:0不是，1是 tinyint(1)
}

// LoadComment 加载商品评论
func LoadComment(goodsID uint32) ([]*Comment, error) {
	cs := []*Comment{}
	query := `SELECT * FROM tp_comment WHERE goods_id = ?`
	f := func(rs *sql.Rows) error {
		for rs.Next() {
			c := new(Comment)
			if err := rs.Scan(c.Values()...); err != nil {
				return err
			}
			cs = append(cs, c)
		}
		return nil
	}
	err := DataSource.QueryMore(query, f, goodsID)
	if err != nil {
		err = fmt.Errorf("[LoadComment] %v", err)
	}
	return cs, err
}

func (c *Comment) Values() []interface{} {
	return []interface{}{
		&c.ID,
		&c.GoodsID,
		&c.Email,
		&c.Username,
		&c.Content,
		&c.AddTime,
		&c.IPAddress,
		&c.IsShow,
		&c.ParentID,
		&c.UserID,
		&c.Img,
		&c.OrderID,
		&c.DeliverRank,
		&c.GoodsRank,
		&c.ServiceRank,
		&c.ZanNum,
		&c.ZanUserID,
		&c.IsAnonymous,
	}
}
