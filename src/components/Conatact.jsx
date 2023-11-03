import React from 'react'
import { FaTiktok, FaTwitter, FaDiscord } from "react-icons/fa";

const Conatact = () => {
  return (
    <div className='bg-[#151515] text-white py-24 px-4 w-full' id='contact'>
      <div className='max-w-[800px] mx-auto'>
        <h1 className='text-transparent bg-clip-text py-1 px-3 font-bold bg-gradient-to-r from-[#eec33d] to-[#ea9d3e] text-4xl'>Contact us</h1>

        <div className='p-5 mt-[20px] flex rounded-lg justify-evenly bg-[#151515]'>
          <a href="https://www.tiktok.com/@hivehubhq?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1">
            <FaTiktok size={50} className='text-[#eec33d]'/> 
          </a>
          <a href="https://twitter.com/HiveHubHQ">
            <FaTwitter size={50} className='text-[#eec33d]'/>
          </a>
          <a href="https://discord.com/invite/cAtaPBr2YD">
            <FaDiscord size={50} className='text-[#eec33d]'/>
          </a>
        </div>


      </div>
    </div>

  )
}

export default Conatact
