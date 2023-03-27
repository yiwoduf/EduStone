package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"

	_ "github.com/go-sql-driver/mysql"
)

type Award struct {
	Key       string `json:"key"`       // unique key
	Component string `json:"component"` // name
	Source    string `json:"source"`    //image source
}

type Badge struct {
	Key       string `json:"key"`       // unique key
	Component string `json:"component"` // name
	Source    string `json:"source"`    //image source
}

type Class struct {
	Name            string `json:"name"`             //use the Canvas JSON's "course_code" value here
	UUID            string `json:"uuid"`             //class's UUID
	Calendar        string `json:"calendar"`         //class's calendar link under calendar>ics
	EnrollmentState string `json:"enrollment_state"` //whether the class is an active class or not, under "enrollments"
}
type User struct {
	ID        int       `json:"id"`
	FirstName string    `json:"first_name"`
	LastName  string    `json:"last_name"`
	Email     string    `json:"email"`
	Classes   [10]Class `json:"classes"`
	Awards    [99]Award `json:"awards"`
	Badges    [99]Badge `json:"badges"`
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

func getDummyUserFromDatabase(email string) (*User, error) {

	var user User

	user.Email = email
	user.FirstName = "John"
	user.LastName = "Doe"
	user.ID = 1
	for i := 0; i < 3; i++ {
		var tempClass Class
		tempClass.Name = "class" + strconv.Itoa(i)
		tempClass.EnrollmentState = "active"
		tempClass.UUID = "mbvayuoabuijcia" + strconv.Itoa(i)
		tempClass.Calendar = "https://www.google.com/"
		user.Classes[i] = tempClass
	}

	for i := 0; i < 8; i++ {
		var tempAward Award
		var tempBadge Badge
		tempAward.Component = "award" + strconv.Itoa(i)
		tempBadge.Component = "badge" + strconv.Itoa(i)
		tempAward.Key = "awardUID" + strconv.Itoa(i)
		tempBadge.Key = "badgeUID" + strconv.Itoa(i)
		tempAward.Source = "./design/ui/award/achievements/achievement_circle.png"
		tempBadge.Source = "./design/ui/award/badges/badge_BLUE.png"
		user.Awards[i] = tempAward
		user.Badges[i] = tempBadge
	}

	return &user, nil
}

func getUser(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Recieved Request!!")
	fmt.Println("Retrieving userEmail from request...")
	userEmailStr := r.URL.Query().Get("userEmail")

	fmt.Println("User email: ", userEmailStr)

	fmt.Println("Retrieving user object using userEmail...")
	// user, err := getUserFromDatabase(userEmailStr)
	user, err := getDummyUserFromDatabase(userEmailStr)
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

	// fmt.Println("Returning user object...")

	http.HandleFunc("/api/users", getUser)
	http.ListenAndServe(":8080", nil)
}
