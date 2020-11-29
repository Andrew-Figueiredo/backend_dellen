const db = require('../database/connection');
const auth = require('./AuthController');

const create = async (req,res)=>{
    const credentials = [req.body.email, req.body.password]

    const val  = await auth.auth_seller(credentials[0], credentials[1]);
    if(!val){
        res.status(203).json({"error":"fail auth"});  
    }else{
        
        const sql = 'INSERT INTO product (id_category,name,price,quantity,image_adress,brand,genre,age_range) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)';
        const params = [req.body.id_category,
            req.body.name,
            req.body.price,
            req.body.quantity,
            req.body.image_adress,//link da imagem na interwebs
            req.body.brand,//Marca
            req.body.genre,//Gênero
            req.body.age_range//Faixa etária de idade
        ];
        try{
            const response = await db.query(sql,params);
            res.status(201).json({
                "message":"success"
            });
        }catch(e){
            res.status(500).json(e.detail);
        }
    }

};


module.exports = {
    async get_products(req,res){
        const sql = "SELECT * from product";
        
        try{
            const {rows} = await db.query(sql);
            res.status(201).json({
                "message":"success",
                "data":rows
            });

        }catch(e){
            res.status(500).json(e.detail)
        }
        

    },
    create
}