import React from 'react'
import Navbar from './Screens/Navbar'
import {AddCircle} from "@mui/icons-material"

const CreatePost = ({setIsAuthenticated}) => {
  const bannerimg="/Images/createblog.jpeg"
  return (
    <div>
       <div className='flex flex-col -space-y-11'>
        <Navbar setIsAuthenticated={setIsAuthenticated} />
        <div className=' px-14'>
            <img src={bannerimg} alt="blogImage" className='w-full md:object-cover  md:h-[70vh]  '  />
            <div>
            <label htmlFor='fileInput'>
                 <AddCircle fontSize='large' className=''/>

            </label>
            <input type="file" id='fileInput' className='hidden' />
            </div>
        </div>
        
     </div>
    </div>
  )
}

export default CreatePost
