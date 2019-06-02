const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.url,()=>{
    console.log('DB Connected');
});

module.exports = mongoose;