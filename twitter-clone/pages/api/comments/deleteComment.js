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
    const CommentId =req.body.CommentId
    db.query("DELETE From comment where CommentId=?;",[CommentId], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Success");
            console.log("Success")
        }
    });
}