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
    const {id} = req.query;
    
    db.query(`SELECT u.FirstName as FirstName, u.LastName as LastName, p.UserId as UserId, p.PostID as PostID, p.PostText as PostText, p.Likes as Likes, p.Timestamp as Timestamp, p.flagged as flagged FROM post p, user u WHERE p.PostID=${id} ORDER BY timestamp DESC;`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log("Success");
        }
    });
}