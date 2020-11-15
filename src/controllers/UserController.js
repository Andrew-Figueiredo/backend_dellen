const db = require('../database/conection');


module.exports = {
    async index(req,res){
        var sql = "SELECT * from user";
        var params = [];
        db.all(sql,params,(err,rows)=>{
            if(err){
                res.status(400).json({"error":err.message})
                return;
            }else{
                res.json({
                    "message":"success",
                    "data":rows
                });
            }
        });
    }
}