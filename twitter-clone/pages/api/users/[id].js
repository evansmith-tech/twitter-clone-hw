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
    db.query(`SELECT * FROM user WHERE UserId=${id}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log("Success");
        }
    });
}