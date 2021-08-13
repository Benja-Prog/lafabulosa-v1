const mysql = require('mysql');

//funciona porque el servidor esta conectado con anterioridad a dotenv que esta configurado
//y ligado a la carpeta ./env/.env

const connection = {
    host: 'us-cdbr-east-04.cleardb.com',
    password: '44bbe039',
    user: 'b74959fd67a0b2',
    database: 'heroku_de58209aa376fbb'
};

// Probar modulo

function handleDisconnect(connection){
    connection = mysql.createPool(connection);

    connection.getConnection(function(err){
        if(err){
            console.log('error al conectarse a db: ', err);
            setTimeout(handleDisconnect, 2000);
        }
    });

    connection.on('error', function(err){
        console.log('DB Error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            handleDisconnect();
        }else{
            throw err;
        }
    });
}
handleDisconnect(connection);

module.exports = connection;