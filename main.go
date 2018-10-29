package main

import (
    "fmt"
    "github.com/gorilla/mux"
    "net/http"
)

func main() {
    r := mux.NewRouter()
    fileServer := http.FileServer(http.Dir("./"))
    r.Handle("/", http.StripPrefix("/", fileServer))
    r.HandleFunc("/js/{file}", jsServer)

    err := http.ListenAndServe(":80",r)
    if err != nil {
        fmt.Println(err)
    }
}

func jsServer(w http.ResponseWriter, r *http.Request){
    vars := mux.Vars(r)
    file := vars["file"]
    http.ServeFile(w,r,fmt.Sprintf("js/%v",file))
}