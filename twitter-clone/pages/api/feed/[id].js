// todo get all posts for a specific user  [id] for that user's feed
const mysql = require("mysql");
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    port:3306,
    database: "TwitterClone",
})


export default function handler(req,res) {
    const {id} = req.query; //tested with value 1
    console.log(id);
    db.query(`SELECT u.FirstName as FirstName, u.LastName as LastName, p.UserId as UserId, p.PostID as PostID, p.PostText as PostText, p.Likes as Likes, p.Timestamp as Timestamp, p.flagged as flagged FROM post p, user u 
    WHERE u.UserId in (SELECT User2Id FROM follows WHERE User1Id=${id}) ORDER BY timestamp DESC;`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log("Success");
        }
    });
}