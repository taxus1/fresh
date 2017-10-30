package config

import (
	"io/ioutil"

	yaml "gopkg.in/yaml.v2"
)

// DbBase 数据库配连接属性
type DbBase struct {
	Host      string `yaml:"host"`
	Username  string `yaml:"username"`
	Password  string `yaml:"password"`
	Database  string `yaml:"database"`
	Encoding  string `yaml:"encoding"`
	MaxConns  int    `yaml:"maxConns"`
	IdleConns int    `yaml:"idleConns"`
}

// MysqlConfig mysql配置对象
type MysqlConfig struct {
	Env         string
	Development *DbBase `yaml:"development"`
	Test        *DbBase `yaml:"test"`
	Production  *DbBase `yaml:"production"`
}

// Current 获取当前运行环境下的配置
//  默认为开发环境development
func (m *MysqlConfig) Current() *DbBase {
	switch m.Env {
	case "production":
		return m.Production
	case "test":
		return m.Test
	default:
		return m.Development
	}
}

// LoadDbConf 从yml配置文件读取数据库配置
func LoadDbConf() *MysqlConfig {
	data, err := ioutil.ReadFile("./config/database.yml")
	// data, err := ioutil.ReadFile("./../config/database.yml")
	if err != nil {
		panic(err)
	}

	c := &MysqlConfig{}
	if err = yaml.Unmarshal(data, c); err != nil {
		panic(err)
	}
	return c
}
