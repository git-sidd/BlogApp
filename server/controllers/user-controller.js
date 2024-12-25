import {User} from "../models/user-model.js"
import bcrypt from "bcrypt";

export const signUpHandler=async(req,res)=>{
   try {
   const {username,email,password}=req.body;

   const existedUser=await User.findOne({email});

   if(existedUser){
    return res.status(401).json({
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