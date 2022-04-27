const mysql = require("mysql");
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    databse: "twitter_clone",
})


// POST request
export default function handler(req,res) {
    const postId = req.body.postId;
    const userId = req.body.userId;
    const commentText = req.body.commentText;
    

    db.query("INSERT INTO comment (Text,PostId,UserId) VALUES (?,?,?)", 
    [commentText,postId,userId],
    (err, result) => {
        if (err){
            console.log(err);
        }else{
            print(result);
            res.send("Success");
        }
    }
    );
}