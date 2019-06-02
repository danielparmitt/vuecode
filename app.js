const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const cookiesession = require('cookie-session');
app.use(express.static("public"));
const googleSetup = require('./utils/googlepassport');
const passport = require('passport');
app.use(bodyparser.urlencoded({ extended:false }));
app.use(bodyparser.json());


app.use(cookiesession({
    maxAge:24*60*60,
    keys:['thisispotus111']
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/',require('./routes/userRoute'));


app.listen(process.env.PORT || 1234,(err)=>{
    if(err){
        console.log('ERORR IS ',err);
    }
    else{
        console.log('server connected');
    }
});
