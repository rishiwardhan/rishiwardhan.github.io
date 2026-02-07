package main

import (
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/", fs)

	log.Println("💖 Valentine card running at http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
