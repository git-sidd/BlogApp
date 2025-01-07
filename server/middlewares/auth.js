import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
})
export const auth=(req,res,next)=>{
    try{
        
        const token=req.cookies.token;
        
        
        if(!token){
            return res.status(400).json({
                success:false,
                message:"Token IS Missing!!"
            })
        }

        //verifying token

        try {
            const decode=jwt.verify(token,process.env.JWT_SECRET);
            req.user=decode;
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:"Token Is Invalid"
            })
        }
        next();
    }
    catch(error){
        
        return res.status(500).json({
            success:false,
            message:"Something Wents Wrong!!",
            
        })
    }
}