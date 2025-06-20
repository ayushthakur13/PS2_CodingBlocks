const Blogs = require('../models/blogs')

module.exports.getBlogs = async (req,res)=>{
    let blogs = await Blogs.find();
    res.render('blogs',{
        blogs
    });
}

module.exports.postBlogs = async (req,res)=>{
    const { title, actor, description } = req.body;
    await Blogs.create({title,actor,description});

    res.redirect('/blogs');
}

module.exports.getDelete = async (req,res)=>{
    const {id} = req.query;
    await Blogs.deleteOne({_id:id}); 

    res.redirect('/blogs');
}
