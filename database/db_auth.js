const mysql = require('mysql');


const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodejs_websockets',
    multipleStatements: true
});

module.exports = mysqlConnection