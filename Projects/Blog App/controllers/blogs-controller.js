const Blogs = require('../models/blogs')
const Actors = require('../models/actors')

module.exports.getBlogs = async (req,res)=>{
    let blogs = await Blogs.find().populate('actor');
    let actors = await Actors.find();
    res.render('blogs',{
        blogs,actors
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
    const blog = await Blogs.findOne({_id:id}).populate('actor');   
    const actors = await Actors.find(); 

    res.render('update-blog',{blog,actors});
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
    const blog = await Blogs.findOne({_id:id}).populate('actor');    

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

module.exports.getUpdateActor = async (req,res)=>{
    const {id} = req.query;
    const actor = await Actors.findOne({_id:id});

    res.render('update-actor',{actor})
}

module.exports.postUpdateActor = async (req,res)=>{
    const { name, imageUrl, age, id} = req.body;
    const actor = await Actors.findOne({_id:id});    

    actor.name = name;
    actor.imageUrl = imageUrl;
    actor.age = age;
    await actor.save();

    res.redirect('/actors');
}
