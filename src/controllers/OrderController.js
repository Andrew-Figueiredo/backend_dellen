const db = require('../database/connection');
const auth = require('./AuthController');

const insert_item = async (id,item)=>{
    const sql = "INSERT INTO line_item (id_sale, id_product, quantity, price) VALUES ($1,$2,$3,$4)";

    const params = [id, item[0], item[1], item[2]]
    try{
        const response = await db.query(sql,params)
        console.log('line item cadastrado')
        return true
    }catch(e){
        console.log(e)
        return false
    }
};

const create_order = async (req,res)=>{
    const credentials = [req.body.email,req.body.password];
    const val = await auth.auth_client(credentials[0],credentials[1]);

    const value = req.body.value//Valor total da compra
    const products = req.products;
    const date = new Date();
    const params = [date.toDateString(),0 , req.body.value]// [date, status, value]

    if(val){
        try{
            const sql = "INSERT INTO sale (date,status,value) VALUES ($1,$2,$3) RETURNING id";
            const response = await db.query(sql,params);
            var id = response.rows[0].id;
            
            console.log(products)

            /*for(item in products){
                
                insert_item(id,item);
            }*/
            res.status(201).json({
                "message":"success"
            });
        }catch(e){
            console.log(e)
            res.status(500).json(e.detail)
        }
    }else{
        res.status(203).json({"error":"fail auth!"});
    }
};
const get_orders = async(req,res)=>{
    const sql = "SELECT * FROM sale";
    const response = await db.query(sql);

    res.status(200).json({
        "data":response.rows
    });
}
module.exports = {
    create_order,
    get_orders
}

