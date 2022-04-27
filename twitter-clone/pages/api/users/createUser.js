const mysql = require("mysql");
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "twitter_clone",
})


// POST request
export default function handler(req,res) {
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
            print(result);
            res.send("Success");
        }
    }
    );
}