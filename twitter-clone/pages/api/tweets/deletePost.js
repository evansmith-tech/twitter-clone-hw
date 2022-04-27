const mysql = require("mysql");
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "twitter_clone",
})


// POST request
export default function handler(req,res) {
    const postId = req.body.postId
    db.query("DELETE From post where postId=?;",[postId], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
}