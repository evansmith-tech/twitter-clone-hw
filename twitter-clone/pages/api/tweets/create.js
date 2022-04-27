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
    const UserId = req.body.UserId;
    const PostText = req.body.PostText;

    db.query("INSERT INTO post (UserId, PostText, Likes) VALUES (?,?,?)", 
    [UserId, PostText, 0],
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