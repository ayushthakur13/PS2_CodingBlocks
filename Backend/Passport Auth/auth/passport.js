const passport = require('passport');
const User = require('../models/users');

// In this file we will create all the strategies:
// 1. Local
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(
    async (username, password, done)=>{
      try{
        let user = await User.findOne({username: username});
        if(!user) return done(null, false);
        return done(null, user);
      }
      catch(err){
        return done(err);
      }
    }
));

passport.serializeUser((user, done)=>{
  done(null, user.id);
});

passport.deserializeUser(async (id, done)=>{
  try{
    let user = await User.findById(id);
     done(null, user);
  }
  catch(err){
    done(err, false);
  }
});

module.exports = passport;
// 2. Facebook
// 3. Google
