const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login')
const myPassport = require('../auth/passport');

router.get('/',loginController.getLogin);
// router.post('/',loginController.postLogin);
router.post('/',
    myPassport.authenticate('local', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/profile');
    }
)

router.get('/facebook',
    myPassport.authenticate('facebook')
)

router.get('/auth/facebook/callback',
    myPassport.authenticate('facebook', { failureRedirect: '/login' }),
    (req,res)=>{
        res.redirect('/profile');
    }
);

router.get('/google',
    myPassport.authenticate('google', {scope: ['profile']})
)

router.get('/auth/google/callback',
    myPassport.authenticate('google', { failureRedirect: '/login' }),
    (req,res)=>{
        res.redirect('/profile');
    }
);

module.exports = router;
