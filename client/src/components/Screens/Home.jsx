import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner';
import Categories from './Categories';
import Post from './Post';

const Home = (props) => {
    const {setIsAuthenticated}=props;
  return (
    <div>
    <div className='flex flex-col -space-y-11'>
        <Navbar setIsAuthenticated={setIsAuthenticated} />
        <Banner/>
     </div>
       <div className='flex md:flex-row flex-col '>
       <div className='w-full md:w-[15%]'><Categories/></div>
       <div className='w-full md:w-[85%]'><Post/></div>
       
       </div>

     
    </div>
  )
}

export default Home
