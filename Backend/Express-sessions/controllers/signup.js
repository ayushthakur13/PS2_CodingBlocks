const Users = require('../models/users');
const bcrypt = require('bcrypt');
let saltRounds = 10;

module.exports.getSignup = (req,res)=>{
    res.render('signup',{
        msg: req.flash('msg')
    });
}

module.exports.postSignup = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const existingUser = await Users.findOne({ username });

        if (existingUser) {
            req.flash('msg', 'User already exists');
            return res.redirect('/signup');
        }

        const hash = await bcrypt.hash(password, saltRounds);
        await Users.create({ username, password: hash });

        req.session.username = username;
        req.flash('msg', 'Signup successful');
        return res.redirect('/login');
    } 
    catch (err) {
        next(err);
    }
};
