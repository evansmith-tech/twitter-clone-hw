const mysql = require("mysql");
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    port:3306,
    database: "TwitterClone",
})


export default function handler(req, res) {
    db.query("SELECT * FROM user", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
}