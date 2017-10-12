package model

import (
	"database/sql"
	"fmt"
	"log"
	"time"
)

// OrderAction 订单操作记录
type OrderAction struct {
	ID            uint32 // 表id mediumint(8)
	OrderID       uint32 // 订单ID mediumint(8)
	ActionUser    uint32 // 操作人 0 为用户操作，其他为管理员id int(11)
	OrderState    uint   // 订单状态 tinyint(1)
	ShippingState uint   // 配送状态 tinyint(1)
	PayState      uint   // 支付状态 tinyint(1)
	ActionNote    string // 操作备注 varchar(255)
	LogTime       int64  // 操作时间 int(11)
	StateDesc     string // 状态描述 varchar(255)
}

// NewOrderAction 新建订单操作记录
func NewOrderAction() *OrderAction {
	return &OrderAction{LogTime: time.Now().Unix()}
}

// Create 创建操作记录
func (o *OrderAction) Create(tx *sql.Tx, order *Order, actionUser uint32, actionNote, stateDesc string) error {
	o.OrderID = order.ID
	o.OrderState = order.OrderState
	o.ShippingState = order.ShippingState
	o.PayState = order.PayState
	o.ActionUser = actionUser
	o.ActionNote = actionNote
	o.StateDesc = stateDesc
	insert := DataSource.BuildInsert("tp_order_action", OrderActionCols, 1)
	log.Printf("%v", o)
	_, err := DataSource.SaveTx(tx, insert, o.Values()...)
	if err != nil {
		err = fmt.Errorf("[OrderAction.Create] %v", err)
	}
	return err
}

func (o *OrderAction) Values() []interface{} {
	return []interface{}{
		&o.OrderID,
		&o.ActionUser,
		&o.OrderState,
		&o.ShippingState,
		&o.PayState,
		&o.ActionNote,
		&o.StateDesc,
		&o.LogTime,
	}
}
