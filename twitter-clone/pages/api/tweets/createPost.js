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
    const postText = req.body.postText;//test with "This is my first post!"
    const userId = req.body.userId;//test with value 108
    const timeStamp = req.body.timeStamp;//test with "2022-04-25 10:00:58"
    

    db.query("INSERT INTO post (UserId,PostText,Likes,TimeStamp,flagged) VALUES (?,?,?,?,?)", 
    [userId,postText,0,timeStamp,false],
    (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send("Success");
            console.log("Success")
        }
    }
    );
}