const mysql = require('mysql');

// set up database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'foo',
    password: 'bar',
    database: 'sw',
    insecureAuth: true

});

connection.connect(err => {
    if (err) throw err;
});

module.exports = connection;