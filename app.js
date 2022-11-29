
const express = require("express");
const app= express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const JWT_SECRET="kdekurevgftojtdh1995kgfdeeeesxayywrsvcvxg";



//Connection to mongodb
const mongourl="mongodb+srv://kweche:kweche2020@cluster0.mll8dqz.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongourl,{
    useNewurlParser:true,
})

.then(()=>{console.log("connected to the database");
})
.catch(e=>console.log(e));


const User=require("./userInformation");
app.post("/register", async(req, res)=>{
   const {fname, lname,email,password}=req.body.data;
    
    const encryptedPassword = await bcrypt.hash(password,10)
    try {

        User.findOne({email},async function(err,result){
            if (err) throw err;
         if(!result)
         {
            var user = new User( {
                fname,
                lname,
                email,
                password:encryptedPassword,
            })
           
            console.log(user)
            
               
                try{ await user.save()
                    return  res.json({ status:"Success"});
            }catch(error){
               return res.json({ status:"error"});
            }
           
         }
         else{
            return res.json({status:"User exists already"});
         }

        });
     
    } catch(error){
        res.send({ status:"Error"});
    }
    });

    //Login API
    app.post("/login-user",async(req,res)=>{
        const {email, password} = req.body;
        //Checking if a user exists
        console.log(req.body)
        const user= await User.findOne({email});
        if (!user){
            return res.json({error:"User is not found"});
         }

         //Decrypting the password
         if(await bcrypt.compare(password,user.password)){
            const token=jwt.sign({email:user.email},JWT_SECRET);

            if (res.status(201)){
                return res.json({status:"Success",data: token});
            } else {
                return res.json({error:"error"});
            }
         }
         res.json({status:"error", error:"Incorrect password"});
    });


    //An API for to display user data after successful login.

    app.post("/userData", async (req, res)=>{
        const{token}=req.body;
        try {
            const user=jwt.verify(token,JWT_SECRET)
            const userEmail=user.email;
            user.findOne({email:userEmail}).then((data)=>{
                res.send({status:"ok", data:data});
        })
        .catch((error)=> {
            res.send({status:"error", data:error});
        });

        } catch (error){}

    });


    //Testing if the server is up and running
    app.listen(5000, ()=> {
        console.log("Server is up and running");
        
    });
