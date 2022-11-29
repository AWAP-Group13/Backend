const mongoose= require("mongoose");
const UserInformationDetails = new mongoose.Schema(
    {  fname: String,
        lname:String,
        email:{type:String,unique:true},
        password:String,
    }
        
   
);
const User = mongoose.model("userInfo",UserInformationDetails);

module.exports = User


