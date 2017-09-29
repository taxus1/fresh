package model

import (
	"fresh/config"
	"io/ioutil"
	"log"

	yaml "gopkg.in/yaml.v2"
)

func init() {
	data, err := ioutil.ReadFile("./../config/database.yml")
	if err != nil {
		panic(err)
	}

	c := &config.MysqlConfig{}
	if err = yaml.Unmarshal(data, c); err != nil {
		panic(err)
	}

	c.Env = "dev"
	log.Printf("current db env %v \n", c.Current())

	err = ConnectDB(c)
	if err != nil {
		panic(err)
	}
}
