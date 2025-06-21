const Blogs = require('../models/blogs')
const Actors = require('../models/actors')

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

module.exports.getUpdate = async (req,res)=>{
    const {id} = req.query;
    const blog = await Blogs.findOne({_id:id});    

    res.render('update-blog',{blog});
}

module.exports.postUpdate = async (req,res)=>{
    const { title, actor, description, id} = req.body;
    const blog = await Blogs.findOne({_id:id});    

    blog.title = title;
    blog.actor = actor;
    blog.description = description;
    await blog.save();

    res.redirect('/blogs');
}

module.exports.getDetails = async (req,res)=>{
    const {id} = req.query;
    const blog = await Blogs.findOne({_id:id});    

    res.render('blog-details',{blog});
}

module.exports.getActors = async (req,res)=>{
    let act = await Actors.find();
    res.render('actors',{act});
}

module.exports.postActors = async (req,res)=>{
    const { name, imageUrl, age } = req.body;
    await Actors.create({name,imageUrl,age});

    res.redirect('/actors');
}

module.exports.getDeleteActor = async (req,res)=>{
    const {id} = req.query;
    await Actors.deleteOne({_id:id}); 

    res.redirect('/actors');
}

module.exports.getUpdate = async (req,res)=>{
    const {id} = req.query;
    const blog = await Blogs.findOne({_id:id});    

    res.render('update-blog',{blog});
}

module.exports.postUpdate = async (req,res)=>{
    const { title, actor, description, id} = req.body;
    const blog = await Blogs.findOne({_id:id});    

    blog.title = title;
    blog.actor = actor;
    blog.description = description;
    await blog.save();

    res.redirect('/blogs');
}