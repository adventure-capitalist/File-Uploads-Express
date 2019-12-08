const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // address of the server
user :  'root', // username
password :  'root',
database :  'movie_db',
});
module.exports = connection;