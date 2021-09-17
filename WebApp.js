const http = require('http')
const port = 3000
const table = [];

const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "M@hi4399",
    database: "sampleapplication"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query('SELECT * FROM sampletable', (err, rows) => {
        if(err) throw err;
        rows.forEach((row) => {
            printRow = (`First Name: ${row.FirstName}  Last Name: ${row.LastName}`)
            table.push(printRow)

        })
    })
});


const server = http.createServer(function (req, res) {
    res.write("Hello World")
    table.forEach((row)=> {
        res.write("\n" + row)
    })
    res.end()
})



server.listen(port, function (error) {
    if (error) {
        console.log("Something went wrong", error)
    } else {
        console.log("Server is working! " + port)
    }
})