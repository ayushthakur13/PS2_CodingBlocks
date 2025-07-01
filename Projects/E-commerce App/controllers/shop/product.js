const Products = require('../../models/products');
const Review = require('../../models/reviews');

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

module.exports.getDetails = async (req,res,next)=>{
    const {id} = req.query;
    try{
        let product = await Products.findOne({_id:id}).populate('reviews');
        res.render('shop/product-details',{product});
    }
    catch(e){
        next(e);
    }
}


module.exports.postSubmitReview = async (req,res,next)=>{
    const {title, desc, prodID} = req.body;
    try{
        let review = await Review.create({title, desc});
        let product = await Products.findOne({_id: prodID});
        product.reviews.unshift(review._id);
        await product.save();

        product = await Products.findOne({_id: prodID}).populate('reviews');
        res.send({
            reviews: product.reviews
        });
    }
    catch(e){
        next(e);
    }
}

