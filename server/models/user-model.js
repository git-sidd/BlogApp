import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
    },
    token:{
        type:String,
    }
},{timestamps:true})

export const User=mongoose.model("User",userSchema)