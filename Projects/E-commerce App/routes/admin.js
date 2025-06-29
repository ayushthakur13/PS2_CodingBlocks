const express = require('express');
const router = express.Router();
// const profileController = require('../controllers/profile')

router.get('/add-product',(req,res)=>{
    res.render('admin/add-product')
});

module.exports = router;
