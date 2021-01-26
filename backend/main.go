package main

import (
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/gin-gonic/gin"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	prefix := os.Getenv("PREFIX")
	if prefix == "" {
		prefix = "../frontend/public"
	}

	r := gin.Default()
	r.Static("/build", filepath.Join(prefix, "build"))
	r.Static("/css", filepath.Join(prefix, "css"))
	r.Static("/img", filepath.Join(prefix, "img"))
	r.GET("/", func(c *gin.Context) {
		c.File(prefix)
	})
	r.GET("/time", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"time": time.Now().Local().Format("15:04:05"),
		})
	})
	r.Run(":" + port)
}
