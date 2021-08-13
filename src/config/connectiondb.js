const mysql = require('mysql');

//funciona porque el servidor esta conectado con anterioridad a dotenv que esta configurado
//y ligado a la carpeta ./env/.env

const connection = mysql.createConnection({
    host: 'mysql-fabulosa-v1.alwaysdata.net',
    password: '',
    user: '240972',
    database: 'fabulosa-v1_emisora_web'
});

//probar el modulo:

connection.connect((err) => {
    if(err){
        console.log("El error de conexion a BD es: " + err)
        // return res.redirect('./500.ejs');
    }
    console.log("Conectado exitosamente a BD");
})

module.exports = connection;
