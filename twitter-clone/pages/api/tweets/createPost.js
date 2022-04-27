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
    const postText = req.body.postText;
    const postId = req.body.postId;
    const userId = req.body.userId;
    const likes = req.body.likes;
    const timeStamp = req.body.timeStamp;
    

    db.query("INSERT INTO post (PostId,UserId,PostText,Likes,TimeStamp) VALUES (?,?,?,?,?)", 
    [postId,userId,postText,likes,timeStamp],
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