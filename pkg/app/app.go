package app

import (
	"net/http"

	"github.com/dawidd6/my-first-web-app/pkg/credentials"
	"github.com/dawidd6/my-first-web-app/pkg/db"
	"github.com/dawidd6/my-first-web-app/pkg/renderer"
	"github.com/labstack/echo/v4"
	"gorm.io/gorm"
)

type App struct {
	Echo *echo.Echo
	DB   *gorm.DB
}

func Run() error {
	var (
		app = new(App)
		err error
	)

	app.Echo = echo.New()
	app.Echo.Renderer = renderer.New()

	app.Echo.GET("/", app.Index)
	app.Echo.POST("/register", app.Register)
	app.Echo.POST("/login", app.Login)

	app.DB, err = db.New()
	if err != nil {
		return err
	}

	return app.Echo.Start(":8080")
}

func (a *App) Index(c echo.Context) error {
	htmlFileName := "index.html"
	substitutions := map[string]interface{}{
		"username": "abcxyz",
	}
	return c.Render(http.StatusOK, htmlFileName, substitutions)
}

func (a *App) Register(c echo.Context) error {
	providedCredentials := credentials.New(c)

	err := a.DB.Where("username = ?", providedCredentials.Username).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		return err
	}

	err = a.DB.Create(providedCredentials).Error
	if err != nil {
		return err
	}

	return nil
}

func (a *App) Login(c echo.Context) error {
	providedCredentials := credentials.New(c)

	savedCredentials := &credentials.Credentials{}
	err := a.DB.Where("username = ?", providedCredentials.Username).First(savedCredentials).Error
	if err == gorm.ErrRecordNotFound {
		return echo.ErrNotFound
	} else if err != nil {
		return err
	}

	if savedCredentials.Password != providedCredentials.Password {
		return echo.ErrUnauthorized
	}

	return nil
}
