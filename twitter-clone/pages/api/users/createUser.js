const mysql = require("mysql");
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    port:3306,
    database: "TwitterClone",
})


// POST request
export default function handler(req,res) {
    const firstName = req.body.firstName;// tested with Boby
    const lastName = req.body.lastName;//tested with Jonson
    const password = req.body.password;//tested with password
    const isAdmin = req.body.isAdmin;//tested with false

    db.query("INSERT INTO user (FirstName, LastName, Password, IsAdmin) VALUES (?,?,?,?)", 
    [firstName, lastName, password, isAdmin],
    (err, result) => {
        if (err){
            console.log(err);
        }else{
            
            res.send("Success");
            console.log("Success");
 
        }
    }
    );
}