const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    title:{
        type:String,
    },
    content:{
        type:String,
    },
    author:{
        type:String,
    },
    date:{
        type:String,
    }
})

const users = mongoose.model("users",userSchema)

module.exports= users