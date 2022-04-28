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
    const postId = req.body.postId; //tested with value 1
    const userId = req.body.userId; //tested with value 1
    const commentText = req.body.commentText; //tested with "Goodmoring"
    

    db.query("INSERT INTO comment (Text,PostId,UserId) VALUES (?,?,?)", 
    [commentText,postId,userId],
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