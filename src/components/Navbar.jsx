import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='w-full fixed backdrop-blur-md bg-[#151515] z-20'>
      <div className='text-white flex flex-row justify-between p-3'>
      <h1 className='text-2xl text-transparent  bg-clip-text py-1 px-3 font-bold bg-gradient-to-r from-[#eec33d] to-[#ea9d3e]'>Hive Hub</h1> 
      <ul className='hidden md:flex items-center gap-8 font-semibold text-[16px]'>
        <li className='hover:text-[#eec33d] cursor-pointer'>
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        <li className='hover:text-[#eec33d] cursor-pointer'>
          <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
        </li>
        <li className='hover:text-[#eec33d] cursor-pointer'>
            <Link to="price" spy={true} smooth={true} offset={-100} duration={500}>Price</Link>
        </li>
        <li className='hover:text-[#eec33d] cursor-pointer'>
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
        </li>
      </ul>
      <div className='items-center flex justify-center gap-3 px-2'>
        <div className='items-center text-[14px] justify-center flex px-4 py-2 bg-gradient-to-r from-[#eec33d] to-[#ea9d3e] text-[#151515] font-bold rounded-full'>
          <a href="https://discord.com/invite/cAtaPBr2YD" >
            Join Now
          </a>
        </div>
        {!nav ? <HiX size={25} className='md:hidden' onClick={handleNav}/> :  <HiMenu size={25} className='md:hidden' onClick={handleNav}/>}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] sm:w-[30%] h-screen bg-gradient-to-r from-[#151515] to-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <ul className='flex flex-col gap-5 pt-4 pl-6 font-bold'>
          <h1 className='text-2xl text-transparent  bg-clip-text bg-gradient-to-r from-[#eec33d] to-[#ea9d3e]'>Hive Hub</h1>
          <li>Home</li>
          <li>About</li>
          <li>Price</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar
