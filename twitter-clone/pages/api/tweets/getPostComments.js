const mysql = require("mysql");
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "twitter_clone",
})


// POST request
export default function handler(req,res) {
    const userId = req.body.userId
    db.query("SELECT * FROM comment WHERE PostId = ?;", [userId], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
}