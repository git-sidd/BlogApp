import { Blog } from "../models/blog-model.js";


export const getBlogs=async(req,res)=>{
   try {
    const blog=await Blog.find();
   
    if(blog.length==0){
        return res.status(401).json({
            success:false,
            message:"No Blogs to Show!!"
        })
    }
    return res.status(200).json({
        success:true,
        message:`Blogs Fetched Successfully!!`
    })
   } catch (error) {
    console.log("error:",error)
    return res.status(500).json({
        success:false,
        message:"Something Wents Wrong!!"
    })
   }
}