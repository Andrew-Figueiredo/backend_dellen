const db = require('../database/connection')

const create = async (req,res)=>{
    var insert = 'INSERT INTO product (id_category,name,price,quantity,image_adress) VALUES (?,?,?,?,?)';
    params = [req.body.id_category,req.body.name,req.body.price,req.body.quantity,req.body.image_adress];

    db.run(insert,params,(err)=>{
        if(err){
            res.status(500).json(err.message);
        }else{
            res.json({
                "message":"success",
            });
        }
    });
}
module.exports = {
    async get_products(req,res){
        var sql = "SELECT * from product";
        var params = []
        await db.all(sql,params,(err,rows)=>{
            if(err){
                res.status(500).json({"message":err.message})
            }else{
                res.json({
                    "message":"success",
                    "data":rows
                });
            }
        });
    },
    create
}