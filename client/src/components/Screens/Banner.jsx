import React from 'react'


const Banner = () => {
    const banner="/Images/banner.jpg"
  return (
    <div className='px-4'>
      <img src={banner} alt="siddblogs" className='w-full md:object-cover mb-4 md:h-[80vh]' />
    </div>
  )
}

export default Banner
