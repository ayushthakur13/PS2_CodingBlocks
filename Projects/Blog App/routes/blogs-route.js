const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogs-controller')

router.get('/blogs', blogsController.getBlogs);
router.post('/blogs', blogsController.postBlogs);
router.get('/delete', blogsController.getDelete);
router.get('/update', blogsController.getUpdate);
router.post('/update', blogsController.postUpdate);
router.get('/details', blogsController.getDetails);
router.get('/actors', blogsController.getActors);
router.post('/actors',blogsController.postActors);
router.get('/delete/actor', blogsController.getDeleteActor);

module.exports=router;
