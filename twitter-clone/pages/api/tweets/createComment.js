const mysql = require("mysql");
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    databse: "twitter_clone",
})


// POST request
export default function handler(req,res) {
    const commentId = req.body.commentId;
    const postId = req.body.postId;
    const userId = req.body.userId;
    const commentText = req.body.commentText;
    

    db.query("INSERT INTO comment (CommentId,PostId,UserId,CommentText) VALUES (?,?,?,?)", 
    [commentId,postId,userId,commentText],
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