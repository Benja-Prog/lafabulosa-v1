const mysql = require('mysql');

//funciona porque el servidor esta conectado con anterioridad a dotenv que esta configurado
//y ligado a la carpeta ./env/.env

const conexion_db = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database:  process.env.DB_DATABASE,
}

// Probar modulo

function handleDisconnect(conexion_db){
    connection = mysql.createPool(conexion_db);

    connection.getConnection(function(err){
        if(err){
            console.log('error al conectarse a db: ', err);
            setTimeout(handleDisconnect, 2000);
        }
    });

    connection.on('error', function(err){
        console.log('db Error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            handleDisconnect();
        }else{
            throw err;
        }
    });
}
handleDisconnect(conexion_db);

module.exports = connection;