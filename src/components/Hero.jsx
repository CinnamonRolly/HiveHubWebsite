import React from 'react'
import pic from '../assets/Discord.png'

const Hero = () => {
  return (
    <div className='text-white '>
      <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className=' text-transparent mt-24 bg-clip-text py-1 px-3 font-bold bg-gradient-to-r from-[#eec33d] to-[#ea9d3e] text-3xl'>Hive Hub</h1>
        <p className='font-semibold mt-2'>Join HiveHub Elite, the hive where crypto enthusiasts thrive! 🚀🍯 </p>
        <div className='items-center w-[125px] mx-auto h-[45px] mt-3 text-[14px] justify-center flex px-4 py-2 bg-gradient-to-r from-[#eec33d] to-[#ea9d3e] text-[#151515] font-bold rounded-full'>
          <a href="/" >
            Join Now
          </a>
        </div>
      <img src={pic} alt="discordpic" className='w-[550px] mt-[-65px] mx-auto'/>
      </div>
    </div>
  )
}

export default Hero
