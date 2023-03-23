package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

type User struct {
	ID        int    `json:"id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
}

func fillUserInDatabase(id int, firstName string, lastName string, email string) {
	db, err := sql.Open("mysql", "root:toorMove23!@tcp(127.0.0.1:3307)/userdb")
	defer db.Close()

	if err != nil {
		log.Fatal(err)
	}

	insert, err := db.Query("INSERT INTO users VALUES(?, ?, ?, ?)", id, firstName, lastName, email)
	if err != nil {
		panic(err.Error())
	}
	defer insert.Close()
}

func getUserFromDatabase(email string) (*User, error) {
	// Replace this with a call to your database to retrieve the user with the given ID
	db, err := sql.Open("mysql", "root:toorMove23!@tcp(127.0.0.1:3307)/userdb")
	defer db.Close()

	if err != nil {
		return nil, err
	}

	res, err := db.Query("SELECT * FROM users WHERE email = ?", email)
	defer res.Close()

	if err != nil {
		return nil, err
	}

	var user User

	for res.Next() {
		err = res.Scan(&user.ID, &user.FirstName, &user.LastName, &user.Email)
		if err != nil {
			return nil, err
		}
	}

	return &user, nil
}

func getUser(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Recieved Request!!")
	fmt.Println("Retrieving userEmail from request...")
	userEmailStr := r.URL.Query().Get("userEmail")

	fmt.Println("User email: ", userEmailStr)

	fmt.Println("Retrieving user object using userEmail...")
	user, err := getUserFromDatabase(userEmailStr)
	if err != nil {
		http.Error(w, "Error retrieving user", http.StatusInternalServerError)
		return
	}

	fmt.Println("Writing user object into JSON..")
	userJSON, err := json.Marshal(user)
	if err != nil {
		http.Error(w, "Error marshalling user to JSON", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	fmt.Println("Responding to request with generated JSON...")
	w.Write(userJSON)
	fmt.Println()
}

func main() {
	fmt.Println("Backend Process Initiated...")
	//I called this once to practice making a table entry, doesn't need to be called again
	// fillUserInDatabase(1, "John", "Doe", "johndoe@hotmail.com")

	fmt.Println("Returning user object...")

	http.HandleFunc("/api/users", getUser)
	http.ListenAndServe(":8080", nil)
}
