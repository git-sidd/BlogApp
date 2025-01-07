import { Router } from "express";
import { loginHandler, signUpHandler } from "../controllers/user-controller.js";
import { localFileUpload,imageUpload,createPost } from "../controllers/fileUpload.js";

import {auth} from "../middlewares/auth.js"
import { getBlogs } from "../controllers/crud.js";
const router=Router();

router.get("/dashboard",auth ,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Welcome to Dashboard!!"
    })
})
router.post("/signup",signUpHandler);
router.post("/login",loginHandler);
router.post("/localfileupload",localFileUpload)
router.post("/imageupload",imageUpload)
router.post("/createpost",auth,createPost)
router.get("/getblog",getBlogs)


export default router;