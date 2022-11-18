const mongoose =require("mongoose");

const userInformationSchema=new mongoose.schema(
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

mongoose.model("UserInfo",userInformationSchema);