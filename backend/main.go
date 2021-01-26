package main

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Static("/build", "../frontend/public/build")
	r.Static("/css", "../frontend/public/css")
	r.Static("/img", "../frontend/public/img")
	r.GET("/", func(c *gin.Context) {
		c.File("../frontend/public")
	})
	r.GET("/time", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"time": time.Now().Local().Format("15:04:05"),
		})
	})
	r.Run(":8080")
}
