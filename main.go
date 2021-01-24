package main

import (
	"log"

	"github.com/dawidd6/my-first-web-app/pkg/app"
)

func main() {
	err := app.Run()
	if err != nil {
		log.Fatal(err)
	}
}
