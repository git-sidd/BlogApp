import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
})

export const connectDB=()=>{
    const mongoDBURI=process.env.MONGODBURI;

    mongoose.connect(mongoDBURI)
    .then(()=>{
        console.log("MongoDB Connected Successfully!!");
    })
    .catch(()=>{
        console.error("MongoDB Connection Failed!!")
    })
}