const Products = require('../../models/products');

module.exports.getProducts = async (req,res,next)=>{
    try{
        let products = await Products.find({});
        res.render('shop/products',{
            products
        });
    }
    catch(e){
        next(e);
    }
}

