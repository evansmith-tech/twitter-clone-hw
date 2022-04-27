const mysql = require("mysql");
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "twitter_clone",
})


export default function handler(req, res) {
    //todo confirm this SQL statement works
    db.query("SELECT * FROM post WHERE flagged=1", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
    // res.send( {
    //         name: "Dan Abrahmov",
    //         avatar_link:"https://bit.ly/dan-abramov",
    //         tweet: "Hello father",
    //         timestamp: "5:39PM",
    //         flagged: false
    //     });
}