package db

import (
	"fmt"
	"os"

	"github.com/dawidd6/my-first-web-app/pkg/credentials"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func New() (*gorm.DB, error) {
	dbHost := os.Getenv("DB_HOST")
	dbUser := os.Getenv("DB_USER")
	dbPass := os.Getenv("DB_PASS")
	dbName := os.Getenv("DB_NAME")

	address := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=5432", dbHost, dbUser, dbPass, dbName)
	db, err := gorm.Open(postgres.Open(address), nil)
	if err != nil {
		return nil, err
	}

	err = db.AutoMigrate(&credentials.Credentials{})
	if err != nil {
		return nil, err
	}

	return db, nil
}
