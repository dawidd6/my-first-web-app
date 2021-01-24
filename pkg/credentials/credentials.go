package credentials

import (
	"github.com/labstack/echo/v4"
	"gorm.io/gorm"
)

type Credentials struct {
	gorm.Model
	Username string
	Password string
}

func New(c echo.Context) *Credentials {
	return &Credentials{
		Username: c.FormValue("username"),
		Password: c.FormValue("password"),
	}
}
