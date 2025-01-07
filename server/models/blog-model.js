import mongoose from "mongoose";

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
       
        
    },
    description:{
        type:String,
    },
    category:{
        type:String
    },
    picture:{
        type:String
    },
},{timestamps:true})


export const Blog=mongoose.model("Blog",blogSchema);