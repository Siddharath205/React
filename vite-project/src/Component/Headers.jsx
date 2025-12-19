import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  return (
    <div className='bg-[#a3d154] flex justify-between items-center p-4'>
        <img src="/vite.svg" alt=""width={20} height={20} />
        <ul  className='hidden md:flex space-x-4'>
            <li onClick={() => navigate('/')}>home</li>
            <li onClick={() => navigate('/about')}>About</li>
            <li onClick={() => navigate('/contact')}>Contact</li>
            <li onClick={() => navigate('/blog')}>Blog</li>
        </ul>
        <div className='hidden md:flex space-x-4'>
            <button className='text-3xl  font-semibold italic text-teal-600 '>Login</button>
            <button>Sign up</button>
        </div>
        <IoMdMenu className='w-8 h-8 text-red-500 flex md:hidden '/>
    </div>
  )
}

export default Header