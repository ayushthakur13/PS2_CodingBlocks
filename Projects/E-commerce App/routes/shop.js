const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop/product')

router.get('/',shopController.getProducts);
router.get('/products',shopController.getProducts);

module.exports = router;
