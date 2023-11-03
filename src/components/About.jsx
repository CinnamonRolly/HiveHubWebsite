import React from 'react'

const About = () => {
  return (
    <div className='bg-[#151515] text-white py-24 px-4 w-full' id='about'>
      <div className='max-w-[800px] mx-auto'>
        <h1 className='text-transparent bg-clip-text py-1 px-3 font-bold bg-gradient-to-r from-[#eec33d] to-[#ea9d3e] text-4xl'>About us</h1>
        <p className='font-semibold mt-2'>Overview of HiveHub's mission and values:</p>

        <div className='p-5 mt-[20px] rounded-lg bg-gradient-to-r from-[#121212] to-[#333333]'>
          <p className='font-semibold mt-2'>"At HiveHub, our mission is to empower individuals in their financial journey, no matter where they are starting from. We believe that everyone deserves the opportunity to thrive financially, and we're here to make that happen. Our values are rooted in inclusivity, knowledge-sharing, and a commitment to helping you reach your goals."</p>
        </div>

        <p className='font-semibold mt-[20px]'>Information about your team and their expertise: </p>

        <div className='p-5 mt-[20px] rounded-lg bg-gradient-to-r from-[#121212] to-[#333333]'>
          <p className='font-semibold mt-2'>"Our team consists of experienced professionals who are passionate about finance, crypto, and trading. With a combined wealth of knowledge, we are dedicated to providing you with the tools and guidance needed to succeed. Meet the faces behind HiveHub and see how our expertise can support your financial growth."</p>
        </div>

      </div>
    </div>
  )
}

export default About
