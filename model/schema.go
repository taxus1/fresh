// 数据库表列名常量

package model

// CartCols 购物车
var CartCols = []string{
	"user_id",
	"session_id",
	"goods_id",
	"goods_sn",
	"goods_name",
	"market_price",
	"goods_price",
	"member_goods_price",
	"goods_num",
	"spec_key",
	"spec_key_name",
	"bar_code",
	"selected",
	"add_time",
	"sku",
}

// OrderCols 订单
var OrderCols = []string{
	"order_sn",
	"user_id",
	"order_status",
	"shipping_status",
	"pay_status",
	"consignee",
	"country",
	"province",
	"city",
	"district",
	"twon",
	"address",
	"zipcode",
	"mobile",
	"email",
	"shipping_code",
	"shipping_name",
	"invoice_title",
	"goods_price",
	"shipping_price",
	"order_amount",
	"total_amount",
	"add_time",
	"deleted",
	"user_note",
}

// OrderActionCols 订单操作记录
var OrderActionCols = []string{
	"order_id",
	"action_user",
	"order_status",
	"shipping_status",
	"pay_status",
	"action_note",
	"status_desc",
	"log_time",
}

// OrderGoodsCols 订单商品
var OrderGoodsCols = []string{
	"order_id",
	"goods_id",
	"goods_name",
	"goods_sn",
	"goods_num",
	"market_price",
	"goods_price",
	"cost_price",
	"member_goods_price",
	"give_integral",
	"spec_key",
	"spec_key_name",
	"bar_code",
	"is_comment",
	"prom_type",
	"prom_id",
	"is_send",
	"delivery_id",
	"sku",
}

// AdCols 广告
var AdCols = []string{
	"ad_id",
	"pid",
	"media_type",
	"ad_name",
	"ad_link",
	"ad_code",
	"start_time",
	"end_time",
	"link_man",
	"link_email",
	"link_phone",
	"click_count",
	"enabled",
	"orderby",
	"target",
	"bgcolor",
}
