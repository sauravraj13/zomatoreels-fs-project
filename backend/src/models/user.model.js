const mongoose = require = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{
        type : String,
        required: true
    },
    email:{
        type: String
        required true,
        unique true,
    },
    password:{
        type String,
    }
},
 {
    timeStamp : true
 }
)
const userModel = mongoose.model("user",userSchema);
module.exports = userModel;
