package controllers

import (
	"fresh/model"
	pregion "fresh/proto/region"

	"github.com/kataras/iris"
)

type regionController struct {
	*controller
}

// Children 子区域
func (c *regionController) Children(ctx iris.Context) {
	pid, _ := ctx.Params().GetInt("pid")

	r := model.NewRegion(uint32(pid))
	children, err := r.Children()
	if err != nil {
		ctx.Text(err.Error())
		return
	}

	rs := make([]*pregion.Region, len(children))
	for i, v := range children {
		rs[i] = &pregion.Region{
			ID:       v.ID,
			Name:     v.Name,
			Level:    uint32(v.Level),
			ParentID: v.ParentID,
		}
	}

	c.WriteProto(ctx, &pregion.Children{Regions: rs})
}
