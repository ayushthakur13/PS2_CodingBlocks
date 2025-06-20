const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogsController')

router.get('/blogs', blogsController.getBlogs);
router.post('/blogs', blogsController.postBlogs);
router.get('/delete', blogsController.getDelete);

module.exports=router;
