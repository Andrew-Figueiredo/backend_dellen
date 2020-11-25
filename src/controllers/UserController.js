const db = require('../database/connection');

module.exports = {
    async get_clients(req,res){
        var sql = "SELECT * from client";
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
    async get_sellers(req,res){
        var sql = "SELECT * from seller";
        var params = [];
        await db.all(sql,params,(err,rows)=>{
            if(err){
                res.status(500).json({"error":err.message})
                return;
            }else{
                res.json({
                    "message":"success",
                    "data":rows
                });
            }
        });
    },
    async create_user(req,res){
        var sql = "INSERT INTO seller (name, email, password) VALUES (?,?,?)";
        var params = [req.body.name, req.body.email,req.body.password];

        if(req.body.whatsapp){
            sql = "INSERT INTO client (name, email, password, whatsapp) VALUES (?,?,?,?)";
            params = [req.body.name, req.body.email, req.body.password,req.body.whatsapp];
        }
        
        await db.run(sql,params,(err,result)=>{
            console.log(result)
            if(err){
                res.status(500).json({"error":err.message});
            }else{
                res.json({
                    "message":"success",
                });
            }
            
        });
    },
    async update_user(req,res){
        var sql = "UPDATE seller SET name = ?, password = ? WHERE (email = ?)";
        var params = [req.body.name, req.body.password, req.body.email];

        if(req.body.whatsapp){
            sql = "UPDATE client SET name = ?, password = ?, whatsapp = ? WHERE (email = ?)";
            params = [req.body.name, req.body.password, req.body.whatsapp,req.body.email];
        }
        await db.run(sql,params,(err)=>{
            if(err){
                res.status(500).json({"error":err.message});
            }else{
                res.json({
                    "message":"success",
                });
            }
        });
    }
}