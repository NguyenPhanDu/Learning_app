const mongoose = require('mongoose');
require('dotenv').config();

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://duphan:du0169460307@learn-mern.w5yyj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connect successfully")
    }
    catch(error){
        console.log("connect failed")
    }
}

module.exports = {connect}