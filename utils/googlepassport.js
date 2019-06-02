const GoogleStrategy = require('passport-google-oauth2');
const passport = require('passport');
const connection = require('../db/connection');
const User = require('../db/models/userschema');


passport.serializeUser((user,done)=>{
    var error =null;
    done(error,user);
});


passport.deserializeUser((userobj, done)=>{
    console.log('User Session id is ',userobj);
    // User.findById(userobj.googleId).then(newUser=>{
    //     done(null,userobj);
    // });
});

passport.use(new GoogleStrategy({
    callbackURL: '/dashboard',
    clientID:'',
    clientSecret:''
},(accessToken, refreshToken, profile, done )=>{
    console.log('callback Google... ',profile,'token -->',accessToken );
    const jwt = require('../utils/token');
    
    User.findOne({googleId:profile.id}).then(currentuser=>{
        if(currentuser){
            const token = jwt.generateToken(currentuser.email);
            console.log("jwt token is ",token);
            currentuser.jwtid = token;
            console.log('user exist');
            done(null,currentuser);
        }
        else{

            var userObject = new User ({
                googleId:profile.id,
                username:profile._json.name,
                picture:profile._json.picture,
                email:profile._json.email
            }); 

            userObject.save().then(newuser=>{
                const token = jwt.generateToken(newuser.email);
                console.log("jwt token is ",token);
                newuser.jwtid = token;
                console.log("New user Added");
                done(null,newuser);
            });       
        }
    })
}));
