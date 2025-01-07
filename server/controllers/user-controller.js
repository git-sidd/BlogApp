import {User} from "../models/user-model.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
})

export const signUpHandler=async(req,res)=>{
   try {
   const {username,email,password}=req.body;


   const existedUser=await User.findOne({email});
   const usernameExisted=await User.findOne({username})

   if(usernameExisted){
    return res.status(401).json({
        success:false,
        message:"Username Already Taken!"
    })
   }

   if(existedUser){
    return res.status(400).json({
        success:false,
        message:"User Already Exists!!"
    })
}
   
    let hashPassword;
    try {
     hashPassword=await bcrypt.hash(password,10);
    

    } catch (error) {
        console.error("Error in Hashing Password!!")
        return res.status(500).json({
            success:false,
            
        })
    }

    const response=await User.create({
        username,password:hashPassword,email
    })
    return res.status(200).json({
        success:true,
        message:"User Registered Successfully!!",
        response:response

    })

   }catch (error) {
    console.error(error);
    return res.status(500).json({
        success:false,
        message:"Error While Registering User!!!"
    })
   }
}

export const loginHandler=async(req,res)=>{
    try {
        const {email,password}=req.body;


        if(!email||!password){
            return res.status(401).json({
                success:false,
                message:"Both Fields are Necessary!!"
            })
        }


        const registeredUser=await User.findOne({email});
        if(!registeredUser){
            return res.status(402).json({
                success:false,
                message:"User Not Registered,Please SignUp!!"
            })
        }


        const payload={
            email:registeredUser.email,
            password:registeredUser.password,
            username:registeredUser.username,
            _id:registeredUser._id
        };

        if(await bcrypt.compare(password,registeredUser.password)){
            let token=jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {
                    expiresIn:"2h",
                }
            )
            registeredUser.token=token;
            registeredUser.password=undefined;
            const options={
                httpOnly: true,
                secure: process.env.NODE_ENV === "production", // Set `true` for production
                sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                registeredUser,
                message:"User Logged In Successfully!!",
            })
        }else{
            return res.status(403).json({
                success:false,
                message:"Password Incorrect!"
            })
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error,Please try later..!!"
        })
    }
}