import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {

  const [formData,setFormData]=useState({
    email:"",
    password:""
  })
  const changeHandler=(event)=>{
    setFormData((prevState)=>({
      ...prevState,
      [event.target.name]:event.target.value

    }))
  }
  const submitHandler=(e)=>{
   
    axios.post("http://localhost:8000/api/v1/login",formData)
    .then((res)=>{
     
      toast.success(res.data.message||"User Logged in successfully!!")
      setFormData({
        email:"",
        password:""
      })
    })
    .catch((error)=>{
      toast.error( error.response.data.message || "Something Went Wrong try later")
    })

  }
  const logo = "/Images/Logo.png";
  return (
   <form onSubmit={submitHandler}>
     <Box className="flex flex-col gap-2 justify-center items-center w-[400px] mx-auto shadow-lg p-2 mt-20 md:mt-5">
      <img src={logo} alt="Logo" width={150} height={200} />
      <TextField
        id="standard-basic"
        className="w-[60%] "
        type="email"
        label="Email"
        variant="standard"
        name="email"
        value={formData.email}
        onChange={changeHandler}
       
      />
      <TextField
        id="standard-basic"
        className="w-[60%] "
        type="password"
        label="Password"
        variant="standard"
        name="password"
        value={formData.password}
        onChange={changeHandler}

      />
      <div className="flex flex-col gap-2 mt-2 mb-2 justify-center items-center">
        <Button variant="contained" className="w-[100%] " onClick={submitHandler}>
          LogIn
        </Button>
        <div>----------or----------</div>
        <Button variant="outlined" className="">
          Dont't have an account?
        </Button>
      </div>
    </Box>
   </form>
  );
};

export default Login;
