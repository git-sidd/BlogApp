import React from 'react'
import {Box,TextField,Button} from '@mui/material';



const Login = () => {
    const logo="/Images/Logo.png"
  return (
   <Box className="flex flex-col gap-2 justify-center items-center w-[400px] mx-auto shadow-lg p-2 mt-20 md:mt-5">
     <img src={logo} alt="Logo"width={150} height={200} />
     <TextField id="standard-basic" className='w-[60%] ' type='email' label="Email" variant="standard" />
     <TextField id="standard-basic" className='w-[60%] 'type='password' label="Password" variant="standard" />
    <div className='flex flex-col gap-2 mt-2 mb-2 justify-center items-center'>
         <Button variant="contained"className='w-[100%] '>LogIn</Button>
         <div>----------or----------</div>
         <Button variant="outlined" className=''>Dont't have an account?</Button>
         </div>
    
   </Box>
  )
}

export default Login
