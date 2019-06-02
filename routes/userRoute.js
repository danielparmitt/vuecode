const express = require('express');
const passport = require('passport');
const routes = express.Router();
const jwt = require('../utils/token');


routes.get('/google',passport.authenticate('google',{
    scope:['profile','email']
}));

routes.get('/dashboard',passport.authenticate('google'),(req,res)=>{
    const decode = jwt.verifyToken(req.user.jwtid);
    console.log(decode);
    if(decode.email == req.user.email){
        res.status(200).send("welcome  "+req.user.username);
    }
    else{
        res.status(200).send("Invalid UserId password");
    }
    
})

module.exports = routes;