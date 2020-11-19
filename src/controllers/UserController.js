const db = require('../database/connection');

module.exports = {
    async index(req,res){
        var sql = "SELECT * from user";
        var params = [];
        await db.all(sql,params,(err,rows)=>{
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
    },
    async create(req,res){
        var sql = "INSERT INTO user (name, email, password) VALUES (?,?,?)";
        params = [req.body.name, req.body.email, req.body.password];

        await db.run(sql,params,(err,result)=>{
            if(err){
                res.status(400).json({"error":err.message});
            }else{
                res.json({
                    "message":"success",
                    "data":params,
                    "id":this.lastID
                });
            }
            
        });
    }
}