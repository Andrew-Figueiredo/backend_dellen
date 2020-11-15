const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "dellen.db"

let db = new sqlite3.Database(DBSOURCE,(err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
  });

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

//db.close()

module.exports = db