const jwt = require('jsonwebtoken');

const tokenOperations = {
    generateToken(emailid){
        var token = jwt.sign({email:emailid}, "potus111",{ expiresIn: '1h' });
        return token;
    },
    verifyToken(token){
        var decoded = jwt.verify(token,"potus111");
        console.log('Decode is ',decoded.email);
        return decoded;
    }

}
module.exports = tokenOperations;