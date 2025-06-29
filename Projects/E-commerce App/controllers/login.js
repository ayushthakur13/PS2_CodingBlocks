const Users = require('../models/users');
const bcrypt = require('bcrypt');
const myPassport = require('../auth/passport');

module.exports.getLogin = (req,res)=>{
    if(req.user){
        return res.redirect('/profile');
    }

    res.render('login',{
        msg: req.flash('msg')
    })
}

// module.exports.postLogin = 
