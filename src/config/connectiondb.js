const mysql = require('mysql');

//funciona porque el servidor esta conectado con anterioridad a dotenv que esta configurado
//y ligado a la carpeta ./env/.env

const connection = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com/hem/',
    password: '44bbe039',
    user: 'b74959fd67a0b2',
    database: 'heroku_de58209aa376fbb'
});
//mysql://b74959fd67a0b2:44bbe039@us-cdbr-east-04.cleardb.com/hem/heroku_de58209aa376fbb?reconnect=true

//probar el modulo:

connection.connect((err) => {
    if(err){
        console.log("El error de conexion a BD es: " + err)
        // return res.redirect('./500.ejs');
    }
    console.log("Conectado exitosamente a BD");
})

module.exports = connection;
