import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
  });
  

  const changeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const submitHandler=(e)=>{
      e.preventDefault()
      if(!formData.username || !formData.email || !formData.password){
          toast.error("All fields are necessary!!");
      }
      axios.post("http://localhost:8000/api/v1/signup",formData)
      .then((res)=>{
        console.log(res);
        toast.success(res.data.message||"Registered Successfully!!")
        setFormData({username:"",
          email:"",
          password:"",})
         navigate("/login")
      })
      .catch((error)=>{
        const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Something went wrong!";
      toast.error(errorMessage);
      })



  }


  const logo = "/Images/Logo.png";
  return (
    <div  className="mb-20 my-auto ">
      <form onSubmit={submitHandler}>
    <Box className="flex flex-col gap-2 justify-center items-center w-[400px] mx-auto shadow-2xl p-2 mt-20 md:mt-5">
      <img src={logo} alt="Logo" width={150} height={200} />
      <TextField
        id="standard-basic"
        name="username"
        className="w-[60%] "
        type="text"
        value={formData.username}
        onChange={changeHandler}
        label="UserName"
        variant="standard"
      />
      <TextField
        id="standard-basic"
        name="email"
        className="w-[60%] "
        type="email"
        value={formData.email}
        onChange={changeHandler}
        label="Email"
        variant="standard"
      />
      <TextField
        id="standard-basic"
        name="password"
        className="w-[60%] "
        type="password"
        value={formData.password}
        onChange={changeHandler}
        label="Password"
        variant="standard"
      />
      <div className="flex flex-col gap-2 mt-2 mb-2 justify-center items-center">
        <Button variant="contained" type="submit" onClick={submitHandler} className="w-[100%] ">
          SignUp
        </Button>
        <div>----------or----------</div>
        <Button variant="outlined" className="">
        <Link to={"/login"} > Already have an account?</Link>
        </Button>
      </div>
    </Box>
      </form>
    </div>
  );
};

export default SignUp;
