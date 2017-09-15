package config

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
