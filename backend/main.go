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
		static = "../frontend/public"
	}

	e := echo.New()
	e.Static("/", static)
	e.POST("/api/time", func(c echo.Context) error {
		minutesOffsetRaw := c.FormValue("minutes_offset") + "m"

		minutesOffset, err := time.ParseDuration(minutesOffsetRaw)
		if err != nil {
			return err
		}
		hoursOffset := -minutesOffset

		timeNow := time.Now().UTC().Add(hoursOffset)
		return c.JSON(http.StatusOK, map[string]string{
			"time": timeNow.Format("15:04:05"),
		})
	})
	e.Start(":8080")
}
