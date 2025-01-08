import React from 'react'

import Banner from './Banner';
import Categories from './Categories';
import Post from './Post';

const Home = (props) => {
    const {setIsAuthenticated}=props;
  return (
    <div >
      <div className='flex flex-col -space-y-16'>
      <Banner/>
      </div>
   
       <div className='flex md:flex-row flex-col mb-16'>
       <div className='w-[full] md:w-[15%]'><Categories/></div>
       <div className='w-full md:w-[85%] overflow-y-scroll'><Post/></div>
       
       </div>

      
    </div>
  )
}

export default Home
