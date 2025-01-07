import express from "express";
import { connectDB } from "./config/db.js";
import router from "./routes/route.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { cloudinaryConnect } from "./config/cloudinary.js";

const app=express();

const PORT=8000;
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, // Allow cookies to be sent
  };
  
  app.use(cors(corsOptions));

cloudinaryConnect();
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


app.use("/api/v1",router)
app.listen(PORT,()=>{
    console.log(`Server Started at Port :http://localhost:${PORT}`)
})
connectDB();