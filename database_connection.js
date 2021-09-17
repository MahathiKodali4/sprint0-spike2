const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "M@hi4399",
    database: "sampleapplication"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM sampletable", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});


