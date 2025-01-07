import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
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
    },
    token:{
        type:String,
    },
    blogs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Blog",
        }
    ]
},{timestamps:true})

export const User=mongoose.model("User",userSchema)