const db = require('../database/connection');

const auth_client = (email)=>{
    console.log(email)
    var sql = "SELECT id FROM client WHERE (email = ?)";
    db.get(sql,email,(err,result)=>{
        if(!result){
            return false;
        }else{
            return true;
        }
    });
}
const auth_seller = (email)=>{
    console.log(email)
    var sql = "SELECT id FROM client WHERE (email = ?)";
    db.get(sql,email,(err,result)=>{
        if(!result){
            return false;
        }else{
            return true;
        }
    });
}
module.exports = {
    auth_client,
    auth_seller
}
