const db = require('./connection');

var user = `CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name text, 
    email text UNIQUE, 
    password text, 
    CONSTRAINT email_unique UNIQUE (email)
    )`

var category = `CREATE TABLE category (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name text UNIQUE,
    CONSTRAINT name_unique UNIQUE (name)
    )`

    //FOREIGN KEY (id_category) REFERENCES category (id)
var product = `CREATE TABLE product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_category INTEGER,
    name TEXT,
    price REAL,
    quantity INTEGER,
    image_adress TEXT,
    CONSTRAINT name_unique UNIQUE (name)
    FOREIGN KEY (id_category) REFERENCES category (id)
    )`

db.run(user,(err) => {
    if(err){
        //Table already created
        console.log('table user already created.')
    }else{
        //seeds 
        console.log('create seeds of user...')
        var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
        db.run(insert,['user_test','test@test.com','test321'])
    }
    }
);
//Create table category
db.run(category,(err) => {
    if(err){
        //Table already created
        console.log('table category already created.')
    }else{
        //seeds 
        console.log('create seeds of category...')
        var insert = 'INSERT INTO category (name) VALUES (?)'
        db.run(insert,['Sapatos'])
        db.run(insert,['Camisas'])
    }
    }
);
//Create table category
db.run(product,(err) => {
    if(err){
        //Table already created
        console.log('table product already created.')
    }else{
        //seeds 
        console.log('create seeds of product...')
        var insert = 'INSERT INTO product (id_category,name,price,quantity,image_adress) VALUES (?,?,?,?,?)'
        var image_adress = 'https://images.lojanike.com.br/500x500/produto/259100_2218363_20200616134949.jpg'
        db.run(insert,['1','Tênis Nike',200,20,image_adress])
    }
    }
);
