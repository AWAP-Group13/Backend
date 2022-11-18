const mongoose= require("mongoose");
const { stringify } = require("querystring");

const UserInformationSchema=new mongoose.schema(
    {
        fname: string,
        lname: string,
        email: string,
        password: string,
    },

    {
        collection:"UserInfo"
    }
);

mongoose.model("UserInfo",UserInformationSchema);