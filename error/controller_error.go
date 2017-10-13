package error

import "github.com/kataras/iris"

// AppError APP错误
type AppError struct{}

// NewAppError NewAPP错误
func NewAppError() *AppError {
	return new(AppError)
}

// InternalServerError 服务器错误
func (a *AppError) InternalServerError(ctx iris.Context) {
	ctx.WriteString("server error, contact administrator")
}
