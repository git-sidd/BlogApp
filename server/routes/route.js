import { Router } from "express";
import { loginHandler, signUpHandler } from "../controllers/user-controller.js";
import {auth} from "../middlewares/auth.js"
const router=Router();

router.get("/dashboard",auth ,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Welcome to Dashboard!!"
    })
})
router.post("/signup",signUpHandler);
router.post("/login",loginHandler);


export default router;