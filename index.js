const express = require("express");
const app = express();
const mysql = require('mysql2');
const config = require('./config');

const mysqlConnection = mysql.createConnection({
    host:config.host,
    port: config.port,
    user: config.user,
    password: config.password
});
mysqlConnection.connect(function(err){
    if(err) throw err;
    console.log('Mysql connection: success');
    const sqlStatement = `CREATE DATABASE IF NOT EXISTS ${config.database};`
    mysqlConnection.query(sqlStatement, function (err, result) {
        if (err) throw err;
        console.log(`Database ${config.database} creation: success`);
      });
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",
    require("./routes/quiz"),
    require("./routes/categories"),
    require("./routes/options"),
    require("./routes/question")
);
app.listen(3000, ()=> console.log('SERVER STATUS RUNNING: 3000'));