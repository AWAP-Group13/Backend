
const express = require("express");
const app= express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());



const mongourl="mongodb+srv://kweche:kweche2020@cluster0.mll8dqz.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongourl,{
    useNewurlParser:true
})

.then(()=>{console.log("connected to the database");
})
.catch(e=>console.log(error));


app.listen(5000, ()=> {
    console.log("Server is up and running");
})

require("./UserInformation")
const User=mongoose.model("UserInfo");

app.post("/post", async(req, res)=>{
    const{fname, lname,email,password}=req.body;
    try {
        await User.create(
            {
                fname,
                lname,
                email,
                password,
            }
        );
        res.send({status: "Ok"})
    }
        catch(error){}
        res.send({status:"Error"});
 
    });

    app.listen(3000, ()=> {
        console.log("Server is up and running");
    });
    