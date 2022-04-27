const mysql = require("mysql");
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "twitter_clone",
})


export default function handler(req,res) {
    const id = req.query;
    db.query(`SELECT * FROM user WHERE UserId=${id}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
}