const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop/product')

router.get('/',shopController.getProducts);
router.get('/products',shopController.getProducts);
router.get('/details',shopController.getDetails);
router.post('/submitreview',shopController.postSubmitReview);
router.get('/addtocart',shopController.getAddToCart);

module.exports = router;
