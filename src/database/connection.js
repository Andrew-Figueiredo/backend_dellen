/*const sqlite3 = require('sqlite3').verbose();
const DBSOURCE = "dellen.db"

let db = new sqlite3.Database(DBSOURCE,(err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
  });

//db.close()

module.exports = db*/

const {Pool} = require('pg');
const connectionString = 'postgresql://postgres:postgres@localhost:5432/ellen'

const pool = new Pool({
  connectionString,
});

pool.connect((err)=>{
  if(err){
    console.log("ERROR")
  }else{
    console.log("tudo de boas")
  }
});



