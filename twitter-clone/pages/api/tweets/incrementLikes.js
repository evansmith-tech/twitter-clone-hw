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
    const postId =req.body.postId//test with value 1
    db.query("UPDATE post SET Likes=Likes+1 WHERE postId=?;",[postId], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Success");
            console.log("Success");
        }
    });
}