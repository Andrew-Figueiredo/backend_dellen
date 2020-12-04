const {Pool} = require('pg');
const connectionString = 'postgresql://postgres:4dfa2P18@172.23.121.120:5432/ellen'

const pool = new Pool({
  connectionString,
});

pool.connect((err)=>{
  if(err){
    console.log(err)
  }else{
    console.log("BD CONECTADO COM SUCESSO!")
  }
});

module.exports = {
  query: (text,params) => pool.query(text,params),
};



