package controllers

import "github.com/kataras/iris/mvc"

type UserController struct {
	mvc.Controller
}

func (c *UserController) Get() {
	c.Text = "xxx"
}
