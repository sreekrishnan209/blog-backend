

// register logic

const users = require("../Models/userSchema");

exports.register=async(req,res)=>{
    console.log("Inside register function");
    try{
        const {username,email,password}=req.body
        console.log(`${username} ${email} ${password}`);
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(402).json("User already exists")
        }
        else{
            const newUser = new users({
                username,email,password,title:"",content:"",author:"",date:""
            })
            await newUser.save()
            res.status(200).json("User created successfully")
        }

    }
    catch(err){
        res.status(500).json("server error")
    }
}


exports.login = async(req,res)=>{
    const {email,password}=req.body

    try{
        const user = await users.findOne({email,password})
        if(user){
            res.status(200).json("Login successfull...")
        }
        else{
            res.status(402).json("Invalid user")
        }
    }
    catch(err){
        res.status(500).json("server error")
    }
}





