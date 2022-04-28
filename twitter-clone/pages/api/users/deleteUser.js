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
    const userId = req.body.userId//test with value 5
    db.query("DELETE From user where userId=?;",[userId], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Success");
            console.log("Success");
        }
    });
}