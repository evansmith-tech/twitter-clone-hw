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
    console.log(req.body);
    let postText = req.body.postText;//test with "This is my first post!"
    let userId = req.body.userId;
    let timeStamp = req.body.timeStamp;//test with "2022-04-25 10:00:58"
    console.log(postText);

    db.query(`INSERT INTO post (UserId,PostText,Likes,Timestamp,flagged) VALUES (${userId},${postText}, 0, ${timeStamp}, ${false});`, 
    (err, result) => {
        if (err){
            console.log(err);
        }else{
            console.log(result);
            res.send("Success");
        }
    }
    );
}