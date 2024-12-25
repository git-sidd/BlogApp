import express from "express";
import { connectDB } from "./config/db.js";
import router from "./routes/route.js";

const app=express();

const PORT=8000;


app.use(express.json());


app.use("/api/v1",router)
app.listen(PORT,()=>{
    console.log(`Server Started at Port :http://localhost:${PORT}`)
})
connectDB();