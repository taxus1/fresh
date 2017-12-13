package config

import (
	"io/ioutil"
	"log"
	"testing"

	yaml "gopkg.in/yaml.v2"
)

func TestMysqlConnect(t *testing.T) {
	var result int
	data, err := ioutil.ReadFile("database.yml")
	if err != nil {
		panic(err)
	}

	c := &MysqlConfig{}
	if err = yaml.Unmarshal(data, c); err != nil {
		panic(err)
	}

	c.Env = "dev"
	log.Printf("%v \n", c.Current())

	m, err := NewMysql(c)
	if err != nil {
		panic(err)
	}

	sqlStr := "SELECT 1"
	if err = m.Session.QueryRow(sqlStr).Scan(&result); err != nil {
		panic(err)
	}
	log.Println(result)
}
