const db = require('./connection');


db.run(`CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name text, 
    email text UNIQUE, 
    password text, 
    CONSTRAINT email_unique UNIQUE (email)
    )`,(err) => {
    if(err){
        //Table already created
        console.log('table already created.')
    }else{
        //seeds 
        console.log('create seeds...')
        var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
        db.run(insert,['user_test','test@test.com','test321'])
    }
    }
);
//Create table category
db.run(`CREATE TABLE category (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name text UNIQUE,
    CONSTRAINT email_unique UNIQUE (name)
    )`,(err) => {
    if(err){
        //Table already created
        console.log('table already created.')
    }else{
        //seeds 
        console.log('create seeds...')
        var insert = 'INSERT INTO category (name) VALUES (?)'
        db.run(insert,['Sapatos'])
        db.run(insert,['Camisas'])
    }
    }
);
