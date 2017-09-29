package model

// Spec 商品规格
type Spec struct {
	ID         uint64  // 规格商品id bigint(20)
	GoodsID    uint32  // 商品id int(11)
	Key        string  // 规格键名 varchar(255)
	KeyName    string  // 规格键名中文 varchar(255)
	Price      float32 // 价格 decimal(10,
	StoreCount uint32  // 库存数量 int(11)
	BarCode    string  // 商品条形码 varchar(32)
	Sku        string  // SKU varchar(128)
	SpecImg    string  // 规格商品主图 varchar(255)
	PromID     uint32  // 活动id int(10)
	PromType   uint8   // 参加活动类型 tinyint(2)
}
