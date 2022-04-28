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
    db.query("SELECT * FROM post;", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log("Success");
        }
    });
}