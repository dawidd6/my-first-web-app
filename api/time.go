package handler

import (
	"encoding/json"
	"net/http"
	"time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	currentTime := time.Now().Local().Format("15:04:05")
	currentTimeMap := map[string]string{
		"time": currentTime,
	}
	currentTimeJSON, err := json.Marshal(currentTimeMap)
	if err != nil {
		w.Write(nil)
	}
	w.Write(currentTimeJSON)
}
