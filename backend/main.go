package main

import (
	"net/http"
	"os"
	"time"

	"github.com/labstack/echo/v4"
)

func main() {
	static := os.Getenv("STATIC")
	if static == "" {
		static = "../public"
	}

	e := echo.New()
	e.Static("/", static)
	e.GET("/api/time", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{
			"time": time.Now().Local().Format("15:04:05"),
		})
	})
	e.Start(":8080")
}
