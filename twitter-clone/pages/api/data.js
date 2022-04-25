const mysql = require("mysql");
const express = require("express");
const app = express();
const cors = requre("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    databse: "twitter_clone",
})

app.get("/getUsers", (req, res) =>{
    db.query("SELECT * FROM user", (err, result) =>{
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.post("/createUser", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;
    const isAdmin = req.body.isAdmin;

    db.query("INSERT INTO user (UserId, FirstName, LastName, Password, IsAdmin) VALUES (?,?,?,?,?)", 
    [nil, firstName, lastName, password, isAdmin],
    (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send("Success");
        }
    }
    );
});

app.listen(3001, () => {
    console.log("Server listening on 3001");
});