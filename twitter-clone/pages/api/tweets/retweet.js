const mysql = require("mysql");
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    databse: "twitter_clone",
})


// POST request
export default function handler(req,res) {
    const postId = req.body.postId
    const userId = req.body.userId
    db.query("INSERT INTO repost (PostId, UserId) VALUES (?,?);",[postId, userId], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
}