import path from 'path';
import { fileURLToPath } from 'url';
import { v2 as cloudinary } from 'cloudinary';
import { Blog } from '../models/blog-model.js';
import { User } from '../models/user-model.js';



let __filename = fileURLToPath(import.meta.url);

// Extract the directory name from the file path
const __dirname = path.dirname(__filename);

export const localFileUpload=async(req,res)=>{
    try {
    const file=await req.files.file;
    console.log("file:",file)
    const path=__dirname+"/files/"+Date.now()+"."+file.name.split(".")[1];
    console.log("path",path);

    file.mv(path,(err)=>{
        console.log("err:",err)
    })
    return res.status(200).json({
        success:true,
        message:"File Uploaded Successfull"
    })
        
    } catch (error) {
        console.log("Error in uploading file!!=",error)
    }
}
function checkFileType(filetype,supportedType){
    return supportedType.includes(filetype);
}
async function uploadToCloudinary(file,folder) {
    const options={folder};
    console.log("tempFilePath:",file.tempFilePath)
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

export const imageUpload=async(req,res)=>{
    try {
        const file=req.files.file;
        console.log("file:",file);
        const supportedType=["jpg","jpeg","png","webp"];
       
        const filetype=file.name.split(".")[1].toLowerCase();
        console.log("FileType:",filetype);
    
        if(!checkFileType(filetype,supportedType)){
            return res.status(401).json({
                success:false,
                message:"File Type Not Supported"
            })
        }
        
        const response=await uploadToCloudinary(file,"siddhesh");
        console.log("response:",response);

        return res.status(200).json({
            success:true,
            message:"Image Uploded Successfully!!",
            url:response.secure_url
        })
    } catch (error) {
        
    }
}


export const createPost=async(req,res)=>{
    try {
        const {title,description,category,picture}=req.body;
        const {_id} = req.user;

        // const user=await User.findOne({username}).populate("blogs");
        // if(!user){
        //     return res.status(401).json({
        //         success:false,
        //         message:"User Not Found"
        //     })
        // }

    if(!title  || !description ||!category ||!picture ){
        return res.status(401).json({
            success:false,
            message:"Every Field is Necessary!"
        })
    }
  


    const createdBlog=await Blog.create({
        title,user:_id,category,description,picture
    })
   
    await User.findByIdAndUpdate({_id},{
        $set:{blogs:createdBlog._id},
        
    },{new:true})

    return res.status(200).json({
        success:true,
        message:"Post Created SuccessFully!!"
    })
    } catch (error) {
        console.error(error);
        
        return res.status(500).json({
            success:false,
            message:"Failed to create post!!"
        })
    }



}