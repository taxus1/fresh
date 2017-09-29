package model

import "fresh/config"

// DataSource 数据源
var DataSource *config.Mysql

func ConnectDB(c *config.MysqlConfig) error {
	var err error
	DataSource, err = config.NewMysql(c)
	return err
}

// Modeler 模型接口
// 添加一些通用接口方法
type Modeler interface {

	// Values 获取对象中的值进行SQL设值
	Values() []interface{}
}
