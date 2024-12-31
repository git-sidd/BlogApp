import React from 'react'


const Banner = () => {
    const banner="/Images/banner.jpg"
  return (
    <div>
      <img src={banner} alt="siddblogs" className='w-full md:object-cover md:h-[80vh]' />
    </div>
  )
}

export default Banner
