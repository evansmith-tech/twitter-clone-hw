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
    const UserId =req.body.UserId;//tested with 106
    const PostText = req.body.PostText;//tested with "B.O.B BoddyRay"
    const Timestamp =req.body.Timestamp;//tested with Timestamp="2022-04-25 20:00:58"
    
    db.query("INSERT INTO post (UserId, PostText, Likes,Timestamp) VALUES (?,?,?,?)", 
    [UserId,PostText, 0,Timestamp],
    (err, result) => {
        if (err){
            console.log(err);
        }else{
            
            res.send("Success");
            console.log("Success");
        }
    }
    );
}