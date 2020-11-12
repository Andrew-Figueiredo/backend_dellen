const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234' , // Falta colocar a senha, Erro por causa disso
    database: 'banco_dellen' 
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('DB conexão bem sucedida.');
    else
    console.log('DB conexão falhou. \n Error: ' + JSON.stringify(err, undefined, 2))
});  